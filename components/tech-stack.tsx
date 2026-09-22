import { tx, type Lang } from "@/lib/i18n";

const tools: Array<{
  name: string;
  src: string;
  hover: string;
  leadingDivider?: boolean;
}> = [
  { name: "Swift", src: "/icons/swift.svg", hover: "hover:text-[#F05138]" },
  {
    name: "React",
    src: "/icons/react.svg",
    hover: "hover:text-[#087EA4] dark:hover:text-[#58C4DC]",
  },
  {
    name: "Next.js",
    src: "/icons/nextjs.svg",
    hover: "hover:text-slate-900 dark:hover:text-white",
  },
  {
    name: "Git",
    src: "/icons/git.svg",
    hover: "hover:text-[#F05032]",
    leadingDivider: true,
  },
  {
    name: "Cursor",
    src: "/icons/cursor.svg",
    hover: "hover:text-slate-900 dark:hover:text-white",
  },
  {
    name: "Hermès Agent",
    src: "/icons/hermes-agent.svg",
    hover: "hover:text-slate-900 dark:hover:text-white",
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
            <span className={`text-slate-500 transition-colors duration-200 ${tool.hover}`} title={tool.name}>
              <span
                aria-hidden="true"
                className="block h-6 w-6 bg-current"
                style={{
                  mask: `url(${tool.src}) center / contain no-repeat`,
                  WebkitMask: `url(${tool.src}) center / contain no-repeat`,
                }}
              />
              <span className="sr-only">{tool.name}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
