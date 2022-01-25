import React, { useState } from "react";
import Modal from "react-modal";

interface NewTransactionModalProps {
  openModalElement: any;
}

export function NewTransactionModal({ openModalElement }: NewTransactionModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <span onClick={handleOpenModal}>
        {openModalElement}
      </span>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
    </>
  )
}
