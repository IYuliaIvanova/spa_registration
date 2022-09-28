import React from "react";
import { Divide } from "../../components/common-components/Divide";
import { Paragraph } from "../../components/common-components/Paragraph";
import { Span } from "../../components/common-components/Span";
import { themes } from "../../constants/themes";

export const Breadcrumb = () => {
    return (
        <Divide width={60} padding="10px 0" display="flex" justifyContent="center" columnGap="30">
            <Divide width={25} textAlign="center" borderBottom={`3px solid ${themes.colors.lightGreenBlue}`}>
                <Span display="inline-block" margin="0 0 5px 0" crumb>1</Span>
                <Paragraph padding="0 0 10px 0">Sign Up Info</Paragraph>
            </Divide>
            <Divide width={25} textAlign="center" borderBottom={`3px solid ${themes.colors.lightGreenBlue}`}>
                <Span display="inline-block" margin="0 0 5px 0" crumb>2</Span>
                <Paragraph padding="0 0 10px 0">Personal Info</Paragraph>
            </Divide>
        </Divide>
    )
}