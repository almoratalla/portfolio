"use client";

import React, { FormEvent, useState } from "react";
import GitHubSVG from "../../../public/assets/svg/github.svg";
import LinkedInSVG from "../../../public/assets/svg/linkedin.svg";
import FrontEndMentorSVG from "../../../public/assets/svg/fem.svg";
import CodewarsSVG from "../../../public/assets/svg/codewars.svg";
import { contactLinks } from "../utils/config";
// import Image from "next/image";

const Contact = () => {
    const [formInputs, setFormInputs] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const submitFormHandler = (e: FormEvent) => {
        e.preventDefault();
        const submitForm = async () => {
            try {
                const response = await fetch(
                    "https://formsubmit.co/ajax/ad6ffa81c6d378ca8c70a7956ab397b4",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            name: formInputs.name,
                            email: formInputs.email,
                            message: formInputs.message,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                    }
                );
                const data = await response.json();
                console.log(data);
                return data;
            } catch (err) {
                return err;
            }
        };
        submitForm();
        setFormSubmitted(true);
    };

    return (
        <section
            id="contact"
            className={["my-24 md:my-0 py-16 md:py-16"].join(" ")}
        >
            <div className="relative min-h-screen px-6 mx-auto md:px-10 2xl:max-w-7xl">
                <div className="py-16">
                    <div className="flex flex-col flex-nowrap">
                        <h3 className="alm-h3--projects">Contact</h3>
                        <div className="flex flex-row justify-between w-full nowrap">
                            <h2 className="alm-h2--projects">
                                Let&apos;s have coffee some time
                            </h2>
                        </div>

                        <p
                            className="text-base font-medium font-poppins md:w-3/5"
                            style={{
                                color: "rgba(17,23,33,0.7)",
                                lineHeight: "1.575rem",
                            }}
                        >
                            If you want to hire me, ask me a question or just
                            wanted to say hi. Send me a message and I&apos;ll do
                            my best to get back to you.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row flex-nowrap">
                    <div className="flex flex-col gap-4 md:w-2/5 md:py-16 flex-nowrap">
                        <form
                            action="https://formsubmit.co/ad6ffa81c6d378ca8c70a7956ab397b4"
                            method="POST"
                            onSubmit={submitFormHandler}
                            className="flex flex-col gap-4 flex-nowrap"
                        >
                            <div className="flex flex-col gap-2 flex-nowrap">
                                <label htmlFor="">Name</label>
                                <input
                                    type="text"
                                    className="w-full h-10 px-2 border-2 border-black rounded-lg"
                                    required
                                    onChange={(e) =>
                                        setFormInputs((prevProps) => ({
                                            ...prevProps,
                                            name: e.target.value,
                                        }))
                                    }
                                    value={formInputs.name}
                                />
                            </div>
                            <div className="flex flex-col gap-2 flex-nowrap">
                                <label htmlFor="">Email</label>
                                <input
                                    type="text"
                                    className="h-10 px-2 border-2 border-black rounded-lg"
                                    required
                                    onChange={(e) =>
                                        setFormInputs((prevProps) => ({
                                            ...prevProps,
                                            email: e.target.value,
                                        }))
                                    }
                                    value={formInputs.email}
                                />
                            </div>
                            <div className="flex flex-col gap-2 flex-nowrap">
                                <label htmlFor="">Message</label>
                                <textarea
                                    className="p-2 border-2 border-black rounded-lg resize-y h-25 min-h-20 max-h-40"
                                    rows={5}
                                    required
                                    name="message"
                                    onChange={(e) =>
                                        setFormInputs((prevProps) => ({
                                            ...prevProps,
                                            message: e.target.value,
                                        }))
                                    }
                                    value={formInputs.message}
                                />
                            </div>
                            <input
                                type="hidden"
                                name="_subject"
                                value="Website: AlainMoratalla.com Message"
                            />
                            <input
                                type="hidden"
                                name="_autoresponse"
                                value="Thank you for your message"
                            />
                            <div className="flex flex-col items-center justify-center gap-1 flex-nowrap md:flex-row md:gap-4 md:my-4">
                                <button className="flex-1 w-full px-4 py-2 text-white rounded-md bg-black-var">
                                    <span>Send Message</span>
                                </button>
                                <span>or</span>
                                <div className="w-full px-4 py-2 underline border-0 rounded-md md:border-2 md:w-auto border-brand text-brand underline-offset-4 md:no-underline">
                                    <a
                                        href="mailto:realmoratalla@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span>Email me instead..</span>
                                    </a>
                                </div>
                            </div>
                        </form>
                        {formSubmitted && (
                            <p className="p-4 bg-transparent border-2 border-success text-poppins">
                                <span className="mb-2 font-bold text-md mt-2">
                                    Thank you for being awesome!
                                </span>
                                <br />
                                <span>
                                    I appreciate your message {formInputs.name}.
                                    I&apos;ll get back to you shortly and reply
                                    by email as soon as possible.
                                </span>
                                <span className="block mt-2">
                                    Talk to you soon
                                </span>
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col flex-1 gap-4 py-16 md:w-1/2 md:p-16 md:ml-8 md:bg-off bg-inherit">
                        <h4 className="text-2xl font-bold font-poppins">
                            Get in touch some other way...
                        </h4>
                        <p>
                            I&apos;m always open to opportunities and finding
                            ways to improve myself. If you think I can provide
                            any value for you in any way, you can also find me
                            on the following sites.
                        </p>
                        <div className="flex flex-col gap-8 px-8 py-8 ">
                            <a
                                className="flex flex-row items-center gap-4 cursor-pointer"
                                href={contactLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex items-center justify-center w-8 h-8">
                                    <GitHubSVG className="w-8 h-8" />
                                    {/* <Image
                                        src="./assets/svg/github.svg"
                                        alt="github"
                                        className="w-8 h-8"
                                        width={32}
                                        height={32}
                                    /> */}
                                </div>
                                <span>Github</span>
                            </a>
                            <a
                                className="flex flex-row items-center gap-4 cursor-pointer"
                                href={contactLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex items-center justify-center w-8 h-8">
                                    <LinkedInSVG className="w-8 h-8" />
                                    {/* <Image
                                        src={"./assets/svg/linkedin.svg"}
                                        alt={"linkedin"}
                                        className="w-8 h-8"
                                        width={32}
                                        height={32}
                                    /> */}
                                </div>
                                <span>LinkedIn</span>
                            </a>
                            <a
                                className="flex flex-row items-center gap-4 cursor-pointer"
                                href={contactLinks.fem}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex items-center justify-center w-8 h-8 bg-white">
                                    <FrontEndMentorSVG className="" />
                                    {/* <Image
                                        src={"./assets/svg/fem.svg"}
                                        alt={"frontend mentor"}
                                        className="w-8 h-8"
                                        width={32}
                                        height={32}
                                    /> */}
                                </div>
                                <span>Frontend Mentor</span>
                            </a>
                            <a
                                className="flex flex-row items-center gap-4 cursor-pointer"
                                href={contactLinks.codewars}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div
                                    className="flex items-center justify-center w-8 h-8 bg-white"
                                    style={{ backgroundColor: "#b1361e" }}
                                >
                                    <CodewarsSVG className="" />
                                    {/* <Image
                                        src={"./assets/svg/codewars.svg"}
                                        alt={"codewars"}
                                        className="w-8 h-8"
                                        width={32}
                                        height={32}
                                    /> */}
                                </div>
                                <span>Codewars</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className="absolute top-0 right-0 w-7/12 h-screen bg-off -z-10"></div> */}
            </div>
        </section>
    );
};

export default Contact;
