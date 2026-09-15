import { tx, type Lang } from "@/lib/i18n";

const PORTRAIT_MASK = `url("data:image/svg+xml,%3Csvg width='603' height='590' fill='none' viewBox='0 0 603 590' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0v393h228v9.5c0 103.55 83.947 187.5 187.5 187.5s187.5-83.947 187.5-187.5v-402.5h-603z' fill='%23000'/%3E%3C/svg%3E%0A")`;

export function HeroPortrait({ lang }: { lang: Lang }) {
  return (
    <div className="pointer-events-none absolute -top-36 right-0 z-0 hidden select-none lg:block">
      <div
        className="relative h-[590px] w-[603px]"
        style={{
          maskImage: PORTRAIT_MASK,
          WebkitMaskImage: PORTRAIT_MASK,
        }}
      >
        <div className="absolute top-0 right-0 h-[590px] w-[375px] rounded-full bg-gradient-to-t from-accent-400/20 via-accent-400/0 dark:from-accent-600/10 dark:via-accent-600/0">
          <div className="absolute right-0 bottom-0">
            <img
              alt={tx(lang, "Portrait de Tom Testu", "Portrait of Tom Testu")}
              src="/images/avatar.png"
              width={500}
              height={500}
              className="hidden max-w-none translate-x-10 lg:block dark:brightness-[.82]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
