import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Button({
  url,
  Icon,
  text,
  className,
  variant = "primary",
}: {
  url: string;
  Icon: React.ComponentType;
  text: string;
  className?: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link
      href={url}
      className={cn(
        `flex items-center ${
          variant === "primary"
            ? "bg-heading text-background"
            : "bg-transparent text-heading"
        } rounded-full justify-center py-5 px-10 cursor-pointer space-x-4 border border-heading hover:bg-transparent shrink-0 hover:text-heading transition-all duration-300 w-fit group`,
        className
      )}
    >
      <span
        className={`shrink-0 ${
          variant === "secondary" &&
          "group-hover:translate-x-3 duration-300 transition-transform"
        }`}
      >
        {text}
      </span>
      <Icon />
    </Link>
  );
}
