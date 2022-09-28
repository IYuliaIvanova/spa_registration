import React from "react";
import { Section } from "../../components/common-components/Section";
import { Breadcrumb } from "../../containers/Breadcrumb/Breadcrumb";
import { FooterContainer } from "../../containers/FooterContainer/FooterContainer";
import { HeaderContainer } from "../../containers/HeaderContainer/HeaderContainer";
import { SignUpInfo } from "../../containers/SignUpInfo/SignUpInfo";

export const Main = () => {
    return (
        <>
            <HeaderContainer/>
            <Breadcrumb/>
            <Section margin="0 auto" padding="40px 0 10px">
                <SignUpInfo/>
            </Section>
            <FooterContainer/>
        </>
    )
}