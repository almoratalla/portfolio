'use client'

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import ALMLogo from '../../../../public/assets/svg/ALMLogo.svg'
import styles from '../styles/Header.module.scss'
import { navLinks } from '../utils/config'
import dynamic from 'next/dynamic'
import useScrollDirection from '../hooks/useScrollDirection'
// import { useRouter } from "next/router";
// import { Helmet } from "react-helmet-async";
import useOnClickOutside from '../hooks/useOnClickOutside'
import useHeaderStore from '../stores/header-store'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { ChevronDown } from 'lucide-react'

const NavLinkWithNoSSR = dynamic(() => import('./NavLink'), { ssr: false })

const HeaderNav = () => {
  // const [navOpen, setNavOpen] = useState(false);
  // const [currentSection, setCurrentSection] = useState("#");
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const scrollDirection = useScrollDirection()
  // const { push } = useRouter();
  const { isNavOpen, setNavOpen } = useHeaderStore()

  const navToggleHandler = (navState?: boolean) => {
    // setNavOpen((prevState) => (navState ? navState : !prevState));
    setNavOpen(navState)
  }

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)

    // TODO: Handle changing active nav based on scroll without affecting nav onclick events
    // const sections = Array.from(document.querySelectorAll("section"));
    // const navLi: HTMLAnchorElement[] = Array.from(
    //     document.querySelectorAll("a.alm-nav")
    // );

    // let current = "";
    // sections.forEach((section) => {
    //     const sectionTop = section.offsetTop;
    //     if (window.pageYOffset >= sectionTop) {
    //         // setCurrentSection(section.getAttribute("id") || "#");
    //         current = section.getAttribute("id") || "#";
    //     }
    // });

    // navLi.forEach((li) => {
    //     li.classList.remove("active-nav");
    //     if (li.classList.contains(`#${current !== "#" ? current : ""}`)) {
    //         li.classList.add("active-nav");
    //     }
    // });

    // push(`#${current !== "#" ? current : ""}`, "", {
    //     scroll: false,
    // });
  }

  const wrapperRef = useRef(null)
  useOnClickOutside(wrapperRef, () => setNavOpen(false))

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      id="header-nav-container"
      className={[
        'fixed left-0 z-50 w-full h-20 bg-white',
        scrollDirection === 'down' ? styles['scroll-down'] : styles['scroll-up'],
        scrolledToTop && styles['scroll-top'],
      ].join(' ')}
    >
      <header className="top-0 z-50 flex flex-row items-center justify-between h-20 mx-auto flex-nowrap 2xl:max-w-7xl">
        <div className="flex flex-row items-center justify-between w-full px-6 flex-nowrap md:px-10 md:py-6">
          <Link href="/" className="flex flex-row items-center font-montserrat flex-nowrap">
            <ALMLogo className="h-6 sm:h-6 2xl:h-10"></ALMLogo>
            {/* <Image
                            src={"./assets/svg/ALMLogo.svg"}
                            alt=""
                            width={100}
                            height={100}
                            className="h-6 sm:h-6 2xl:h-10"
                        /> */}
            <h2 className="hidden">ALAIN MORATALLA</h2>
          </Link>
          {/* Nav */}
          <div className="hidden md:block">
            <nav className="flex flex-row">
              <ol className="items-center justify-center md:flex lg:flex-row md:flex-nowrap gap-11 md:gap-6 2xl:gap-11 font-poppins text-xxs 2xl:text-lg">
                {navLinks.map((nl, nli) => (
                  <li key={`${nli}-${nl.name}`}>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <NavLinkWithNoSSR href={`/#${nl.url}`} url={nl.url}>
                          <div className="flex flex-row gap-2 items-center">
                            <span>{nl.name}</span>
                            {nl.name === 'About' && (
                              <ChevronDown className="w-3 h-3 2xl:w-5 2xl:h-5" />
                            )}
                          </div>
                        </NavLinkWithNoSSR>
                      </HoverCardTrigger>
                      {nl.name === 'About' && (
                        <HoverCardContent className="w-40 z-110 bg-white">
                          <div className="flex flex-col gap-2 e w-full text-sm">
                            <Link href={`/posts`} className="border-b-2 py-1">
                              Posts
                            </Link>
                          </div>
                        </HoverCardContent>
                      )}
                    </HoverCard>
                  </li>
                ))}
              </ol>
              <div className="px-4 py-2 ml-8 text-white rounded cursor-pointer 2xl:ml-16 bg-brand font-poppins text-xxs 2xl:text-lg">
                <Link
                  href="/assets/AlainMoratallaResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </Link>
              </div>
            </nav>
          </div>
          {/* <Helmet> */}
          {/* <body className={navOpen ? "alm-blur" : ""} /> */}
          {/* </Helmet> */}
          {/* Mobile Nav */}
          <div className="block md:hidden alm-hamburger-close">
            <div className="flex flex-row alm-hamburger" ref={wrapperRef}>
              <button
                className={[
                  'relative z-20 h-6 w-6 lg:hidden border-0 bg-transparent text-inherit normal-case ease-linear duration-150',

                  styles['alm-ham-btn'],
                ].join(' ')}
                onClick={() => navToggleHandler()}
              >
                <div className={styles['alm-hamburger']}>
                  <div
                    className={[
                      'duration-200',
                      styles[`alm-ham-patty--bef-${isNavOpen ? 'open' : 'close'}`],
                      styles[`alm-ham-patty--aft-${isNavOpen ? 'open' : 'close'}`],
                      styles['alm-ham-patty'],
                    ].join(' ')}
                    style={
                      isNavOpen
                        ? {
                            backgroundColor: '#62BAAC',
                            transitionDelay: '0.12s',
                            transform: 'rotate(225deg)',
                            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                          }
                        : {
                            transitionDelay: '0s',
                            transform: 'rotate(0deg)',
                            transitionTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
                          }
                    }
                  ></div>
                </div>
              </button>
              <aside
                className={[
                  'bg-nav h-screen outline-none items-center flex justify-center outline-0 fixed top-0 bottom-0 right-0 py-12 px-2 lg:hidden',
                  styles['alm-head-aside'],
                ].join(' ')}
                style={{
                  transform: `translateX(${isNavOpen ? 0 : 100}vw)`,
                }}
              >
                <nav className="flex-col items-center justify-center w-full text-center text-nav font-poppins">
                  <ol className="w-full p-0 m-0 list-none">
                    {navLinks.map((nl, nli) => (
                      <li
                        key={`${nli}-${nl.name}`}
                        className="relative mt-0 mx-auto mb-2.5 sm:mb-5 "
                        onClick={() => setNavOpen(false)}
                      >
                        <NavLinkWithNoSSR
                          href={`/#${nl.url}`}
                          url={nl.url}
                          // closeNav={() =>
                          //     setNavOpen(false)
                          // }
                        >
                          <HoverCard>
                            <HoverCardTrigger asChild>
                              <span>{nl.name}</span>
                            </HoverCardTrigger>
                            {nl.name === 'About' && (
                              <HoverCardContent className="w-20">
                                <Link href={`/posts`}>Posts</Link>
                              </HoverCardContent>
                            )}
                          </HoverCard>
                        </NavLinkWithNoSSR>
                      </li>
                    ))}
                  </ol>
                  <div
                    className="p-2 mx-auto my-8 text-white bg-transparent border-2 border-white rounded cursor-pointer w-max 2xl:ml-16 font-poppins"
                    style={{
                      borderColor: '#62BAAC',
                      color: '#B5DED6',
                    }}
                  >
                    <Link
                      href="/assets/AlainMoratallaResume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Resume
                    </Link>
                  </div>
                </nav>
              </aside>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default HeaderNav
