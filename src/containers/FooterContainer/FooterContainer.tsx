import React from "react";
import { CustomLink } from "../../components/common-components/CustomLink";
import { Divide } from "../../components/common-components/Divide";
import { Footer } from "../../components/common-components/Footer";
import { Image } from "../../components/common-components/Image";
import { Link } from "../../components/common-components/Link";

export const FooterContainer = () => {
    return (
        <Footer padding="10px 40px">
            <Divide display="flex" columnGap="20">
                <Link href="https://www.linkedin.com/in/yulia-ivanova-frontend-developer" target="_blank">
                    <Image src={require("../../assets/linkedin-in.svg").default} width={"50"}/>
                </Link>
                <Link href="https://github.com/IYuliaIvanova" target="_blank">
                    <Image src={require("../../assets/github.svg").default} width={"50"}/>
                </Link>
            </Divide>
        </Footer>
    )
}