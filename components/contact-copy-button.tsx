"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

import { tx, type Lang } from "@/lib/i18n";

const buttonClass =
  "inline-flex h-9 items-center gap-2 rounded-sm border border-border px-3.5 text-sm font-semibold text-fg transition-colors hover:border-muted-soft hover:bg-[color-mix(in_srgb,var(--fg)_4%,transparent)]";

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
      <button type="button" onClick={copyEmail} className={buttonClass}>
        {status === "copied" ? (
          <Check size={16} aria-hidden="true" />
        ) : (
          <Copy size={16} aria-hidden="true" />
        )}
        {status === "copied"
          ? tx(lang, "Adresse copiée", "Email copied")
          : tx(lang, "Copier l'adresse", "Copy email address")}
      </button>
      <p
        role="status"
        className={
          status === "error"
            ? "max-w-72 text-sm text-fg-soft"
            : "sr-only"
        }
      >
        {status === "copied"
          ? tx(lang, "Adresse e-mail copiée.", "Email address copied.")
          : status === "error"
            ? tx(
                lang,
                "Copie impossible. Sélectionnez l'adresse ci-dessus pour la copier.",
                "Couldn't copy. Select the email address above to copy it.",
              )
            : ""}
      </p>
    </div>
  );
}
