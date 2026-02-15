"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: any) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

export default function TurnstileWidget({
  siteKey,
  onToken,
}: {
  siteKey: string;
  onToken: (token: string) => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const widgetId = useRef<string | null>(null);

  const render = () => {
    if (!ref.current || !window.turnstile) return;
    if (widgetId.current) return;

    widgetId.current = window.turnstile.render(ref.current, {
      sitekey: siteKey,
      size: "invisible",
      callback: (token: string) => onToken(token),
      "error-callback": () => onToken(""),
      "expired-callback": () => onToken(""),
    });
  };

  useEffect(() => {
    render();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteKey]);

  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" onLoad={render} />
      <div ref={ref} />
    </>
  );
}
