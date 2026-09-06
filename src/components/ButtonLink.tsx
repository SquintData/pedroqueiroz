import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-ember text-coal hover:bg-bone"
      : "border border-bone/15 bg-bone/5 text-bone hover:border-ember/70 hover:bg-ember/10";

  return (
    <a
      className={`focus-ring inline-flex min-h-14 items-center justify-center gap-2 rounded-sm px-5 text-sm font-extrabold uppercase tracking-[0.13em] transition ${styles} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
