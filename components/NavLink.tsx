import Link from "next/link";
import { useRouter } from "next/router";
import React, {
    Children,
    cloneElement,
    FC,
    ReactElement,
    ReactNode,
} from "react";

const NavLink: FC<{
    href: string;
    url: string;
    children: ReactNode;
    closeNav?: () => void;
}> = ({ href, url, children, closeNav, ...props }) => {
    const { asPath, push } = useRouter();
    const child = Children.only(children) as ReactElement;
    const className = asPath === `/${href}` ? "active-nav" : "";

    return (
        <Link
            href={href}
            {...props}
            className={["alm-nav", `#${url}`, className].join(" ")}
            onClick={(e) => {
                let section = document.getElementById(url ? url : "#");
                e.preventDefault(); // Stop Page Reloading
                push(`/#${url}`, "", {
                    scroll: false,
                });
                section && section.scrollIntoView();
                closeNav && closeNav();
            }}
        >
            {cloneElement(child)}
        </Link>
    );
};

export default NavLink;
