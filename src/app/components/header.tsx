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
      <img src={avatarUrl} alt="Avatar" className="w-32 h-32 rounded-full" />
      <div className="w-full">
        <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
          {firstName} {lastName}
        </span>
        <h2 className="text-xl font-semibold dark:text-neutral-300 text-neutral-700 mb-2">
          Software Developer
        </h2>

        <div className="flex flex-row justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <FaEnvelope className="h-4 w-4" />
              <span className="link">{contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="h-4 w-4" />
              <span className="link">{contact.phone}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaGlobe className="h-4 w-4" />
              <Link href={links.website} className="link">
                {links.website}
              </Link>
            </div>
          </div>
          <div className="space-y-1">
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
        </div>
      </div>
    </section>
  );
}
