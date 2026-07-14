import { useEffect } from "react";

// Next.js set <title> per-route via generateMetadata on the server; without server
// components we just set document.title on mount. SSR still serves the default title from
// index.html, but the client corrects it before the first paint's meaningful content shows.
export function useTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
