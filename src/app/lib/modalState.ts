// src/app/lib/modalState.ts
import { useState } from 'react';
import { ModalType } from '../types';

export function useModalState() {
  const [modalOpen, setModalOpen] = useState<ModalType>(null);

  const openModal = (modal: ModalType) => setModalOpen(modal);
  const closeModal = () => setModalOpen(null);

  return {
    modalOpen,
    openModal,
    closeModal,
  };
}
