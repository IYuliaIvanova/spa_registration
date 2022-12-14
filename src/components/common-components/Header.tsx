import React from "react";
import styled from "styled-components";
import { COLOR } from "../../constants/color";

interface IHeaderProps {
    padding?: string;
}

export const Header = styled.header<IHeaderProps>`
    width: 100%;
    height: 200px;
    padding: ${p => p.padding};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto; 
`