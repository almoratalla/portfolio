import Link from "next/link";
// import { useRouter } from "next/router";
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
}> = ({ href, url, children, ...props }) => {
    // const { asPath, push } = useRouter();
    // Handle both string and React element children
    const isReactElement = React.isValidElement(children);
    const child = isReactElement ? Children.only(children) as ReactElement : null;
    // const className = asPath === `/${href}` ? "active-nav" : "";

    return (
        <Link
            href={href}
            {...props}
            className={["alm-nav", `#${url}`].join(" ")}
            // onClick={(e) => {
            //     let section = document.getElementById(url ? url : "#");
            //     e.preventDefault(); // Stop Page Reloading
            //     push(`/#${url}`, "", {
            //         scroll: false,
            //     });
            //     section && section.scrollIntoView();
            //     closeNav && closeNav();
            // }}
        >
            {isReactElement ? cloneElement(child!) : children}
        </Link>
    );
};

export default NavLink;
