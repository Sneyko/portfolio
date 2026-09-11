import type { ReactNode } from "react";

import { BrowserMockupCard } from "@/components/mockups/browser-mockup-card";
import { cn } from "@/lib/cn";

/* Web page cover: a screenshot inside a browser frame. */
export function WebCover({
  url,
  src,
  alt,
  aspect = "aspect-[16/10]",
  className,
}: {
  url: string;
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <BrowserMockupCard url={url} className={className} contentClassName={aspect}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
    </BrowserMockupCard>
  );
}

/* Terminal cover: real output of the GPS NMEA analysis program. */
function TerminalRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <span className="w-[128px] shrink-0 text-white/40">{label}</span>
      <span className="text-[#e6e4dc]">{value}</span>
    </div>
  );
}

export function TerminalCover({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[10px] border border-[#2a2924] bg-[#171613]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
        </div>
        <span className="truncate font-mono text-[10px] text-white/40">
          analyse_gps — trame_test.txt
        </span>
      </div>
      <div className="space-y-[3px] p-4 font-mono text-[10.5px] leading-[1.6]">
        <p className="pb-2 text-white/70">
          <span className="text-[#8fbf94]">$</span> ./analyse_gps -f trame_test.txt
        </p>
        <TerminalRow label="Heure UTC" value="06:40:36.289" />
        <TerminalRow label="Latitude" value="48° 36.5375′ N" />
        <TerminalRow label="Latitude (decimal)" value="48.608958°" />
        <TerminalRow label="Longitude" value="7° 40.9373′ E" />
        <TerminalRow label="Longitude (decimal)" value="7.682288°" />
        <TerminalRow label="Qualite du fix" value="1 (GPS (SPS))" />
        <TerminalRow label="Satellites utilises" value="4" />
        <TerminalRow label="HDOP" value="3.2" />
        <TerminalRow label="Altitude" value="200.2 M" />
      </div>
    </div>
  );
}

/* Code cover: a real snippet from the Kotlin text-analysis library. */
export function KotlinCover({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[10px] border border-[#2a2924] bg-[#171613]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
        </div>
        <span className="truncate font-mono text-[10px] text-white/40">
          CompterTokens.kt
        </span>
      </div>
      <div className="p-4 font-mono text-[10.5px] leading-[1.7] whitespace-pre text-[#d8d6ce]">
        <p>
          <span className="text-[#a9b8e8]">fun</span> compterTokens(texte: String):{" "}
          <span className="text-[#a9b8e8]">Int</span> {"{"}
        </p>
        <p>{"    "}require(texte.isNotBlank()) {"{"}</p>
        <p>
          {"        "}
          <span className="text-[#8fbf94]">
            &quot;Le texte ne doit pas être vide&quot;
          </span>
        </p>
        <p>{"    }"}</p>
        <p>
          {"    "}
          <span className="text-[#a9b8e8]">var</span> nbTokens: Int = 0
        </p>
        <p>{"    "}// … parcourt le texte caractère par caractère</p>
        <p>
          {"    "}
          <span className="text-[#a9b8e8]">while</span> (i &lt; texte.length - 1) {"{"}
        </p>
        <p>
          {"        "}
          <span className="text-[#a9b8e8]">if</span> (!estCaractere(texte[i]) &amp;&amp;
          estCaractere(texte[i + 1])) {"{"}
        </p>
        <p>{"            "}nbTokens++</p>
        <p>{"        }"}</p>
        <p>{"    }"}</p>
        <p>
          {"    "}
          <span className="text-[#a9b8e8]">return</span> nbTokens
        </p>
        <p>{"}"}</p>
      </div>
    </div>
  );
}

/* Blueprint cover: the class model of the Java cheese-shop app. */
export function BlueprintCover({ className }: { className?: string }) {
  const rows: Array<[string, string]> = [
    ["ihm", "ApplicationFromagerie"],
    ["modèle", "Fromage · Client · Panier · LignePanier"],
    ["modèle", "Facture · Transporteur · TypeLait · ModePaiement"],
    ["données", "OutilsBaseDonneesFromages"],
  ];

  return (
    <div
      className={cn(
        "flex flex-col justify-center rounded-[10px] border border-line bg-white px-6 py-8 md:px-10",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[560px]">
        <p className="font-mono text-[10.5px] text-ink/40">
          sae-s2-01 — modèle de classes
        </p>
        <div className="mt-4 divide-y divide-line border-y border-line">
          {rows.map(([kind, value]) => (
            <div
              key={value}
              className="flex items-baseline gap-4 py-2.5 font-mono text-[11.5px]"
            >
              <span className="w-16 shrink-0 text-[10.5px] text-ink/45">
                {kind}/
              </span>
              <span className="text-ink/80">{value}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-[10.5px] text-ink/40">
          Java · Maven · base de données
        </p>
      </div>
    </div>
  );
}
