import { Navigation } from "../Navigation/Navigation";

import styles from "./styles.module.css"

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/glasses", label: "обработка стекла" },
  { href: "/doors", label: "межкомнатные двери" },
  { href: "/constructions", label: "строительство" },
  { href: "/additional-services", label: "другие услуги" },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation navLinks={navLinks} />
    </header>
  );
};

export { Header };