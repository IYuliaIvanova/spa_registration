import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface ICustomLinkProps {
    width?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    fontStyle?: string;
    color?: string;
    margin?: string;
    textDecoration?: string;
    social?: boolean;
}

export const CustomLink = styled(Link)<ICustomLinkProps>`
    width: ${p => p.width}px;
    max-width: ${p => p.maxWidth}px;
    height: ${p => p.height}px;
    max-height: ${p => p.maxHeight}px;

    margin: ${p => p.margin};

    text-decoration: ${p => p.textDecoration || "none"};
    font-style: ${p => p.fontStyle || "normal"};
    font-weight: ${p => p.fontWeight || "400"};
    font-size: ${p => p.fontSize || "18"}px;
    line-height: ${p => p.lineHeight || "22"}px;

    cursor: pointer;

    color: ${p => p.color};

    transition: all 0.5s linear;
    
    &:hover {
        transform: scale(1.1);
    }

    ${p => p.social && css`
        opacity: 0.4;
        &:hover {
        opacity: 1;
        }
    `}
`