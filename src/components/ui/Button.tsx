import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "brand" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold transition-all duration-200 will-change-transform focus-visible:outline-2 focus-visible:outline-offset-3";

const variants: Record<Variant, string> = {
  // Conversion CTAs (nav, starter kit, final CTA): deep navy purple (#271278)
  primary:
    "bg-brand-deep text-white hover:bg-brand-darker active:scale-[0.98] shadow-[0_8px_24px_-14px_rgba(39,18,120,0.55)] hover:shadow-[0_12px_28px_-12px_rgba(39,18,120,0.5)]",
  // Hero attention-grabbing CTA: bright brand purple (#4646C6)
  brand:
    "bg-brand text-white hover:bg-brand-600 active:scale-[0.98] shadow-[0_8px_24px_-12px_rgba(70,70,198,0.6)] hover:shadow-[0_12px_28px_-10px_rgba(70,70,198,0.55)]",
  // Hero secondary: outline only, deep ink color (#1B1A33)
  secondary:
    "bg-transparent text-brand-darker border border-brand-darker hover:bg-brand-darker/5 active:scale-[0.98]",
  ghost: "text-ink/70 hover:text-brand",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

type AnchorProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "children" | "className">;

export function Button({
  href,
  variant = "primary",
  size = "lg",
  className = "",
  children,
  ...rest
}: AnchorProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();
  const isInternal = href.startsWith("/") || href.startsWith("#");
  if (isInternal) {
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={cls}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
