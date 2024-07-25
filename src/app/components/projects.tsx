import { TechBadge } from "@/components/tech-badge";
import { Badge } from "@/components/ui/badge";
import { useUserData } from "@/hooks/useUserData";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface ProjectsProps {
  className?: string;
}

export function Projects({ className }: ProjectsProps) {
  const data = useUserData();

  return (
    <section className={cn("", className)}>
      <h2 className="tg-h2">Projects</h2>

      <div className="grid gap-1 grid-cols-2">
        {data.projects.map((p) => (
          <div key={p.id} className="flex flex-col ps-2">
            <div className="flex flex-row justify-between items-center mb-1">
              <h3 className="text-base font-semibold">{p.title}</h3>
              <span className="text-sm">{p.date}</span>
            </div>
            <div className="whitespace-pre-wrap mb-1 text-xs text-justify">
              {p.description}
            </div>

            <div className="flex flex-col">
              {p.links.map((url) => (
                <Link key={url} href={url} className="text-xs link mb-1">
                  {url}
                </Link>
              ))}
            </div>
            {/* <div className="flex gap-1 flex-wrap mt-2">
              {p.techList.map((skill) => (
                <TechBadge key={skill}>{skill}</TechBadge>
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
