import styled from "styled-components";
import { COLOR } from "../../constants/color";
import { Divide } from "../common-components/Divide";


export const ModalWindow = styled(Divide)`
    padding: 10px;
    min-height: 200px;
    max-width: 600px;

    border: 5px solid ${COLOR.white};
    border-radius: 5px;
    background-color: ${COLOR.blackBasic};

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;