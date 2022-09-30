import React from "react";
import styled from "styled-components";

interface ISelectProps {
    display?: string;
    width?: string | number;
    minWidth?: string | number;
    maxWidth?: string;
    height?: string | number;
    margin?: string;
    padding?: string;
}

export const Select = styled.select<ISelectProps>`
    width: ${p => typeof p.width === "number" ? `${p.width}%` : `${p.width}px`};
    min-width: ${p => typeof p.minWidth === "number" ? `${p.minWidth}%` : `${p.minWidth}px`};
    max-width: ${p => p.maxWidth}px;
    height: ${p => typeof p.height === "number" ? `${p.height}%` : `${p.height}px`};

    margin: ${p => p.margin};
    padding: ${p => p.padding};

    display: ${p => p.display};
`