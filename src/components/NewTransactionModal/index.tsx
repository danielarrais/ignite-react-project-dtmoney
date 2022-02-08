import React, { useState } from "react";
import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import closeImg from '../../assets/close.svg'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'

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
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >
        <button
          type="button"
          className="react-modal-close"
          onClick={handleCloseModal}
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>
        <Container>
          <h2>Cadastrar Transação</h2>

          <input
            placeholder="Título"
          />

          <input
            type="number"
            placeholder="Valor"
          />

          <TransactionTypeContainer>
            <button >
              <img src={IncomeImg} alt="Entrada" />
              <span>Entrada</span>
            </button>
            <button>
              <img src={OutcomeImg} alt="Entrada" />
              <span>Saída</span>
            </button>
          </TransactionTypeContainer>

          <input
            placeholder="Categoria"
          />

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </>
  )
}
