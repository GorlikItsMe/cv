/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  FaGlobe,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { useUserData } from "@/hooks/useUserData";
import { cn } from "@/lib/utils";

export function Header({ className }: { className?: string }) {
  const { firstName, lastName, avatarUrl, links, contact } = useUserData();

  return (
    <section
      className={cn("flex flex-row gap-4 items-center text-sm", className)}
    >
      <img src={avatarUrl} alt="Avatar" className="w-20 h-20 rounded-full" />
      <div className="flex-grow">
        <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-[#00000001]">
          {firstName} {lastName}
        </span>
        <h2 className="text-xl font-semibold dark:text-neutral-300 text-neutral-700 mb-1">
          Software Developer
        </h2>
      </div>
      <div className="space-y-1 text-xs">
        <div className="flex items-center gap-2">
          <FaEnvelope className="h-4 w-4" />
          <Link href={`mailto:${contact.email}`} className="link">
            {contact.email}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone className="h-4 w-4" />
          <Link
            href={`tel:${contact.phone
              .replaceAll(" ", "")
              .replaceAll("(", "")
              .replaceAll(")", "")}`}
            className="link"
          >
            {contact.phone}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <FaGlobe className="h-4 w-4" />
          <Link href={links.website} className="link">
            {links.website}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <FaGithub className="h-4 w-4" />
          <Link href={links.github} className="link">
            {links.github}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <FaLinkedin className="h-4 w-4" />
          <Link href={links.linkedin} className="link">
            @{links.linkedin.split("/").pop()}
          </Link>
        </div>
      </div>
    </section>
  );
}
