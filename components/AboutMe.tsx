import React from "react";
import ALMImage from "../public/assets/imgs/ALMImage.png";
import styles from "../styles/AboutMe.module.css";

const AboutMe = () => {
    return (
        <section
            id="about"
            className="flex flex-col items-start justify-center p-0 md:py-16"
        >
            <div className="px-6 mx-auto my-8 md:px-10 2xl:max-w-7xl">
                <div className="py-16">
                    <div className="flex flex-col flex-nowrap">
                        <h3 className="alm-h3--projects">About Me</h3>
                        <div className="flex flex-row justify-between w-full nowrap">
                            <h2 className="alm-h2--projects">
                                Let me tell you my story
                            </h2>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col items-center py-16 md:items-start md:flex-row flex-nowrap"
                    style={{ color: "#3E4C63" }}
                >
                    <div className="">
                        <p className="mb-4">
                            Hello! I am{" "}
                            <span className="text-brand-alt">
                                Alain Moratalla
                            </span>{" "}
                            and I love solving challenges. My interest in
                            developing web solutions began from a business
                            requirement;{" "}
                            <span className="text-brand-alt">
                                a need to provide a visual interface from data
                                on automation processes for a client.{" "}
                            </span>{" "}
                            This spearheaded our team to provide a service to
                            develop a portal to display dashboards which later
                            upgraded to multiple functionalities such as running
                            scripts on the backend and providing APIs for our
                            clients.
                        </p>
                        <p className="mb-4">
                            These services would then grow as one of our core
                            products that would generate income and provide cost
                            savings for our account. My main goal in developing
                            these products is to{" "}
                            <span className="text-brand-alt">
                                deliver solutions to my clients and to pursue my
                                interest in building apps.
                            </span>
                        </p>
                        <p className="mb-4">
                            As my passion on developing for the web grows, my
                            hunger to also provide for other people grow. The
                            more opportunities to develop and help provide value
                            for people, the more I will improve my skills and
                            learn from experience.
                        </p>
                        <p className="mb-4">
                            If you like to know more about me, feel free to
                            contact me or check out links below to connect.
                            Let's talk about your brilliant ideas!
                        </p>
                    </div>

                    <div
                        className={[
                            "md:mx-8 my-8 md:my-0",
                            styles["alm-aboutme-pic"],
                        ].join(" ")}
                    >
                        <div
                            className={[
                                "",
                                styles["alm-aboutme-pic-wrapper"],
                            ].join(" ")}
                        >
                            <div
                                className={[
                                    "",
                                    styles["alm-aboutme-img-wrapper"],
                                ].join(" ")}
                            >
                                <div
                                    style={{
                                        maxWidth: "500px",
                                        display: "block",
                                        borderRadius: "50%",
                                    }}
                                >
                                    <img
                                        alt=""
                                        role="presentation"
                                        aria-hidden="true"
                                        src="data:image/svg+xml;charset=utf-8,%3Csvg height='500' width='500' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                        style={{
                                            maxWidth: "100%",
                                            display: "block",
                                            position: "static",
                                        }}
                                    />
                                </div>
                                <picture>
                                    <img
                                        width="500"
                                        height="500"
                                        data-main-image=""
                                        sizes="(min-width: 500px) 500px, 100vw"
                                        decoding="async"
                                        src={ALMImage.src}
                                        alt="Headshot"
                                        style={{
                                            objectFit: "cover",
                                            opacity: "1",
                                        }}
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
