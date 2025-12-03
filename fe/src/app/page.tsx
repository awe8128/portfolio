"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";

import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Flip);

export default function HomePage() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useGSAP(
    () => {
      ScrollTrigger.normalizeScroll(true);

      smootherRef.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
        smoothTouch: 0.1,
      });

      return () => {
        smootherRef.current?.kill();
        smootherRef.current = null;
        ScrollTrigger.normalizeScroll(false);
      };
    },
    { scope: wrapperRef }
  );

  const handleNavClick = (target: string) => {
    if (!smootherRef.current) return;
    smootherRef.current.scrollTo(target, true, "top top");
  };

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content">
        <div id="top" />
        <Navbar onNavClick={handleNavClick} />

        <main className={styles.main}>
          <section className={styles.section}>
            <div className={styles.hero}>
              <div>
                Me{" "}
                <span className={styles.build} data-text="build">
                  <span className={styles.buildInner}>build</span>
                </span>
              </div>
              <p>the parts users can&apos;t see</p>
              <p>but always feel.</p>
            </div>
            <div className={styles.description}>
              <p>
                Hi, I’m OIDOV ANKHBAYAR. Born raised in Mongolia, Ulaanbaatar
              </p>
              <p> Dream Driven Full Stack Developer Based in Japan.</p>
            </div>
          </section>

          <section id="about" className={styles.section}>
            <h2>About me</h2>
            <div className={styles.about}>
              <div className={styles.wrapper}>
                <div className={styles.item}></div>
                <div className={styles.item}>
                  <p>Hello</p>
                </div>
                <div className={styles.item}>
                  <Image
                    className={styles.img}
                    src="/alex.jpg"
                    width={300}
                    height={500}
                    alt="Picture of the author"
                  />
                </div>
                <div className={styles.item}>
                  <p className={styles.name}>I’m OIDOV ANKHBAYAR</p>
                  <p>
                    Web Developer Engineer Graduated Chiba University Born
                    raised in Mongolia, Ulaanbaatar
                  </p>
                </div>
                <div className={styles.item}></div>
              </div>
            </div>
          </section>

          <section id="works" className={styles.section}>
            <h2>Works</h2>
            <p>Show your projects here…</p>
          </section>

          <section id="skills" className={styles.section}>
            <h2>Skills</h2>
            <p>List your skills & tech stack…</p>
          </section>

          <section id="contact" className={styles.section}>
            <h2>Contact</h2>
            <p>Contact info or form…</p>
          </section>
        </main>
      </div>
    </div>
  );
}
