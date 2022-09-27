import styled from "styled-components";
import { COLOR } from "../../constants/color";
import { Divide } from "../common-components/Divide";

export const ModalOverlay = styled(Divide)`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: ${COLOR.modalOverlay};
`;