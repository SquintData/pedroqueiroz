"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const storageKey = "pedro-cookie-consent";

export function CookieConsent() {
  const [consent, setConsent] = useState<"accepted" | "rejected" | null>(null);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored);
    }
  }, []);

  function choose(value: "accepted" | "rejected") {
    window.localStorage.setItem(storageKey, value);
    setConsent(value);
  }

  return (
    <>
      {consent === "accepted" && gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      {consent ? null : (
        <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-sm border border-bone/12 bg-coal/95 p-4 shadow-glow backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
            <p className="text-sm leading-6 text-smoke">
              Usamos cookies analiticos somente com seu consentimento para
              entender visitas e melhorar o site.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => choose("rejected")}
                className="focus-ring rounded-sm border border-bone/15 px-4 py-3 text-sm font-bold text-bone"
              >
                Rejeitar
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="focus-ring rounded-sm bg-ember px-4 py-3 text-sm font-extrabold text-coal"
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
