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
import CasesSection from "@/components/caseStudies/studies";
import { WorkCases } from "@/consts/work";
import { PersonalCases } from "@/consts/personal";
import Parallel from "@/components/parallelText/parallel";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Flip);

export default function HomePage() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const smootherRef = useRef<ScrollSmoother | null>(null);

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const logoTimelineRef = useRef<gsap.core.Timeline | null>(null);
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

  useGSAP(
    () => {
      if (!aboutRef.current) return;

      const ctx = gsap.context(() => {
        const logos = gsap.utils.toArray<HTMLElement>(`.${styles.logo}`);
        // Start hidden, below and small
        gsap.set(logos, {
          y: 150,
          opacity: 0,
          scale: 0.6,
        });

        // Timeline that plays on hover and reverses on scroll back
        const tl = gsap.timeline({ paused: true });

        tl.to(logos, {
          y: (i) => {
            const baseY = -450; // main height where the "row" sits
            const offset = 60; // how far up/down from that row
            return i % 2 === 0 ? baseY - offset : baseY + offset;
          },
          opacity: 1,
          scale: 1.6,
          duration: 1.5,
          rotate: (i) => (i % 2 === 0 ? -6 : 6),
          ease: "power3.out",
          stagger: {
            each: 0.08,
            from: "edges",
          },
          // small spread on X
          x: (i) => (i - (logos.length - 1) / 2) * 80,
        });

        logoTimelineRef.current = tl;

        // ScrollTrigger: when user scrolls back above "about", hide logos again
        ScrollTrigger.create({
          trigger: aboutRef.current,
          start: "top bottom", // when section enters from bottom
          end: "top center", // while it's in view
        });
      }, aboutRef);
    },
    { scope: aboutRef }
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
            <div className={styles.hoverMe}>
              <p className={styles.hoverP}>Hi, wanna see magic ? Hover me</p>
              <Image
                className={styles.hoverImg}
                src="/thought.jpeg"
                width={450}
                height={150}
                alt="Picture of think bubble"
              />
            </div>

            <div className={styles.about} ref={aboutRef}>
              <div className={styles.logoCloud}>
                <span className={styles.logo}>
                  <Image
                    src="/go.svg"
                    width={450}
                    height={150}
                    alt="Picture of golang programming language"
                  />
                </span>
                <span className={styles.logo}>
                  <Image
                    src="/docker.svg"
                    width={400}
                    height={100}
                    alt="Picture of golang programming language"
                  />
                </span>
                <span className={styles.logo}>
                  <Image
                    src="/aws.svg"
                    width={400}
                    height={100}
                    alt="Picture of golang programming language"
                  />
                </span>
                <span className={styles.logo}>
                  <Image
                    src="/nextjs.svg"
                    width={400}
                    height={100}
                    alt="Picture of golang programming language"
                  />
                </span>
                <span className={styles.logo}>
                  <Image
                    src="/mysql.svg"
                    width={400}
                    height={100}
                    alt="Picture of golang programming language"
                  />
                </span>
                <span className={styles.logo}>
                  <Image
                    src="/python.svg"
                    width={400}
                    height={100}
                    alt="Picture of golang programming language"
                  />
                </span>
                <span className={styles.logo}>
                  <Image
                    src="/github.svg"
                    width={400}
                    height={100}
                    alt="Picture of golang programming language"
                  />
                </span>
                <span className={styles.logo}>
                  <Image
                    src="/js.svg"
                    width={400}
                    height={100}
                    alt="Picture of golang programming language"
                  />
                </span>
                <span className={styles.logo}>
                  <Image
                    src="/react.svg"
                    width={400}
                    height={100}
                    alt="Picture of golang programming language"
                  />
                </span>
                <span className={styles.logo}>
                  <Image
                    src="/redis.svg"
                    width={400}
                    height={100}
                    alt="Picture of golang programming language"
                  />
                </span>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.item}></div>
                <div className={styles.item}>
                  <p className={styles.hello}>Hello</p>
                  <br></br>

                  <p>
                    You can call Alex <br></br>
                    <br></br>I am proactive person who loves challenges and gym
                    also good book.
                  </p>
                  <p></p>
                </div>

                <div className={styles.item}>
                  <Image
                    className={styles.img}
                    src="/alex.jpg"
                    width={220}
                    height={400}
                    alt="Picture of the author"
                    onMouseEnter={() => logoTimelineRef.current?.play()}
                  />
                </div>
                <div className={styles.item}>
                  <p className={styles.name}>I’m OIDOV ANKHBAYAR</p>
                  <p>
                    I came to Japan in 2017. <br></br>I studied Mechanical
                    Engineering for 5 years. <br />I graduated Chiba University
                    in 2024. Started my career as software engineering at Tokyo.
                  </p>
                  <p className={styles.more}>More about my recent works</p>
                </div>
                <div className={styles.item}></div>
              </div>
            </div>
          </section>

          <section id="works" className={styles.section}>
            <CasesSection cases={WorkCases} type="work" />
          </section>

          <Parallel />

          <section id="personal" className={styles.section}>
            <CasesSection cases={PersonalCases} type="personal" />
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
