import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  align?: "left" | "center";
  as?: "h2" | "h3";
  subtitle?: ReactNode;
  className?: string;
};

export function SectionHeading({
  children,
  align = "left",
  as: Tag = "h2",
  subtitle,
  className = "",
}: Props) {
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto" : ""} ${className}`}
    >
      <Tag className="font-display text-brand font-bold tracking-tight text-3xl md:text-[2.25rem] leading-[1.15]">
        {children}
      </Tag>
      {subtitle ? (
        <p
          className={`mt-4 font-ui text-body text-base md:text-lg leading-relaxed ${
            align === "center" ? "max-w-xl mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
