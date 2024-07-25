import { useUserData } from "@/hooks/useUserData";
import { TechBadge } from "@/components/tech-badge";

export interface TechnologiesProps {
  className?: string;
}

export function Technologies({ className }: TechnologiesProps) {
  const { technologies } = useUserData();
  return (
    <div className={className}>
      <h2 className="tg-h2">Technologies</h2>

      <div className="flex flex-col gap-1 ps-2">
        {technologies.map((row, i) => (
          <div key={i} className="gap-1 flex flex-wrap">
            {row.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
