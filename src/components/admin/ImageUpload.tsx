"use client";

import { useState, useRef, ChangeEvent, DragEvent } from "react";
import Image from "next/image";
import { Upload, Loader2, Image as ImageIcon, Trash2, RefreshCw } from "lucide-react";
import { toast } from "sonner";

interface ImageUploadProps {
  value?: string;
  onChange: (url: string) => void;
  disabled?: boolean;
}

const ALLOWED_MIME_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
  "image/gif",
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export function ImageUpload({ value, onChange, disabled }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processAndUploadFile = async (file: File) => {
    // 1. Client-side size guard
    if (file.size > MAX_FILE_SIZE) {
      toast.error("File size exceeded", {
        description: `Selected file is ${(file.size / (1024 * 1024)).toFixed(
          1
        )}MB. Maximum allowed is 5MB.`,
      });
      return;
    }

    // 2. Client-side MIME guard
    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      toast.error("Unsupported file type", {
        description: "Please upload an image file (PNG, JPEG, WebP, GIF).",
      });
      return;
    }

    setIsUploading(true);
    const toastId = toast.loading("Uploading cover to storage...", {
      description: "Optimizing image asset via Sharp into WebP format.",
    });

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Failed to upload file to storage.");
      }

      onChange(data.url);
      toast.success("Cover image uploaded!", {
        id: toastId,
        description: "Asset successfully linked to this post.",
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to upload image. Try again.";
      toast.error("Upload failed", {
        id: toastId,
        description: message,
      });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processAndUploadFile(file);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!disabled && !isUploading) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (disabled || isUploading) return;

    const file = e.dataTransfer.files?.[0];
    if (file) {
      processAndUploadFile(file);
    }
  };

  const handleRemove = () => {
    onChange("");
    toast.info("Cover image removed", {
      description: "Remember to save your changes to persist this update.",
    });
  };

  return (
    <div className="space-y-3">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        onChange={handleFileChange}
        disabled={disabled || isUploading}
        className="hidden"
      />

      {value ? (
        <div className="relative rounded-2xl overflow-hidden border border-gray-700 bg-gray-900 group aspect-video max-h-72 w-full flex items-center justify-center shadow-lg">
          <Image
            src={value}
            alt="Cover preview"
            fill
            unoptimized
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          {/* Action Overlay */}
          <div className="absolute inset-0 bg-gray-950/75 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm flex items-center justify-center gap-3 p-4">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={disabled || isUploading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#F0C419] hover:bg-[#FFD000] text-gray-950 shadow-md transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Change Image
            </button>
            <button
              type="button"
              onClick={handleRemove}
              disabled={disabled || isUploading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white shadow-md transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => !disabled && !isUploading && fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center transition-all cursor-pointer relative overflow-hidden ${
            isDragOver
              ? "border-[#F0C419] bg-[#14614C]/30 scale-[1.01]"
              : "border-gray-700 hover:border-[#F0C419]/70 bg-gray-800/40 hover:bg-gray-800/70"
          } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {isUploading ? (
            <div className="flex flex-col items-center justify-center space-y-2 text-gray-300 py-3">
              <Loader2 className="w-7 h-7 animate-spin text-[#F0C419]" />
              <div>
                <p className="text-xs font-bold text-white">Uploading cover image...</p>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  Optimizing and converting into WebP storage.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-2.5 text-gray-400">
              <div className="p-3 rounded-2xl bg-gray-800 text-gray-300 border border-gray-700">
                {isDragOver ? (
                  <ImageIcon className="w-6 h-6 text-[#F0C419] animate-bounce" />
                ) : (
                  <Upload className="w-6 h-6 text-gray-400" />
                )}
              </div>
              <div className="text-xs sm:text-sm text-gray-300">
                <span className="font-bold text-[#F0C419] hover:underline">
                  Click to browse
                </span>{" "}
                or drag and drop cover here
              </div>
              <p className="text-[11px] text-gray-400">
                PNG, JPG, WebP, GIF (Max 5MB)
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
