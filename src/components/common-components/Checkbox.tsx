import styled from "styled-components";
import { COLOR } from "../../constants/color";

export const Checkbox = styled.input`
    position: absolute;
    cursor: pointer;
    opacity: 0;
    
    & + label span {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 5px;
        border: 1px solid ${COLOR.black};
        background-color: ${COLOR.white};
        cursor: pointer;
    }

    &:checked + label span {
        background-image: ${`url(${require(`../../assets/check.png`)})`};
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
`;