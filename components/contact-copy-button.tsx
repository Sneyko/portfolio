"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

import { tx, type Lang } from "@/lib/i18n";

export function ContactCopyButton({ email, lang }: { email: string; lang: Lang }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    if (status !== "copied") return;

    const timeout = window.setTimeout(() => setStatus("idle"), 3000);
    return () => window.clearTimeout(timeout);
  }, [status]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex max-w-full flex-col items-start gap-2">
      <button
        type="button"
        onClick={copyEmail}
        className="button button--ghost h-[52px] min-w-44 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-500"
      >
        {status === "copied" ? (
          <Check size={18} aria-hidden="true" />
        ) : (
          <Copy size={18} aria-hidden="true" />
        )}
        {status === "copied"
          ? tx(lang, "Adresse copiée", "Email copied")
          : tx(lang, "Copier l’adresse", "Copy email address")}
      </button>
      <p
        role="status"
        className={
          status === "error"
            ? "max-w-72 text-sm text-slate-600 dark:text-slate-400"
            : "sr-only"
        }
      >
        {status === "copied"
          ? tx(lang, "Adresse e-mail copiée.", "Email address copied.")
          : status === "error"
            ? tx(
                lang,
                "Copie impossible. Sélectionnez l’adresse ci-dessus pour la copier.",
                "Couldn’t copy. Select the email address above to copy it.",
              )
            : ""}
      </p>
    </div>
  );
}
