import React from "react";
import { Outlet } from "react-router-dom";
import { FooterContainer } from "../containers/FooterContainer/FooterContainer";
import { HeaderContainer } from "../containers/HeaderContainer/HeaderContainer";

export const Main = () => {
    return (
        <>
            <HeaderContainer/>
            <Outlet/>
            <FooterContainer/>
        </>
    )
}