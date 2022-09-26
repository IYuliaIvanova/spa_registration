import React from "react";
import styled from "styled-components";

interface IHeaderProps {
    padding?: string;
}

export const Header = styled.header<IHeaderProps>`
    width: 100%;
    padding: ${p => p.padding};
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
`