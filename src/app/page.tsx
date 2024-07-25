import { Book, Page } from "@/components/book";
import { useUserData } from "@/hooks/useUserData";
import { Header } from "./components/header";
import { Language } from "./components/language";
import { Rodo } from "./components/rodo";
import { WorkExperience } from "./components/work-experience";
import { Projects } from "./components/projects";
import { Education } from "./components/education";
import { Technologies } from "./components/technologies";

export default function HomePage() {
  const data = useUserData();
  return (
    <Book>
      <Page>
        <Header className="mb-4" />
        <section className="mb-4">
          <h2 className="tg-h2">About Me</h2>
          <div className="text-xs ps-2 text-justify">{data.aboutMe}</div>
        </section>
        <WorkExperience className="mb-4" />
        <Projects className="mb-4" />
        <section className="grid grid-cols-2 gap-2 mb-4">
          <Education />
          <Language />
        </section>
        <div className="flex-grow" /> {/* Spacer */}
        <Rodo className="text-xs" />
      </Page>
    </Book>
  );
}
