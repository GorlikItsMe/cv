import { cn } from "@/lib/utils";

const rodoPlaceholder = `I hereby give consent for my personal data to be processed for the purpose of conducting recruitment for the position for which I am applying`;

export function Rodo({ className }: { className?: string }) {
  return (
    <div className={cn("text-slate-500 text-xs text-justify", className)}>
      {rodoPlaceholder}
    </div>
  );
}
