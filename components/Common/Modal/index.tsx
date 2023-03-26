import React from "react";
import { ModalBackground } from "./style";

interface Props {
  isOpened: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpened, onClose, children }: Props) => {
  return (
    <>
      {isOpened && (
        <ModalBackground onClick={onClose}>{children}</ModalBackground>
      )}
    </>
  );
};

export default Modal;
