import styled from "styled-components";
import { COLOR } from "../../constants/color";
import { Divide } from "../common-components/Divide";


export const ModalWindow = styled(Divide)`
    padding: 20px;
    min-height: 200px;
    max-width: 600px;

    border: 2px solid ${COLOR.blackBrown};
    border-radius: 20px;
    background-color: ${COLOR.bgColorModal};
    box-shadow: 1px 1px 50px ${COLOR.black};

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;