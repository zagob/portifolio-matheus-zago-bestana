import styles from "./styles.module.css";

import { FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiPrisma,
  SiStyledcomponents,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";

interface AnimationScrollProps {
  repeatItens?: number;
}

export function AnimationScroll({ repeatItens = 3 }: AnimationScrollProps) {
  return (
    <div style={{ marginTop: 80 }} className={styles["home-hero-logos"]}>
      <div className="text-lg font-medium mr-10">Skills</div>
      <div className={styles["home-hero-carousel-wrap"]}>
        {Array.from({ length: repeatItens }).map(() => (
          <div
            style={{ marginRight: 18 }}
            className={styles["home-hero-carousel-row"]}
          >
            <div className={styles["home-hero-logo w-embed"]}>
              <div className="flex items-center gap-2 text-sm">
                <FaReact size={32} />
                <span>React</span>
              </div>
            </div>
            <div className={styles["home-hero-logo w-embed"]}>
              <div className="flex items-center gap-2 text-sm">
                <DiNodejs size={32} />
              </div>
            </div>
            <div className={styles["home-hero-logo w-embed"]}>
              <div className="flex items-center gap-2 text-sm">
                <SiJavascript size={32} />
                <span>javascript</span>
              </div>
            </div>
            <div className={styles["home-hero-logo w-embed"]}>
              <div className="flex items-center gap-2 text-sm">
                <SiTypescript size={32} />
                <span>typescript</span>
              </div>
            </div>
            <div className={styles["home-hero-logo w-embed"]}>
              <div className="flex items-center gap-2 text-sm">
                <FaReact size={32} />
                <span>React Native</span>
              </div>
            </div>
            <div className={styles["home-hero-logo w-embed"]}>
              <div className="flex items-center gap-2 text-sm">
                <SiHtml5 size={32} />
                <span>Hypertext Markup Language</span>
              </div>
            </div>
            <div className={styles["home-hero-logo w-embed"]}>
              <div className="flex items-center gap-2 text-sm">
                <SiCss3 size={32} />
                <span>Cascading Style Sheets</span>
              </div>
            </div>
            <div className={styles["home-hero-logo w-embed"]}>
              <div className="flex items-center gap-2 text-sm">
                <SiPostgresql size={32} />
                <span>postgres</span>
              </div>
            </div>
            <div className={styles["home-hero-logo w-embed"]}>
              <div className="flex items-center gap-2 text-sm">
                <SiPrisma size={32} />
                <span>prisma</span>
              </div>
            </div>
            <div className={styles["home-hero-logo w-embed"]}>
              <div className="flex items-center gap-2 text-sm">
                <SiTailwindcss size={32} />
                <span>tailwindcss</span>
              </div>
            </div>
            <div className={styles["home-hero-logo w-embed"]}>
              <div className="flex items-center gap-2 text-sm">
                <SiStyledcomponents size={32} />
                <span>styled components</span>
              </div>
            </div>
          </div>
        ))}
        <div className={styles["home-hero-logos-overlay"]}></div>
      </div>
    </div>
  );
}
