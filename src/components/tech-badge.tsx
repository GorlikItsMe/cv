import { Badge } from "@/components/ui/badge";
import React from "react";
import Image from "next/image";
import { useUserData } from "@/hooks/useUserData";

/**
 * What technology have what color
 */
const TECHNOLOGY_COLORS = {
  React: "#61DAFB",
  "Next.js": "#000000",
  TypeScript: "#007ACC",
  JavaScript: "#b7a61a",
  "Node.js": "#68A063",
  Python: "#3776AB",
  Django: "#092E20",
  "Django REST framework": "#092E20",
  Docker: "#2496ED",
  Html: "#E34F26",
  CSS: "#1572B6",
  Sass: "#CC6699",
  TailwindCSS: "#38bdf8",
  "Material-UI": "#0081CB",
  MySQL: "#4479A1",
  PostgreSQL: "#336791",
  MongoDB: "#47A248",
  GraphQL: "#E10098",
  Apollo: "#311C87",
  "Microsoft SQL Server": "#CC2927",
  "SQL Server": "#CC2927",
  Firebase: "#FFCA28",
  Redis: "#DC382D",
  Git: "#F05032",
  GitHub: "#181717",
  Bootstrap: "#7952B3",
  Nginx: "#269539",
  PyTest: "#0A9EDC",
  Jest: "#C21325",
  "CI/CD": "#000000",
  "php": "#777BB4",
  "Laravel": "#FF2D20",
  "Vue.js": "#4FC08D",
  "Vuex": "#3A0D7B",
  "Nuxt.js": "#00C58E",
  "Vuetify": "#1867C0",
};

/**
 * You can override the icon for some technologies
 * for example if you want have badge with CI/CD github actions icon will be used
 */
const ICON_OVERRIDE = {
  "CI/CD": "githubactions",
  "SQL Server": "microsoftsqlserver",
};

function getTechBaseColor(tech: string) {
  const techColor = Object.keys(TECHNOLOGY_COLORS).find(
    (key) => key.toLowerCase() === tech.toLowerCase()
  ) as keyof typeof TECHNOLOGY_COLORS;
  return techColor ? TECHNOLOGY_COLORS[techColor] : undefined;
}

interface DeviconRow {
  name: string;
  altnames: string[];
  tags: string[];
  versions: {
    svg: string[];
    font: string[];
  };
  aliases: { base: string; alias: string }[];
}
function techIcons(): Promise<DeviconRow[]> {
  return fetch(
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.json"
  ).then((res) => res.json());
}

let cachedTechIcons: DeviconRow[] | null = null;
async function getIconsConfig(tech: string) {
  if (!cachedTechIcons) {
    cachedTechIcons = await techIcons();
  }
  const a = cachedTechIcons.find(
    (row) => row.name.toLowerCase() === tech.toLowerCase()
  );
  if (a) return a;

  const b = cachedTechIcons.find((row) =>
    row.name.toLowerCase().includes(tech.toLowerCase())
  );
  if (b) return b;

  const c = cachedTechIcons.find(
    (row) =>
      row.name.toLowerCase() ===
      tech.toLowerCase().replaceAll(".", "").replaceAll(" ", "")
  );
  if (c) return c;

  return null;
}

async function getTechIconUrl(techName: string) {
  if (ICON_OVERRIDE[techName as keyof typeof ICON_OVERRIDE]) {
    return getTechIconUrl(ICON_OVERRIDE[techName as keyof typeof ICON_OVERRIDE]);
  }

  const conf = await getIconsConfig(techName);
  if (!conf) {
    console.warn(`No icon found for tech: ${techName} (used Devicon.dev)`);
    return undefined;
  }

  /**
   * Sort svg variants in the order
   * All not matched variants will be sorted by their index in the array at the end
   */
  const forceOrder = ["original", "plain", "original-wordmark"];
  conf.versions.svg.sort((a, b) => {
    const aIndex = forceOrder.indexOf(a);
    const bIndex = forceOrder.indexOf(b);
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }
    return aIndex === -1 ? 1 : bIndex === -1 ? -1 : aIndex - bIndex;
  });
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${conf.name.toLowerCase()}/${conf.name.toLowerCase()}-${conf.versions.svg[0].toLowerCase()}.svg`;
}

export async function TechBadge({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { technologiesShowIcons } = useUserData();
  if (typeof children !== "string") {
    return <Badge className={className}>{children}</Badge>;
  }

  const techName = children as string;
  const techBaseColor = getTechBaseColor(techName);
  if (!techBaseColor) {
    console.warn(`No color found for tech: ${techName}`);
  }
  const techIconUrl = await getTechIconUrl(techName);
  if (!techIconUrl) {
    console.warn(`No icon found for tech: ${techName}`);
  }

  return (
    <Badge
      style={{
        color: techBaseColor,
      }}
      className={`${className} bg-white dark:bg-slate-200 text-black`}
    >
      {technologiesShowIcons && techIconUrl && (
        <Image
          src={techIconUrl}
          alt={techName}
          height={16}
          width={16}
          className="w-4 h-4 mr-1"
        />
      )}
      {children}
    </Badge>
  );
}
