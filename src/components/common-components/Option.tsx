import React from "react";
import styled from "styled-components";

interface IOptionProps {
    display?: string;
    width?: string | number;
    minWidth?: string | number;
    maxWidth?: string;
    height?: string | number;
    margin?: string;
    padding?: string;
    fontSize?: string;
    lineHeight?: string;
}

export const Option = styled.option<IOptionProps>`
    width: ${p => typeof p.width === "number" ? `${p.width}%` : `${p.width}px`};
    min-width: ${p => typeof p.minWidth === "number" ? `${p.minWidth}%` : `${p.minWidth}px`};
    max-width: ${p => p.maxWidth}px;
    height: ${p => typeof p.height === "number" ? `${p.height}%` : `${p.height}px`};

    margin: ${p => p.margin};
    padding: ${p => p.padding};

    display: ${p => p.display};

    font-style: normal;
    font-weight: 400;
    font-size: ${p => p.fontSize || "18"}px;
    line-height: ${p => p.lineHeight || "26"}px;
    letter-spacing: 0.48px;
`