import React from "react";
import styled from "styled-components";
import { COLOR } from "../../constants/color";

interface IFormProps {
    width?: string | number;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    padding?: string;
    display?: string;
    alignItems?: string;
    justifyContent?: string;
    flexDirection?: string;
    flexWrap?: string;
    columnGap?: string;
    rowGap?: string;
    backgroundColor?: string;
}

export const Form = styled.form<IFormProps>`
    width: ${p => typeof p.width === "number" ? `${p.width}%`: `${p.width}px`};
    max-width: ${p => p.maxWidth}px;
    height: ${p => p.height}px;
    max-height: ${p => p.maxHeight}px;

    padding: ${p => p.padding};

    border-radius: 20px;

    display: ${p => p.display};
    align-items: ${p => p.alignItems};
    justify-content: ${p => p.justifyContent};
    flex-direction: ${p => p.flexDirection};
    flex-wrap: ${p => p.flexWrap};
    column-gap: ${p => p.columnGap}px;
    row-gap: ${p => p.rowGap}px;

    background-color: ${p => p.backgroundColor};
    box-shadow: 1px 1px 50px ${COLOR.black};
`