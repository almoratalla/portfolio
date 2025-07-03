import Script from 'next/script'
import HeaderNav from './components/HeaderNav'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Experiences from './components/Experiences'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { RecentPosts } from '@/components/RecentPosts'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
// import Link from "next/link";

export default async function Home() {
  // Fetch recent posts
  const payload = await getPayload({ config: configPromise })
  const recentPosts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 6,
    sort: '-publishedAt',
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  return (
    <div className="min-h-screen">
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        id="gtm-script"
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
      >
        {' '}
      </Script>
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
          style={{ display: 'none', visibility: 'hidden' }}
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
          {/* Recent Blog Posts */}
          <RecentPosts posts={recentPosts.docs} />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  )
}
