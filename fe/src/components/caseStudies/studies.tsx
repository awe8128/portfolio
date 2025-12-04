"use client";

import Image from "next/image";
import styles from "./studies.module.css";
import { CaseItem } from "@/consts/work";

function renderContent(item: CaseItem) {
  if (item.type === "image" && item.image) {
    return (
      <>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className={styles.image}
        />
        <div className={styles.cardContent}>
          <div className={styles.overview}>
            <div className={styles.cardMeta}>
              {item.meta.map((i) => (
                <div key={i}>{i}</div>
              ))}
            </div>

            <div className={styles.cardLabel}>
              {item.title} {item.subtitle && <span>{item.subtitle}</span>}
            </div>
          </div>
          <div className={styles.detail}>
            <p>{item.what}</p>
            <p>{item.role}</p>
            <p>{item.goal}</p>
            <p>{item.achivement}</p>
            <p>{item.description}</p>
          </div>
        </div>
      </>
    );
  }

  return null;
}
type CasesSectionProps = {
  cases: CaseItem[];
  type: string;
};
export default function CasesSection({ cases, type }: CasesSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Cases</h2>
        <button className={styles.linkBtn}>{type}</button>
      </div>

      <div className={styles.grid}>
        {cases.map((item) => (
          <article
            key={item.id}
            className={[
              styles.card,
              item.variant === "wide" && styles.cardWide,
              item.variant === "normal" && styles.cardNormal,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className={styles.cardInner}>{renderContent(item)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
