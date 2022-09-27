import React from "react";
import styled from "styled-components";
import { COLOR } from "../../constants/color";

interface IInputProps {
    display?: string;
    width?: string | number;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    margin?: string;
    border?: string;
    backgroundColor?: string;
    color?: string;
    outline?: string;
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    opacity?: string;
}

export const Input = styled.input<IInputProps>`
    width: ${p => typeof p.width === "number" ? `${p.width}%`: `${p.width}px`};
    max-width: ${p => p.maxWidth}px;
    height: ${p => p.height}px;
    max-height: ${p => p.maxHeight}px;

    margin: ${p => p.margin};
    padding: 9px 10px;

    display: ${p => p.display};

    border: none;
    border-radius: 5px;
    background-color: ${p => p.backgroundColor || COLOR.bgColorInput};
    color: ${p => p.color || COLOR.white};
    outline: none;

    font-weight: ${p => p.fontWeight || 400}px;
    font-size: ${p => p.fontSize || 18}px;
    line-height: ${p => p.lineHeight || 22}px;

    opacity: ${p => p.opacity};

    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:focus{
        outline: none;
        box-shadow: 3px 3px 10px ${COLOR.blackBasic};
        background: ${COLOR.bgColorInput};
    }
`