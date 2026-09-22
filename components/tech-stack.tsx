import type { ReactNode } from "react";

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

function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="2.05" fill="currentColor" />
      <ellipse
        cx="12"
        cy="12"
        rx="9.2"
        ry="3.55"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9.2"
        ry="3.55"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9.2"
        ry="3.55"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        transform="rotate(120 12 12)"
      />
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

function HermesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.2c.35 0 .68.16.86.46.46 1.02 1.48 1.66 2.58 1.9-1.28.16-2.38-.22-3.44-1.02-.18.52-.36.9-.36 1.42 0 .52.18.9.36 1.42 1.06-.8 2.16-1.18 3.44-1.02-1.1.24-2.12.88-2.58 1.9a1.05 1.05 0 0 1-1.72 0c-.46-1.02-1.48-1.66-2.58-1.9 1.28-.16 2.38.22 3.44 1.02.18-.52.36-.9.36-1.42 0-.52-.18-.9-.36-1.42-1.06.8-2.16 1.18-3.44 1.02 1.1-.24 2.12-.88 2.58-1.9.18-.3.51-.46.86-.46Z"
      />
      <path fill="currentColor" d="M11.2 8h1.6v13.2h-1.6Z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        d="M8.1 9.6c1.7 1.7 3.1 1.9 3.9 1.9s2.2-.2 3.9-1.9M7.3 13.4c2.1 2 3.7 2.2 4.7 2.2s2.6-.2 4.7-2.2M8.1 17.2c1.7 1.7 3.1 1.9 3.9 1.9s2.2-.2 3.9-1.9"
      />
    </svg>
  );
}

const tools: Array<{
  name: string;
  hover: string;
  Icon: () => ReactNode;
  leadingDivider?: boolean;
}> = [
  { name: "Swift", hover: "hover:text-[#F05138]", Icon: SwiftIcon },
  {
    name: "React",
    hover: "hover:text-[#087EA4] dark:hover:text-[#58C4DC]",
    Icon: ReactIcon,
  },
  {
    name: "Next.js",
    hover: "hover:text-slate-900 dark:hover:text-white",
    Icon: NextIcon,
  },
  {
    name: "Git",
    hover: "hover:text-[#F05032]",
    Icon: GitIcon,
    leadingDivider: true,
  },
  {
    name: "Cursor",
    hover: "hover:text-slate-900 dark:hover:text-white",
    Icon: CursorIcon,
  },
  {
    name: "Hermès Agent",
    hover: "hover:text-[#C4841D] dark:hover:text-[#E8B84A]",
    Icon: HermesIcon,
  },
];

export function TechStack({ lang }: { lang: Lang }) {
  return (
    <div>
      <p className="mb-2.5 text-sm text-slate-600 dark:text-slate-400">
        {tx(lang, "stack / outils du moment :", "current favorite tech stack/tools:")}
      </p>
      <ul className="flex flex-wrap items-center gap-3.5 text-slate-500">
        {tools.map((tool) => (
          <li key={tool.name} className="flex items-center gap-3.5">
            {tool.leadingDivider ? (
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
