import React, { useState } from 'react';

interface IModal {
  id: number;
  name: string;
  open: boolean;
}

interface IModalManager {
  modalsItems: IModal[];
  handleOpenModal: (name: string) => void;
  handleCloseModal: (name: string) => void;
  findModal: (name: string) => IModal | undefined;
}

export const useModalManager = (modals: IModal[]): IModalManager => {
  const [modalsItems, setModalsItems] = useState(modals);

  const handleOpenModal = (name: string) => {
    const modalOpen = modals.map((modal) => {
      if (modal.name === name) return { ...modal, open: true };
      return modal;
    });

    setModalsItems(modalOpen);
  };

  const handleCloseModal = (name: string) => {
    const modalOpen = modals.map((modal) => {
      if (modal.name === name) return { ...modal, open: false };
      return modal;
    });
    setModalsItems(modalOpen);
  };

  const findModal = (name: string) => {
    return modalsItems.find((modal) => modal.name === name);
  };

  return {
    handleCloseModal,
    handleOpenModal,
    findModal,
    modalsItems,
  };
};
