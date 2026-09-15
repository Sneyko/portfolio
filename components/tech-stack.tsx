import { tx, type Lang } from "@/lib/i18n";

function SwiftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.5 17.2c-1.4 2.4-4.6 4.3-8.2 4.3-5.3 0-9.6-3.6-9.6-8.4 0-.4 0-.8.1-1.2C2.2 9.3.7 5.8.7 5.8c2.6 1.3 4.8 1.9 6.6 2C5.7 6.3 5 4.2 5.3 2c2.2 1.3 4 3.3 5 5.6 1.2-.7 2.6-1.1 4.1-1.1 4.3 0 7.6 3 7.6 6.8 0 1.4-.5 2.7-1.5 3.9Z"
      />
    </svg>
  );
}

function KotlinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="currentColor" d="M3 3h18L12 12 21 21H3V3Z" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 16V8h2.2l5.3 6.4V8H18v8h-2.1L10.5 9.5V16H8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 6c-2.7 0-4.4 1.3-5 4 1-1.3 2.1-1.8 3.4-1.5.7.2 1.3.7 1.8 1.4C13 11.4 14.2 12 16 12c2.7 0 4.4-1.3 5-4-1 1.3-2.1 1.8-3.4 1.5-.7-.2-1.3-.7-1.8-1.4C15 6.6 13.8 6 12 6Zm-5 6c-2.7 0-4.4 1.3-5 4 1-1.3 2.1-1.8 3.4-1.5.7.2 1.3.7 1.8 1.4C8 17.4 9.2 18 11 18c2.7 0 4.4-1.3 5-4-1 1.3-2.1 1.8-3.4 1.5-.7-.2-1.3-.7-1.8-1.4C10 12.6 8.8 12 7 12Z"
      />
    </svg>
  );
}

function GitIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.6 11.1 12.9 2.4a1.4 1.4 0 0 0-2 0L9.3 4l2.5 2.5c.6-.2 1.3 0 1.8.5.5.5.7 1.2.4 1.8l2.4 2.4c.6-.2 1.4 0 1.9.5a1.75 1.75 0 0 1-2.5 2.5 1.75 1.75 0 0 1-.4-1.9l-2.2-2.2v5.8a1.75 1.75 0 1 1-1.4-.1v-5.9a1.75 1.75 0 0 1-.9-2.3L8.2 5.1 2.4 10.9a1.4 1.4 0 0 0 0 2l8.7 8.7a1.4 1.4 0 0 0 2 0l8.5-8.5a1.4 1.4 0 0 0 0-2Z"
      />
    </svg>
  );
}

function CursorIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5 3.5 19.5 12 14 13.6 11.2 20.5 5 3.5Z"
      />
    </svg>
  );
}

const tools = [
  { name: "Swift", hover: "hover:text-[#F05138]", Icon: SwiftIcon },
  { name: "Kotlin", hover: "hover:text-[#7F52FF]", Icon: KotlinIcon },
  { name: "Next.js", hover: "hover:text-slate-900 dark:hover:text-white", Icon: NextIcon },
  { name: "Tailwind CSS", hover: "hover:text-[#06B6D4]", Icon: TailwindIcon },
  { name: "Git", hover: "hover:text-[#F05032]", Icon: GitIcon },
  { name: "Cursor", hover: "hover:text-slate-900 dark:hover:text-white", Icon: CursorIcon },
];

export function TechStack({ lang }: { lang: Lang }) {
  return (
    <div>
      <p className="mb-2.5 text-sm text-slate-600 dark:text-slate-400">
        {tx(lang, "stack / outils du moment :", "current favorite tech stack/tools:")}
      </p>
      <ul className="flex flex-wrap items-center gap-3.5 text-slate-500">
        {tools.map((tool, index) => (
          <li key={tool.name} className="flex items-center gap-3.5">
            {index === 4 ? (
              <span className="h-3 w-px bg-slate-300 dark:bg-slate-700" aria-hidden="true" />
            ) : null}
            <span className={`transition-colors duration-200 ${tool.hover}`} title={tool.name}>
              <tool.Icon />
              <span className="sr-only">{tool.name}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
