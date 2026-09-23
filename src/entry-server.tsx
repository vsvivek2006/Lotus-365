import React from 'react';
import { renderToString } from 'react-dom/server';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider, FilledContext } from 'react-helmet-async';
import { routes } from './App';

export function render(url: string) {
  const helmetContext = {} as FilledContext;

  const router = createMemoryRouter(routes, {
    initialEntries: [url],
  });

  const appHtml = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <RouterProvider router={router} />
      </HelmetProvider>
    </React.StrictMode>
  );

  const { helmet } = helmetContext;

  return {
    appHtml,
    helmet,
  };
}
