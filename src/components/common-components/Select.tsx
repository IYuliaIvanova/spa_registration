import React from "react";
import styled from "styled-components";
import { COLOR } from "../../constants/color";

interface ISelectProps {
    display?: string;
    width?: string | number;
    minWidth?: string | number;
    maxWidth?: string;
    height?: string | number;
    margin?: string;
    padding?: string;
    backgroundColor?: string;
    fontSize?: string;
    lineHeight?: string
}

export const Select = styled.select<ISelectProps>`
    width: ${p => typeof p.width === "number" ? `${p.width}%` : `${p.width}px`};
    min-width: ${p => typeof p.minWidth === "number" ? `${p.minWidth}%` : `${p.minWidth}px`};
    max-width: ${p => p.maxWidth}px;
    height: ${p => typeof p.height === "number" ? `${p.height}%` : `${p.height}px`};

    margin: ${p => p.margin};
    padding: 7px 10px;

    display: ${p => p.display};

    border: 1px solid ${COLOR.grey};
    border-radius: 5px;
    background-color: ${p => p.backgroundColor};
    color: ${p => p.color || COLOR.black};
    outline: none;

    font-size: ${p => p.fontSize || 18}px;
    line-height: ${p => p.lineHeight || 22}px;

    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:focus{
        outline: none;
        box-shadow: 3px 3px 10px ${COLOR.blackBasic};
    }
`