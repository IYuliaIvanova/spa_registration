import React from "react";
import styled from "styled-components";

interface ISectionProps {
    margin?: string;
    padding?: string;
}

export const Section = styled.section<ISectionProps>`
    margin: ${p => p.margin};
    padding: ${p => p.padding};

    flex-grow: 1;
`