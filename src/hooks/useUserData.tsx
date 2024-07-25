type NextPublicEnvVars = {
  [key: string]: string | undefined;
};

function filterEnv(startsWith: string) {
  return Object.keys(process.env)
    .filter((key) => key.startsWith(startsWith))
    .reduce<NextPublicEnvVars>((obj, key) => {
      obj[key] = process.env[key];
      return obj;
    }, {});
}

function safeGetEnv(key: string) {
  return process.env[key] || key;
}

function getLanguageConfig() {
  const env = filterEnv("NEXT_PUBLIC_LANG_");
  const _langCodesWithDuplicates = Object.keys(env).map(
    (key) => key.split("_")[3]
  );
  const langCodes = [...new Set(_langCodesWithDuplicates)];

  const language = langCodes
    .map((code) => {
      const lang = {
        code,
        name: safeGetEnv(`NEXT_PUBLIC_LANG_${code}_NAME`),
        desc: safeGetEnv(`NEXT_PUBLIC_LANG_${code}_DESC`),
        order: parseInt(safeGetEnv(`NEXT_PUBLIC_LANG_${code}`) || "0"),
      };
      return lang;
    })
    .sort((a, b) => a.order - b.order);
  return language;
}

function getWorkConfig() {
  const env = filterEnv("NEXT_PUBLIC_WORK_");
  const _idsWithDup = Object.keys(env).map((key) => key.split("_")[3]);
  const ids = [...new Set(_idsWithDup)];

  return ids
    .map((i) => ({
      id: parseInt(i),
      title: safeGetEnv(`NEXT_PUBLIC_WORK_${i}_TITLE`),
      company: safeGetEnv(`NEXT_PUBLIC_WORK_${i}_COMPANY`),
      date: safeGetEnv(`NEXT_PUBLIC_WORK_${i}_DATE`),
      description: safeGetEnv(`NEXT_PUBLIC_WORK_${i}_DESCRIPTION`),
    }))
    .sort((a, b) => a.id - b.id);
}

function getProjects() {
  const env = filterEnv("NEXT_PUBLIC_PROJECT_");
  const _idsWithDup = Object.keys(env).map((key) => key.split("_")[3]);
  const ids = [...new Set(_idsWithDup)];

  return ids
    .map((i) => ({
      id: parseInt(i),
      title: safeGetEnv(`NEXT_PUBLIC_PROJECT_${i}_TITLE`),
      date: safeGetEnv(`NEXT_PUBLIC_PROJECT_${i}_DATE`),
      description: safeGetEnv(`NEXT_PUBLIC_PROJECT_${i}_DESCRIPTION`),
      links: safeGetEnv(`NEXT_PUBLIC_PROJECT_${i}_LINKS`)
        .split(",")
        .map((s) => s.trim()),
      techList: (process.env[`NEXT_PUBLIC_PROJECT_${i}_TECH_LIST`] || "")
        .split(",")
        .map((s) => s.trim())
        .filter((a) => a.length > 0),
    }))
    .sort((a, b) => a.id - b.id);
}

function getEducation() {
  const env = filterEnv("NEXT_PUBLIC_EDUCATION_");
  const _idsWithDup = Object.keys(env).map((key) => key.split("_")[3]);
  const ids = [...new Set(_idsWithDup)];

  return ids
    .map((i) => ({
      id: parseInt(i),
      title: safeGetEnv(`NEXT_PUBLIC_EDUCATION_${i}_TITLE`),
      date: safeGetEnv(`NEXT_PUBLIC_EDUCATION_${i}_DATE`),
      description: safeGetEnv(`NEXT_PUBLIC_EDUCATION_${i}_DESCRIPTION`),
      link: process.env[`NEXT_PUBLIC_EDUCATION_${i}_LINK`],
    }))
    .sort((a, b) => a.id - b.id);
}

const config = {
  firstName: safeGetEnv("NEXT_PUBLIC_FIRST_NAME"),
  lastName: safeGetEnv("NEXT_PUBLIC_LAST_NAME"),
  avatarUrl: process.env.NEXT_PUBLIC_AVATAR_URL ?? "/avatar.png",
  aboutMe: safeGetEnv("NEXT_PUBLIC_ABOUT_ME").trim(),

  links: {
    website: safeGetEnv("NEXT_PUBLIC_WEBSITE_URL"),
    github: safeGetEnv("NEXT_PUBLIC_GITHUB_URL"),
    linkedin: safeGetEnv("NEXT_PUBLIC_LINKEDIN_URL"),
  },

  contact: {
    email: safeGetEnv("NEXT_PUBLIC_EMAIL"),
    phone: safeGetEnv("NEXT_PUBLIC_PHONE"),
  },

  workExperience: getWorkConfig(),

  projects: getProjects(),

  education: getEducation(),

  technologies: safeGetEnv("NEXT_PUBLIC_TECHNOLOGIES")
    .split("\n")
    .map(
      (row) =>
        row
          .split(",")
          .map((s) => s.trim()) // remove whitespace
          .filter((a) => a.length > 0) // remove empty strings
    ),
  language: getLanguageConfig(),
};

export function useUserData() {
  return config;
}
