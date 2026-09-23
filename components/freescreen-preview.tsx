import { ArrowUpRight, Check, Crop, ImageIcon, MousePointer2, Pencil, Scan } from "lucide-react";

import { tx, type Lang } from "@/lib/i18n";

// An illustration of the workflow, not a screenshot of the macOS application.
export function FreeScreenPreview({ step, lang }: { step: number; lang: Lang }) {
  return (
    <div aria-hidden="true" className="w-full max-w-[440px] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_16px_36px_-16px_rgba(15,23,42,0.25)]">
      <div className="flex items-center justify-between gap-2 border-b border-slate-200 px-3 py-3 sm:px-4">
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-[#ee8e87]" />
          <span className="h-2 w-2 rounded-full bg-[#eac47b]" />
          <span className="h-2 w-2 rounded-full bg-[#95c6a0]" />
        </div>
        <span className="text-xs font-semibold text-slate-600">FreeScreen</span>
        <Scan className="h-3.5 w-3.5 text-slate-400" />
      </div>
      <div className="flex items-center justify-center gap-4 border-b border-slate-200 bg-slate-50 py-2.5 text-slate-500">
        <MousePointer2 className="h-3.5 w-3.5" />
        <Crop className={`h-3.5 w-3.5 ${step === 0 ? "text-accent-600" : ""}`} />
        <Pencil className={`h-3.5 w-3.5 ${step === 1 ? "text-accent-600" : ""}`} />
        <ImageIcon className={`h-3.5 w-3.5 ${step === 2 ? "text-accent-600" : ""}`} />
      </div>
      <div className={`relative flex h-[222px] items-center justify-center p-6 sm:h-[246px] sm:p-8 ${step === 2 ? "bg-[linear-gradient(135deg,#f8d2c0,#e9a0a0_50%,#c1ccec)]" : "bg-slate-100"}`}>
        <div className={`relative w-full rounded-xl bg-white p-5 shadow-sm ${step === 0 ? "outline-2 outline-offset-4 outline-dashed outline-accent-500" : ""}`}>
          <div className="mb-4 h-2 w-12 rounded-full bg-slate-200" />
          <p className="text-[18px] leading-tight font-semibold tracking-tight text-slate-800 sm:text-[23px]">
            {tx(lang, "Une idée prend forme.", "An idea takes shape.")}
          </p>
          <div className="mt-4 flex gap-2">
            <div className="h-12 flex-1 rounded-lg bg-[#f3c9c9]" />
            <div className="h-12 flex-1 rounded-lg bg-[#dce7f4]" />
            <div className="h-12 flex-1 rounded-lg bg-[#e3e9d8]" />
          </div>
          {step === 1 ? <ArrowUpRight className="absolute right-3 -bottom-2 h-14 w-14 -rotate-90 text-accent-600" strokeWidth={2.5} /> : null}
        </div>
        {step === 0 ? <MousePointer2 className="absolute right-3 bottom-5 h-5 w-5 fill-white text-slate-800" /> : null}
      </div>
      <div className="flex h-11 items-center justify-between border-t border-slate-200 px-3 text-[10px] text-slate-500 sm:px-4 sm:text-[11px]">
        <span>{tx(lang, "Traitement sur le Mac", "Processed on your Mac")}</span>
        <span className="flex items-center gap-1.5 font-medium text-slate-700">
          {step === 2 ? <><Check className="h-3 w-3" /> PNG · JPEG</> : tx(lang, "Aperçu", "Preview")}
        </span>
      </div>
    </div>
  );
}
