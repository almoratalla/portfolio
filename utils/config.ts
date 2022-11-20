import foryou from "../static/showcase/ShowcaseForYou.png";
import ccphean from "../static/showcase/ShowcaseCcphean.png";

export const navLinks = [
    {
        name: "Home",
        url: "",
    },
    {
        name: "Projects",
        url: "projects",
    },
    {
        name: "Experience",
        url: "experiences",
    },

    {
        name: "About",
        url: "about",
    },
    {
        name: "Contact",
        url: "contact",
    },
];

export const contactLinks = {
    github: "https://github.com/almoratalla",
    linkedin: "https://www.linkedin.com/in/realmoratalla/",
    fem: "https://www.frontendmentor.io/profile/almoratalla",
    codewars: "https://www.codewars.com/users/realmoratalla",
};

export const featuredProjects = [
    {
        name: "ForYou",
        description:
            "A concept that visualizes personal youtube profile data using React and Node.js built around googleapis; OAuth2 and youtube data api v3.",
        techStack: ["Typescript", "React", "Node.js", "Youtube Data API"],
        demo: foryou,
    },
    {
        name: "Ccphean",
        description:
            "A bug tracking app that lets you manage projects, issues and tasks while providing insights on data and productivity.",
        techStack: ["Typescript", "Angular", "ASP .Net Core", "PostgreSQL"],
        demo: ccphean,
    },
];
