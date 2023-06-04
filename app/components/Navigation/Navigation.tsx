"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./styles.module.css"

type navLink = {
  href: string;
  label: string;
};

type Props = {
  navLinks: navLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathName = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathName === link.href ? `${styles.active}` : ""
        return (
          <Link
            key={link.label}
            href={link.href}
            className={`${styles.link} ${isActive}`}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};

export { Navigation };
