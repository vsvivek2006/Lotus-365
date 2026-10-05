import { NextResponse } from "next/server";
import { generateBlogPost } from "@/lib/ai/generateBlogPost";
import { assertAdminUser, AuthorizationError } from "@/lib/authorization";

export async function POST(request: Request) {
  try {
    // Assert authenticated administrator session
    await assertAdminUser();

    const body = await request.json();
    const { topic, tone, keywords, wordCount, audience, model } = body;

    if (!topic || typeof topic !== "string") {
      return NextResponse.json(
        { error: "Topic is required" },
        { status: 400 }
      );
    }

    // Clamp inputs
    const safeTopic = String(topic).slice(0, 500);
    const safeTone = tone ? String(tone).slice(0, 100) : undefined;
    const safeAudience = audience ? String(audience).slice(0, 200) : undefined;
    const safeModel = model ? String(model).slice(0, 100) : undefined;
    const safeWordCount =
      typeof wordCount === "number"
        ? Math.min(Math.max(Math.round(wordCount), 200), 3000)
        : undefined;
    const safeKeywords = Array.isArray(keywords)
      ? keywords.slice(0, 10).map((k: unknown) => String(k).slice(0, 60))
      : undefined;

    const result = await generateBlogPost({
      topic: safeTopic,
      tone: safeTone,
      keywords: safeKeywords,
      wordCount: safeWordCount,
      audience: safeAudience,
      model: safeModel,
    });

    return NextResponse.json(result);
  } catch (err: unknown) {
    if (err instanceof AuthorizationError) {
      return NextResponse.json({ error: err.message }, { status: err.status });
    }
    // Safe error message without exposing backend stack trace
    return NextResponse.json(
      { error: "Failed to generate blog post. Please verify your inputs and try again." },
      { status: 500 }
    );
  }
}
