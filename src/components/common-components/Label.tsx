import React from "react";
import styled from "styled-components";
import { COLOR } from "../../constants/color";

interface ILabelProps {
    width?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    margin?: string;
    textDecoration?: string;
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    fontStyle?: string;
    color?: string;
}

export const Label = styled.label<ILabelProps>`
    width: ${p => p.width}px;
    max-width: ${p => p.maxWidth}px;
    height: ${p => p.height}px;
    max-height: ${p => p.maxHeight}px;

    margin: ${p => p.margin};

    text-decoration: ${p => p.textDecoration};
    font-style: ${p => p.fontStyle || "normal"};
    font-weight: ${p => p.fontWeight || "400"};
    font-size: ${p => p.fontSize || "22"}px;
    line-height: ${p => p.lineHeight || "22"}px;

    color: ${p => p.color || COLOR.white};
    cursor: pointer;
`