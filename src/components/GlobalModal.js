// GlobalModal.js
import React, { useContext } from "react";
// import Modal from "@mui/material/Modal";
import ModalContext from "../helpers/ModalContext";
import styled from "@emotion/styled";

const GlobalModal = () => {
  const { modalContent, modalOpen, closeModal } = useContext(ModalContext);

  return (
    <ModalBackground onClick={closeModal} open={modalOpen}>
      <ModalWrapper
        onClick={(event) => event.stopPropagation()}
        open={modalOpen}
      >
        {modalContent}
      </ModalWrapper>
    </ModalBackground>
  );
};

export default GlobalModal;

//styles//////////////////////////////////////////////
export const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ open }) => `rgba(0, 0, 0, ${open ? 0.3 : 0})`};
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: all 0.2s ease-in-out;
`;

export const ModalWrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  position: fixed; /* Umiestnenie modálneho okna na stred stránky */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: all 0.2s ease-in-out;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
`;
