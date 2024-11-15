"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import styles from "../styles/Hero.module.scss";
import Link from "next/link";

const Hero = () => {
    return (
        <section
            id="#"
            className="flex flex-col items-start self-center justify-center h-full min-h-screen p-0 px-6 mx-auto 2xl:max-w-7xl md:px-10"
        >
            <div className="flex flex-col w-full lg:flex-row ">
                <div className="z-10 flex flex-col gap-6 md:w-4/6 flex-nowrap ">
                    <h1 className="alm-h1 md:w-11/12">
                        Let&apos;s turn{" "}
                        <span className="text-brand">Brilliant Ideas</span> to{" "}
                        <span className="text-brand">
                            Income Generating Solutions
                        </span>
                    </h1>
                    <p
                        className={[
                            "md:w-4/5",
                            styles["alm-sub-headline"],
                        ].join(" ")}
                    >
                        Hi! I am{" "}
                        <span className="text-brand-alt">Alain Moratalla</span>,
                        a full stack web developer and an engineer from the
                        Philippines. I love building products that are purpose
                        driven using web dashboards, reporting and tools to
                        provide values for client&apos;s needs.
                    </p>
                    <div
                        className={[
                            "flex flex-row flex-nowrap mt-4 items-center gap-4",
                            styles["alm-cta-container"],
                        ].join(" ")}
                    >
                        <Link
                            className={styles["alm-main-cta"]}
                            href="/#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                const section =
                                    document.getElementById("projects");
                                if (section) {
                                    section.scrollIntoView();
                                }
                                // section && section.scrollIntoView();
                            }}
                        >
                            Explore My Projects
                        </Link>
                        <span className="text-sm md:text-2xl">or</span>
                        <Link
                            className={styles["alm-sub-cta"]}
                            href="/#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                const section =
                                    document.getElementById("contact");
                                if (section) {
                                    section.scrollIntoView();
                                }
                                // section && section.scrollIntoView();
                            }}
                        >
                            Hire Me!
                        </Link>
                    </div>
                </div>
                <div className="flex-1 hidden md:block">
                    <Spline
                        className="spline relative flex-1 hidden md:block"
                        scene="https://prod.spline.design/Bpv2EGotp1juzHEi/scene.splinecode"
                    />
                </div>
            </div>
            <a
                href="#projects"
                className={[
                    "md:self-center self-center",
                    styles["alm-cta-scroll"],
                ].join(" ")}
            >
                View more..
            </a>
        </section>
    );
};

export default Hero;
