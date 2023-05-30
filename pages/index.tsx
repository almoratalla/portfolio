import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import HeaderNav from "../components/HeaderNav";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Script from "next/script";
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
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        <!-- Google Tag Manager -->
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-TXT687K');
                        <!-- End Google Tag Manager -->
                        `,
                    }}
                />
            </Head>
            {/* <!-- Google tag (gtag.js) --> */}
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-7YB1VLV848"
            ></Script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        <!-- Google tag (gtag.js) -->
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-7YB1VLV848');
                        `,
                }}
            />
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-TXT687K"
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                ></iframe>
            </noscript>

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
