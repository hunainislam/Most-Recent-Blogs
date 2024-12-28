import { Github, Linkedin } from "@/components/icons";
import Link from "next/link";

export default function SocialMedia() {
  return (
    // Social Icons
    <nav className="flex gap-2">
      <Link
        href={"https://www.linkedin.com/in/hunain-islam-2057832b7/"}
        target="_blank"
      >
        <Linkedin className={`w-6 h-6`} />
      </Link>
      <Link
        href={"https://github.com/hunainislam?tab=repositories"}
        target="_blank"
      >
        <Github className={`w-6 h-6 fill-dark dark:fill-light`} />
      </Link>
    </nav>
  );
}
