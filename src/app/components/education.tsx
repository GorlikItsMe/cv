import { useUserData } from "@/hooks/useUserData";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface EducationProps {
  className?: string;
}

export function Education({ className }: EducationProps) {
  const { education } = useUserData();

  return (
    <section className={cn("text-sm", className)}>
      <h2 className="tg-h2">Education</h2>

      <div className="grid grid-cols-1 gap-2">
        {education.map((edu) => (
          <div key={edu.id} className="flex flex-col ps-2">
            <div className="flex flex-row justify-between mb-1 items-center">
              <h3 className="text-base font-semibold">{edu.title}</h3>
              <div className="text-sm">{edu.date}</div>
            </div>

            <div className="text-xs whitespace-pre-wrap text-justify">
              {edu.description}
            </div>
            {edu.link && (
              <Link href={edu.link} className="text-xs link">
                {edu.link}
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
