import { useUserData } from "@/hooks/useUserData";
import { Flag } from "@/components/flag";

export interface LanguageProps {
  className?: string;
}

export function Language({ className }: LanguageProps) {
  const { language } = useUserData();
  return (
    <div className={className}>
      <h2 className="tg-h2">Languages</h2>
      <div className="flex flex-col gap-1 ps-2">
        {language.map((lang) => (
          <div key={lang.code} className="grid grid-cols-2 items-center gap-2 text-sm">
            <div className="flex items-center">
              <Flag countryCode={lang.code} className="me-1" />
              <span className="font-bold">{lang.name}</span>:
            </div>
            <div>{lang.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
