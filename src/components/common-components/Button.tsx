import styled from "styled-components";
import { COLOR } from "../../constants/color";

interface IButtonProps {
  width?: string | number;
  height?: string;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  backgroundColorActive?: string;
  borderRadius?: number;
  fontSize?: string;
  lineHeight?: string;
  color?: string;
  colorHover?: string;
  colorActive?: string;
}

export const Button = styled.button<IButtonProps>`
    width: ${p => typeof p.width === "number" ? `${p.width}%` : `${p.width}px` || '143px'};
    height: ${p => p.height || "40"}px;

    margin: ${p => p.margin};
    padding: ${p => p.padding};

    color: ${p => p.color || COLOR.blackBasic};
    background-color: ${p => p.backgroundColor || COLOR.lightGreenBlue};
    border: none;
    border-radius: ${p => p.borderRadius || 5}px;

    font-size: ${p => p.fontSize || "24"}px;
    line-height: ${p => p.lineHeight || "20"}px;
    font-weight: 500;

    transition: all 0.5s linear;
    cursor: pointer;

    &:hover {
         transform: scale(1.1);
        box-shadow: 3px 3px 10px ${COLOR.blackBasic};
    }

    &:active {
        color: ${p => p.colorActive || COLOR.white};
        background-color: ${p => p.backgroundColorActive || COLOR.lightGreenBlue};
    }
    &:disabled {
        color: ${COLOR.blackBasic};
        background-color: ${COLOR.whiteSmoky};
    }
`