import React from "react";
import styled from "styled-components";
import { COLOR } from "../../constants/color";

interface IFooterProps {
    padding?: string;
}

export const Footer = styled.footer<IFooterProps>`
    width: 100%;
    height: 200px;
    padding: ${p => p.padding};

    display: flex;
    justify-content: end;
    align-items: end;
    
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
`