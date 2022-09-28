import React from "react";
import { Header } from "../../components/common-components/Header";
import { Image } from "../../components/common-components/Image";
import { Link } from "../../components/common-components/Link";

export const HeaderContainer = () => {
    return (
        <Header>
            <Link href="">
                <Image src={require("../../assets/user-circle-solid.svg").default} width={"100"}/>
            </Link>
        </Header>
    )
}