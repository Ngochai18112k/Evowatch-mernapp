import React, { createContext, useState } from 'react';
import Modal from '../../components/Modal/Modal';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [modalOpened, setModalOpened] = useState(false);

    const openModal = () => {
        setModalOpened(true);
    }

    const closeModal = () => {
        setModalOpened(false);
    }

    const valueModalContext = {
        openModal,
        closeModal
    }

    return (
        <ModalContext.Provider value={valueModalContext}>
            {modalOpened && <Modal></Modal>}
            {children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;