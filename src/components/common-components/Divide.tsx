import React from "react";
import styled from "styled-components";

interface IDivideProps {
    display?: string;
    width?: string | number;
    minWidth?: string | number;
    maxWidth?: string;
    height?: string | number;
    margin?: string;
    padding?: string;
    textAlign?: string;
    flexDirection?: string;
    alignItems?: string;
    justifyContent?: string;
    flexWrap?: string;
    rowGap?: string;
    columnGap?: string;
    position?: string;
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
    transform?: string;
    transition?: string;
    overflow?: string;
}

export const Divide = styled.div<IDivideProps>`
    width: ${p => typeof p.width === "number" ? `${p.width}%` : `${p.width}px`};
    min-width: ${p => typeof p.minWidth === "number" ? `${p.minWidth}%` : `${p.minWidth}px`};
    max-width: ${p => p.maxWidth}px;
    height: ${p => typeof p.height === "number" ? `${p.height}%` : `${p.height}px`};

    margin: ${p => p.margin};
    padding: ${p => p.padding};

    display: ${p => p.display};
    text-align: ${p => p.textAlign};
    flex-direction: ${p => p.flexDirection};
    align-items: ${p => p.alignItems};
    justify-content: ${p => p.justifyContent};
    flex-wrap: ${p => p.flexWrap};
    row-gap: ${p => p.rowGap}px;
    column-gap: ${p => p.columnGap}px;
    overflow: ${p => p.overflow};

    position: ${(p) => ((p.position !== 'relative') && (p.position !== 'static') ? `${p.position};
        top: ${p.top}px;
        bottom: ${p.bottom}px;
        left: ${p.left}px;
        right: ${p.right}px;` : 'relative'
    )};

    transform: ${p => p.transform};
    transition: ${p => p.transition};
`