/**
 * iPhone frame — adapted from Opensource UI (MIT license).
 * https://opensourceui.in/components/phone
 */
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

const frames = {
  titanium: { frame: "bg-[#9a9590]", button: "bg-[#8f8a85]" },
  graphite: { frame: "bg-[#2b2b30]", button: "bg-[#3a3a41]" },
  white: { frame: "bg-[#e3e2e0]", button: "bg-[#d6d5d3]" },
} as const;

type PhoneVariant = keyof typeof frames;

type PhoneMockupCardProps = Readonly<
  ComponentPropsWithoutRef<"div"> & {
    variant?: PhoneVariant;
    // Show or hide the Dynamic Island and camera dot.
    showDynamicIsland?: boolean;
    children: ReactNode;
  }
>;

function PhoneSideButtons({
  frame,
}: Readonly<{ frame: (typeof frames)[PhoneVariant] }>) {
  const base = cn("absolute w-[2px] rounded-l-sm", frame.button);
  return (
    <>
      {/* Mute switch */}
      <div className={cn(base, "top-[15.5%] -left-[2px] h-[3.2%]")} aria-hidden="true" />
      {/* Volume up */}
      <div className={cn(base, "top-[21%] -left-[2px] h-[7.2%]")} aria-hidden="true" />
      {/* Volume down */}
      <div className={cn(base, "top-[30.5%] -left-[2px] h-[7.2%]")} aria-hidden="true" />
      {/* Power button */}
      <div
        className={cn(base, "top-[23%] -right-[2px] h-[11.5%] rounded-l-none rounded-r-sm")}
        aria-hidden="true"
      />
    </>
  );
}

// iPhone proportions: 70.6 x 146.6 mm — set the width via className.
export const PhoneMockupCard = forwardRef<HTMLDivElement, PhoneMockupCardProps>(
  (
    {
      className,
      children,
      variant = "titanium",
      showDynamicIsland = true,
      ...props
    },
    ref,
  ) => {
    const frame = frames[variant];

    return (
      <div
        ref={ref}
        data-slot="phone-mockup-card"
        className={cn(
          "relative aspect-[70.6/146.6] shrink-0 rounded-[2.6rem] p-[2px]",
          frame.frame,
          className,
        )}
        {...props}
      >
        <PhoneSideButtons frame={frame} />
        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-black">
          {/* Thin ~4px bezel on all sides */}
          <div className="absolute inset-[3.5px] overflow-hidden rounded-[2.3rem] bg-black">
            <div className="relative h-full w-full">{children}</div>

            {showDynamicIsland ? (
              <div
                className="absolute top-[9px] left-1/2 z-20 h-[20px] w-[66px] -translate-x-1/2 rounded-full bg-black"
                aria-hidden="true"
              >
                <div
                  className="absolute top-1/2 right-[5px] block h-[8px] w-[8px] shrink-0 -translate-y-1/2 rounded-full bg-[#6a90c8]/20"
                  aria-hidden="true"
                />
              </div>
            ) : null}

            {/* Home indicator */}
            <div
              className="absolute bottom-[5.5px] left-1/2 z-20 h-[3px] w-[32%] -translate-x-1/2 rounded-full bg-white/25"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    );
  },
);

PhoneMockupCard.displayName = "PhoneMockupCard";
