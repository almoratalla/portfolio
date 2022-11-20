import Link from "next/link";
import React from "react";

const Experiences = () => {
    return (
        <section
            id="experiences"
            className="flex flex-col items-start justify-center p-0 md:py-16"
        >
            <div className="px-6 mx-auto my-8 md:px-10 2xl:max-w-7xl">
                <div className="py-16">
                    <div className="flex flex-col flex-nowrap">
                        <h3 className="alm-h3--projects">Experiences</h3>
                        <div className="flex flex-row justify-between w-full nowrap">
                            <h2 className="alm-h2--projects">
                                My overall work experience
                            </h2>
                        </div>

                        <p
                            className="text-base font-medium font-poppins md:w-3/5"
                            style={{
                                color: "rgba(17,23,33,0.7)",
                                lineHeight: "1.575rem",
                            }}
                        >
                            I've had the honor to provide services for clients
                            through the following opportunities.
                        </p>
                    </div>
                </div>
                <div className="py-16">
                    <h4 className="alm-h4">
                        Full Stack Developer | Automation
                    </h4>
                    <div className="flex flex-col justify-between md:flex-row flex-nowrap">
                        <span className="font-semibold">DXC Technology</span>
                        <span
                            className="text-sm font-semibold"
                            style={{ color: "#3E4C63" }}
                        >
                            Feb 2019 - Present
                        </span>
                    </div>
                    <ul className="my-8" style={{ color: "#3E4C63" }}>
                        <li>
                            ▹Full stack developer for automation services
                            working on projects that bring income generating
                            solutions and cost savings using web dashboards,
                            reporting and tooling to provide client's business
                            needs.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
