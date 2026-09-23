import Image from "next/image";

import { FreeScreenPreview } from "@/components/freescreen-preview";
import { ProjectWalkthrough } from "@/components/project-walkthrough";
import { Chips, SectionHeader, TextLink } from "@/components/ui";
import { tx, type Lang } from "@/lib/i18n";
import { freeScreen } from "@/lib/projects";

function AvenWalkthrough({ lang }: { lang: Lang }) {
  const screens = [
    {
      title: tx(lang, "Planifier", "Plan"),
      description: tx(lang, "Préparer ses routines pour retrouver ses exercices à chaque séance.", "Prepare workout routines to keep your exercises ready for each session."),
      src: "/shots/aven/demo-routines.png",
      alt: tx(lang, "Écran des routines d’entraînement dans Aven", "Workout routines screen in Aven"),
    },
    {
      title: tx(lang, "S’entraîner", "Train"),
      description: tx(lang, "Enregistrer ses séries, ses charges et ses répétitions pendant l’effort.", "Log sets, weights and repetitions as you train."),
      src: "/shots/aven/demo-session.png",
      alt: tx(lang, "Séance guidée avec séries et temps de repos dans Aven", "Guided workout with sets and rest time in Aven"),
    },
    {
      title: tx(lang, "Progresser", "Progress"),
      description: tx(lang, "Visualiser ses rangs par muscle et suivre les progrès au fil des séances.", "See muscle ranks and track progress across workouts."),
      src: "/shots/aven/demo-progression.png",
      alt: tx(lang, "Rangs musculaires et progression dans Aven", "Muscle ranks and progress in Aven"),
    },
  ];

  return (
    <ProjectWalkthrough
      name="Aven"
      label={tx(lang, "Dans l’app · captures réelles", "Inside the app · actual screenshots")}
      className="order-2 bg-[#f1f4ea] lg:order-1 dark:bg-[#1a2319]"
      steps={screens.map((screen) => ({
        ...screen,
        preview: (
          <Image
            src={screen.src}
            alt={screen.alt}
            width={1320}
            height={2868}
            className="h-full w-auto max-w-full rounded-[26px] outline outline-1 outline-black/10 dark:outline-white/10"
          />
        ),
      }))}
    />
  );
}

function FreeScreenWalkthrough({ lang }: { lang: Lang }) {
  const steps = [
    { title: tx(lang, "Capturer", "Capture"), description: tx(lang, "Sélectionner une zone, une fenêtre ou l’écran entier depuis la barre des menus.", "Capture a region, a window or the full screen from the menu bar.") },
    { title: tx(lang, "Annoter", "Annotate"), description: tx(lang, "Ajouter une flèche ou du texte pour attirer l’attention sur ce qui compte.", "Add an arrow or text to highlight what matters.") },
    { title: tx(lang, "Exporter", "Export"), description: tx(lang, "Choisir un fond et enregistrer en PNG ou JPEG. Les fichiers restent sur le Mac.", "Choose a background and save as PNG or JPEG. Files stay on your Mac.") },
  ];
  return (
    <ProjectWalkthrough
      name="FreeScreen"
      label={tx(lang, "Du cadrage à l’export · parcours illustré", "From capture to export · illustrated walkthrough")}
      className="bg-[#edf5f8] dark:bg-[#132b35]"
      steps={steps.map((step, index) => ({ ...step, preview: <FreeScreenPreview step={index} lang={lang} /> }))}
    />
  );
}

export function FeaturedProjects({ lang }: { lang: Lang }) {
  return (
    <section id="projets-selectionnes" className="mb-16 scroll-mt-28 lg:mb-24">
      <div className="content-wrapper">
        <SectionHeader title={tx(lang, "Deux apps, de l’idée à l’usage.", "Two apps, from idea to everyday use.")} />
        <p className="mt-4 max-w-[64ch] text-[15px] leading-relaxed text-pretty text-slate-600 dark:text-slate-400">
          {tx(lang, "Deux projets personnels pour explorer ce que j’aime : concevoir une interface, développer ses fonctionnalités et soigner les détails d’usage.", "Two personal projects that bring together what I enjoy: designing interfaces, building features and refining the details of everyday use.")}
        </p>

        <article id="aven" className="mt-8 grid scroll-mt-28 gap-8 rounded-[32px] border border-divider-light bg-white p-3 sm:gap-10 sm:p-6 lg:grid-cols-2 lg:items-center lg:gap-12 dark:border-divider-dark dark:bg-slate-900">
          <AvenWalkthrough lang={lang} />
          <div className="order-1 min-w-0 px-3 pt-3 pb-1 sm:px-2 sm:py-3 lg:order-2 lg:pr-6">
            <ProjectIdentity name="Aven" icon="/shots/aven/icon.png" platform="iOS · SwiftUI" />
            <h3 className="mt-6 text-[28px] leading-tight font-semibold tracking-tight text-balance text-slate-800 sm:text-[32px] dark:text-slate-100">
              <span className="sr-only">Aven — </span>
              {tx(lang, "Rendre les progrès visibles.", "Make progress visible.")}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-pretty text-slate-600 dark:text-slate-400">
              {tx(lang, "Un journal de musculation pour préparer ses séances, suivre chaque série et voir sa régularité se traduire en progrès.", "A workout journal to plan sessions, track every set and see consistency turn into progress.")}
            </p>
            <dl className="mt-6 space-y-4 border-t border-divider-light pt-6 dark:border-divider-dark">
              <ProjectDetail title={tx(lang, "Mon rôle", "My role")} text={tx(lang, "Conception du produit, design de l’interface et développement iOS.", "Product concept, interface design and iOS development.")} />
              <ProjectDetail title={tx(lang, "Le choix clé", "Key decision")} text={tx(lang, "Une interface lisible pendant l’effort, avec une Live Activity pour garder la séance à portée de main.", "An interface that stays readable during a workout, with a Live Activity to keep the session close at hand.")} />
            </dl>
            <Chips items={["Swift", "SwiftUI", "ActivityKit", "Supabase"]} className="mt-6" />
            <p className="mt-5 text-xs text-slate-500 dark:text-slate-400">{tx(lang, "Projet personnel · en développement", "Personal project · in development")}</p>
          </div>
        </article>

        <article id="free-screen" className="mt-6 grid scroll-mt-28 gap-8 rounded-[32px] border border-divider-light bg-white p-3 sm:gap-10 sm:p-6 lg:grid-cols-2 lg:items-center lg:gap-12 dark:border-divider-dark dark:bg-slate-900">
          <div className="order-2"><FreeScreenWalkthrough lang={lang} /></div>
          <div className="order-1 min-w-0 px-3 pt-3 pb-1 sm:px-2 sm:py-3 lg:pl-6">
            <ProjectIdentity name="FreeScreen" icon="/shots/free-screen/icon.png" platform="macOS · SwiftUI" />
            <h3 className="mt-6 text-[28px] leading-tight font-semibold tracking-tight text-balance text-slate-800 sm:text-[32px] dark:text-slate-100">
              <span className="sr-only">FreeScreen — </span>
              {tx(lang, "Une capture prête à partager.", "A screenshot ready to share.")}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-pretty text-slate-600 dark:text-slate-400">
              {tx(lang, "Capturer, annoter et présenter une image dans le même outil, directement depuis la barre des menus du Mac.", "Capture, annotate and style an image in one tool, straight from your Mac’s menu bar.")}
            </p>
            <dl className="mt-6 space-y-4 border-t border-divider-light pt-6 dark:border-divider-dark">
              <ProjectDetail title={tx(lang, "Mon rôle", "My role")} text={tx(lang, "Développement de l’app macOS et de son éditeur de captures.", "Development of the macOS app and its screenshot editor.")} />
              <ProjectDetail title={tx(lang, "Le choix clé", "Key decision")} text={tx(lang, "Un outil natif qui traite les images localement, jusqu’à l’export PNG ou JPEG.", "A native tool that processes images locally, all the way to PNG or JPEG export.")} />
            </dl>
            <Chips items={freeScreen.tech} className="mt-6" />
            <div className="mt-6">
              <TextLink href={freeScreen.links.github}>{tx(lang, "Explorer le code de FreeScreen", "Explore the FreeScreen source")}</TextLink>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function ProjectIdentity({ name, icon, platform }: { name: string; icon: string; platform: string }) {
  return (
    <div className="flex items-center gap-3">
      <Image src={icon} alt="" width={44} height={44} className="h-11 w-11 rounded-[11px] outline outline-1 outline-black/10 dark:outline-white/10" />
      <div>
        <p className="text-base font-bold text-slate-800 dark:text-slate-100">{name}</p>
        <p className="mt-0.5 font-mono text-[11px] text-slate-500 dark:text-slate-400">{platform}</p>
      </div>
    </div>
  );
}

function ProjectDetail({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <dt className="text-xs font-bold text-slate-800 dark:text-slate-200">{title}</dt>
      <dd className="mt-1 text-sm leading-relaxed text-pretty text-slate-600 dark:text-slate-400">{text}</dd>
    </div>
  );
}
