import { cn } from "@/lib/utils";

export interface PageProps {
  children: React.ReactNode;
  // className?: string;
}

export function Page({ children }: PageProps) {
  return (
    <div className={cn("page", "bg-neutral-100 dark:bg-slate-900")}>
      <div className={cn("page-content", "flex-col flex")}>{children}</div>
    </div>
  );
}

export interface BookProps {
  children: React.ReactNode;
}
export function Book({ children }: BookProps) {
  return <div className="book">{children}</div>;
}
