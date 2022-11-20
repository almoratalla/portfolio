import Link from "next/link";
import React from "react";
import styles from "../styles/Projects.module.css";
import { featuredProjects } from "../utils/config";

const Projects = () => {
    return (
        <section
            id="projects"
            className={["bg-off my-24 md:my-0 py-16 md:py-16"].join(" ")}
        >
            <div className="px-6 mx-auto md:px-10 2xl:max-w-7xl">
                <div className="py-16">
                    <div className="flex flex-col flex-nowrap">
                        <h3 className="alm-h3--projects">Projects</h3>
                        <div className="flex flex-row justify-between w-full nowrap">
                            <h2 className="alm-h2--projects">
                                Some of the Concepts I've Brought to Life
                            </h2>
                            <button
                                className="hidden px-4 bg-transparent rounded-lg border-10 md:hidden"
                                style={{
                                    border: "10px solid #111721",
                                    opacity: "0.9",
                                    height: "50px",
                                }}
                            >
                                <Link
                                    href="/projects"
                                    className="font-medium font-poppins text-black-var"
                                >
                                    Browse all projects
                                </Link>
                            </button>
                        </div>

                        <p
                            className="text-base font-medium font-poppins md:w-3/5"
                            style={{
                                color: "rgba(17,23,33,0.7)",
                                lineHeight: "1.575rem",
                            }}
                        >
                            These are side projects I am currently working on my
                            free time. I love building things that pique my
                            interests and give me opportunity to test my current
                            skillset.
                        </p>
                    </div>
                </div>
                <div className="py-16">
                    <ul>
                        {featuredProjects &&
                            featuredProjects.map((fp, fpi) => (
                                <li
                                    key={`${fpi}-${fp.name}`}
                                    className={[
                                        "relative grid gap-2.5 mb-8 visible opacity-100",
                                        styles[
                                            "alm-featured-project-list-item"
                                        ],
                                    ].join(" ")}
                                >
                                    <div className={styles["project-content"]}>
                                        <div>
                                            <span
                                                className={[
                                                    "font-poppins",
                                                    styles["project-overline"],
                                                ].join(" ")}
                                            >
                                                Featured Project
                                            </span>
                                            <h4
                                                className={[
                                                    "text-brand",
                                                    styles["project-title"],
                                                ].join(" ")}
                                            >
                                                <a href="">{fp.name}</a>
                                            </h4>
                                            <div
                                                className={[
                                                    "md:my-6 md:p-6 md:alm-bg-secondary",
                                                    styles[
                                                        "alm-project-desc-container"
                                                    ],
                                                ].join(" ")}
                                            >
                                                <div
                                                    className={[
                                                        "py-5",
                                                        styles[
                                                            "project-description"
                                                        ],
                                                    ].join(" ")}
                                                >
                                                    <p>{fp.description}</p>
                                                </div>
                                                <ul
                                                    className={[
                                                        styles[
                                                            "project-tech-list"
                                                        ],
                                                    ].join(" ")}
                                                >
                                                    {fp.techStack.map(
                                                        (tS, tSi) => (
                                                            <li
                                                                key={`${tS}-${tSi}`}
                                                                className={[
                                                                    styles[
                                                                        "project-tech-list-item"
                                                                    ],
                                                                ].join(" ")}
                                                            >
                                                                {tS}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles["project-image"]}>
                                        <a href="https://foryoutube.herokuapp.com/">
                                            <div
                                                className={
                                                    styles[
                                                        "project-image-wrapper"
                                                    ]
                                                }
                                            >
                                                <div
                                                    style={{
                                                        maxWidth: "700px",
                                                        display: "block",
                                                    }}
                                                >
                                                    <img
                                                        alt=""
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        src="data:image/svg+xml;charset=utf-8,%3Csvg height='467' width='700' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                        style={{
                                                            maxWidth: "100%",
                                                            display: "block",
                                                            position: "static",
                                                        }}
                                                    />
                                                </div>
                                                <picture>
                                                    <source />
                                                    <img
                                                        src={fp.demo.src}
                                                        width="700"
                                                        height="438"
                                                        alt=""
                                                        style={{
                                                            objectFit: "cover",
                                                            opacity: "1",
                                                        }}
                                                        className={
                                                            styles[
                                                                "picture-img"
                                                            ]
                                                        }
                                                    />
                                                </picture>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>

                <div className={styles["alm-projects-section"]}></div>
            </div>
        </section>
    );
};

export default Projects;
