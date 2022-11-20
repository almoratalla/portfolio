import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import HeaderNav from "../components/HeaderNav";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
// import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Alain Moratalla</title>
                <meta
                    name="description"
                    content="Let's turn brilliant ideas to income generation solutions"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderNav />
            <div id="content" className="">
                <main className="">
                    <Hero />
                    <Projects />
                    <Experiences />
                    <Skills />
                    <AboutMe />
                    {/* Blog */}
                    <Contact />
                    <Footer />
                </main>
            </div>
        </div>
    );
}
