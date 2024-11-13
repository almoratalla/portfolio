// app/BodyClassProvider.js
"use client";

import { createContext, FC, PropsWithChildren, useContext } from "react";
import useHeaderStore from "../stores/header-store";

const BodyClassContext = createContext({
    bodyClass: "",
});

const BodyClassProvider: FC<PropsWithChildren> = ({ children }) => {
    const { isNavOpen } = useHeaderStore();

    return (
        <BodyClassContext.Provider value={{ bodyClass: "alm-blur" }}>
            <div id="root-body" className={`${isNavOpen ? "alm-blur" : ""}`}>
                {children}
            </div>
        </BodyClassContext.Provider>
    );
};

export default BodyClassProvider;

export function useBodyClass() {
    return useContext(BodyClassContext);
}
