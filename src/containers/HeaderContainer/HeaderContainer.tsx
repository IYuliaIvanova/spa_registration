import React from "react";
import { CustomLink } from "../../components/common-components/CustomLink";
import { Header } from "../../components/common-components/Header";
import { Image } from "../../components/common-components/Image";

export const HeaderContainer = () => {
    return (
        <Header>
            <CustomLink to={"/"}>
                <Image src={require("../../assets/user-circle-solid.svg").default} width={"100"}/>
            </CustomLink>
        </Header>
    )
}