import Image from "next/image";
import { ArrowRight, Crop, Database, PenLine, ScanLine } from "lucide-react";

import { tx, type Lang } from "@/lib/i18n";

const webPreviews: Record<string, { src: string; background: string }> = {
  "signal-perdu": {
    src: "/shots/web/signal-perdu.png",
    background: "bg-[#32191d]",
  },
  "village-numerique-resistant": {
    src: "/shots/web/village.png",
    background: "bg-[#182922]",
  },
  "concours-webdocumentaires": {
    src: "/shots/web/concours.png",
    background: "bg-[#dcdffa] dark:bg-[#262640]",
  },
  "congres-sif-2026": {
    src: "/shots/web/sif.png",
    background: "bg-[#eadce7] dark:bg-[#322333]",
  },
  "site-but-informatique": {
    src: "/shots/web/but.png",
    background: "bg-[#f3dedb] dark:bg-[#382325]",
  },
};

function WindowDots() {
  return (
    <span className="flex gap-1">
      <span className="h-1 w-1 rounded-full bg-current opacity-50" />
      <span className="h-1 w-1 rounded-full bg-current opacity-30" />
      <span className="h-1 w-1 rounded-full bg-current opacity-20" />
    </span>
  );
}

// These previews are decorative; the folder's title and summary describe each project.
export function ProjectCardPreview({ slug, lang }: { slug: string; lang: Lang }) {
  const web = webPreviews[slug];

  if (web) {
    return (
      <div aria-hidden="true" className={`relative h-full w-full ${web.background}`}>
        <div className="absolute top-[6%] right-[6%] left-[6%] -rotate-3 overflow-hidden rounded-lg bg-white shadow-[0_8px_20px_rgba(0,0,0,0.16)] outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10">
          <div className="flex h-4 items-center gap-3 bg-[#f5f4f2] px-2 text-neutral-500">
            <WindowDots />
            <span className="h-1.5 w-1/2 rounded-full bg-black/5" />
          </div>
          <Image
            src={web.src}
            alt=""
            width={1440}
            height={900}
            sizes="300px"
            className="h-auto w-full"
          />
        </div>
      </div>
    );
  }

  if (slug === "aven") {
    return (
      <div aria-hidden="true" className="relative h-full w-full overflow-hidden bg-[#182414]">
        <div className="absolute top-[5%] left-[10%] w-[42%] -rotate-8 overflow-hidden rounded-xl outline outline-1 -outline-offset-1 outline-white/10">
          <Image
            src="/shots/aven/routines.png"
            alt=""
            width={473}
            height={1024}
            sizes="140px"
            className="h-auto w-full"
          />
        </div>
        <div className="absolute top-[9%] right-[8%] w-[42%] rotate-8 overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.25)] outline outline-1 -outline-offset-1 outline-white/10">
          <Image
            src="/shots/aven/session.png"
            alt=""
            width={473}
            height={1024}
            sizes="140px"
            className="h-auto w-full"
          />
        </div>
      </div>
    );
  }

  // Symbolic illustrations for projects without a public UI screenshot.
  if (slug === "free-screen") {
    return (
      <div aria-hidden="true" className="relative h-full w-full bg-[#d8eef1] dark:bg-[#19383e]">
        <div className="absolute top-[10%] right-[7%] left-[24%] rotate-3 overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
          <div className="flex h-5 items-center justify-between border-b border-black/5 px-2 text-neutral-500">
            <WindowDots />
            <span className="font-mono text-[7px]">PNG / JPEG</span>
          </div>
          <div className="flex h-20 items-center justify-center bg-[#eff7f8]">
            <div className="flex h-12 w-[65%] items-center justify-center rounded-md border border-dashed border-[#3091a5]/60 text-[#3091a5]">
              <ScanLine className="h-6 w-6" strokeWidth={1.5} />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 py-2 text-[#367282]">
            <Crop className="h-3 w-3" />
            <PenLine className="h-3 w-3" />
            <ArrowRight className="h-3 w-3" />
          </div>
        </div>
        <Image
          src="/shots/free-screen/icon.png"
          alt=""
          width={512}
          height={512}
          sizes="72px"
          className="absolute top-[9%] left-[6%] h-auto w-[24%] -rotate-6 drop-shadow-[0_8px_8px_rgba(0,0,0,0.12)]"
        />
      </div>
    );
  }

  if (slug === "fromagerie") {
    return (
      <div aria-hidden="true" className="relative h-full w-full bg-[#f1e9d7] dark:bg-[#393224]">
        <div className="absolute top-[8%] right-[10%] left-[10%] -rotate-3 rounded-xl border border-[#c5b48e]/50 bg-[#fffcf4] p-3 shadow-[0_8px_18px_rgba(66,48,14,0.1)]">
          <div className="flex items-center gap-2 text-[#8a7345]">
            <Database className="h-3.5 w-3.5" />
            <span className="font-mono text-[9px]">{tx(lang, "Modèle de données", "Data model")}</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-x-4 font-mono text-[9px] text-[#655839]">
            {["Fromage", "Client"].map((entity) => (
              <span key={entity} className="rounded border border-[#d7c9a9] bg-[#f7efdc] px-2 py-1.5 text-center">{entity}</span>
            ))}
            <span className="mx-auto h-3 w-px bg-[#bba575]" />
            <span className="mx-auto h-3 w-px bg-[#bba575]" />
            {["Panier", "Facture"].map((entity) => (
              <span key={entity} className="rounded border border-[#d7c9a9] px-2 py-1.5 text-center">{entity}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (slug === "analyse-trames-gps") {
    return (
      <div aria-hidden="true" className="relative h-full w-full bg-[#dfe9e3] dark:bg-[#1b3029]">
        <div className="absolute top-[7%] right-[7%] left-[7%] rotate-2 overflow-hidden rounded-xl bg-[#182921] shadow-[0_8px_18px_rgba(0,0,0,0.15)] outline outline-1 -outline-offset-1 outline-white/10">
          <div className="flex h-6 items-center gap-3 border-b border-white/10 px-3 text-white/60">
            <WindowDots />
            <span className="font-mono text-[8px]">NMEA 0183</span>
          </div>
          <div className="space-y-2 px-3 py-3 font-mono text-[10px]">
            <p className="text-[#a7d3b2]">$GPGGA<span className="text-white/40">, …</span></p>
            <div className="flex items-center gap-2 text-white/60">
              <ArrowRight className="h-3 w-3 shrink-0 text-[#a7d3b2]" />
              <span>{tx(lang, "heure · position", "time · position")}</span>
            </div>
            <p className="pl-5 text-white/60">satellites · altitude</p>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "analyse-de-textes") {
    return (
      <div aria-hidden="true" className="relative h-full w-full bg-[#e9def0] dark:bg-[#302239]">
        <div className="absolute top-[7%] right-[7%] left-[7%] -rotate-2 overflow-hidden rounded-xl bg-[#251d2e] shadow-[0_8px_18px_rgba(0,0,0,0.15)] outline outline-1 -outline-offset-1 outline-white/10">
          <div className="flex h-6 items-center gap-3 border-b border-white/10 px-3 text-white/60">
            <WindowDots />
            <span className="font-mono text-[8px]">CompterTokens.kt</span>
          </div>
          <div className="space-y-1 px-3 py-3 font-mono text-[9px] leading-relaxed text-[#e8ddee]">
            <p><span className="text-[#c3a8ed]">fun</span> compterTokens(</p>
            <p className="pl-3">texte: <span className="text-[#f0bf9e]">String</span></p>
            <p>): <span className="text-[#f0bf9e]">Int</span> {"{ … }"}</p>
            <p className="pt-1 text-[#b5a4bd]">Kotlin · JUnit</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
