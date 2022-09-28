import React from "react";
import styled, { css } from "styled-components";
import { COLOR } from "../../constants/color";
import { themes } from "../../constants/themes";

interface ISpanProps {
    display?: string;
    color?: string;
    margin?: string;
    padding?: string;
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    fontStyle?: string;
    textDecoration?: string;
    crumb?: boolean;
}

export const Span = styled.span<ISpanProps>`
    display: ${p => p.display};
    margin: ${p => p.margin};
    padding: ${p => p.padding};

    font-style: ${p => p.fontStyle || "normal"};
    font-weight: ${p => p.fontWeight || "500"};
    font-size: ${p => p.fontSize || "18"}px;
    line-height: ${p => p.lineHeight || "22"}px;
    text-decoration: ${p => p.textDecoration || "none"};

    color: ${p => p.color || COLOR.blackBrown};

    ${p => p.crumb && css`
        height: 40px;
        width: 40px;
        padding: 6px 0 0 0px;

        font-size: 20px;
        text-align: center;

        border-radius: 50%;
        background-color:${themes.colors.lightGreenBlue};
        color:${themes.colors.white};
    `}
`