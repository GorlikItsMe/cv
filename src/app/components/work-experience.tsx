import { useUserData } from "@/hooks/useUserData";
import { cn } from "@/lib/utils";

export interface WorkExperienceProps {
  className?: string;
}

export function WorkExperience({ className }: WorkExperienceProps) {
  const { workExperience } = useUserData();

  return (
    <section className={cn("text-sm", className)}>
      <h2 className="tg-h2">Work Experience</h2>

      <div className="flex flex-col gap-2">
        {workExperience.map((exp) => (
          <div key={exp.id} className="flex flex-col ps-2">
            <div className="flex flex-row justify-between mb-1">
              <div>
                <h3 className="text-base font-semibold inline-block">
                  {exp.title}
                </h3>
                <span className="text-base mx-2">/</span>
                <span className="text-base">{exp.company}</span>
              </div>
              <span className="text-sm">{exp.date}</span>
            </div>
            <div className="text-xs text-justify">{exp.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
