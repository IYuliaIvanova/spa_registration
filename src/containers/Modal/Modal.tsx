import { Button } from "../../components/common-components/Button";
import { Divide } from "../../components/common-components/Divide";
import { HeadingSecondLevel } from "../../components/common-components/HeadingSecondLevel";
import { ModalOverlay } from "../../components/modal-components/ModalOverlay";
import { ModalWindow } from "../../components/modal-components/ModalWindow";
import { Portal } from "../../components/Portal/Portal";
import { themes } from "../../constants/themes";

interface IModalProps {
    title: string;
    isOpen: boolean;
    onCancel: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
    children: React.ReactNode;
}

export const Modal = ({ title, isOpen, onCancel, children }: IModalProps) => {
    return (
        <>
            {
                isOpen && (
                    <Portal>
                        <ModalOverlay className="modalOverlay">
                            <ModalWindow className="modalWindow">
                                <Divide 
                                    width={100} 
                                    padding="0 0 10px 0" 
                                    className="modalHeader" 
                                    borderBottom={`1px solid ${themes.colors.whiteSmoky}`} 
                                    display="flex" 
                                    justifyContent="space-between" 
                                    columnGap="30"
                                > 
                                    <HeadingSecondLevel className="modalTitle">{title}</HeadingSecondLevel>
                                    <Button width='22' height='22' onClick={onCancel} backgroundColor={themes.colors.pink}>&#9746;</Button>
                                </Divide>
                                <Divide className="modalBody" padding="20px">
                                    {children}
                                </Divide>
                                <Divide width={100} className="modalFooter" display="flex" justifyContent="flex-end" columnGap="20">
                                    <Button width="100" onClick={onCancel} fontSize="18" height="30" backgroundColor={themes.colors.pink}>Cancel</Button>
                                </Divide>
                            </ModalWindow>
                        </ModalOverlay>
                    </Portal>
                )
            }
        </>
    )
}