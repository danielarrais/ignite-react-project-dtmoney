import { FormEvent, useState } from "react";
import Modal from "react-modal";
import {
  Container,
  TransactionTypeContainer,
  RadioBox,
  RadioBoxActiveColors
} from "./styles";
import closeImg from '../../assets/close.svg'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import { useTransaction } from "../../hooks/useTransaction";

interface NewTransactionModalProps {
  openModalElement: any;
}

enum TrancationType {
  Income = 'deposit',
  Outcome = 'withdraw'
}

export function NewTransactionModal({ openModalElement }: NewTransactionModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState(TrancationType.Income);
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const { createTransaction } = useTransaction();

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const resetStates = () => {
    setType(TrancationType.Income);
    setTitle('');
    setValue(0);
    setCategory('');
    setIsModalOpen(false);
  }

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();
    await createTransaction({ title, value, type, category })
    resetStates();
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
        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar Transação</h2>

          <input
            value={title}
            onChange={event => {
              setTitle(event.target.value);
            }}
            placeholder="Título"
          />

          <input
            value={value}
            onChange={event => {
              setValue(Number(event.target.value));
            }}
            type="number"
            placeholder="Valor"
          />

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              activeColor={RadioBoxActiveColors.Green}
              isActive={type === TrancationType.Income}
              onClick={() => {
                setType(TrancationType.Income)
              }}
            >
              <img src={IncomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>
            <RadioBox
              type="button"
              activeColor="red"
              isActive={type === TrancationType.Outcome}
              onClick={() => {
                setType(TrancationType.Outcome)
              }}
            >
              <img src={OutcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input
            value={category}
            onChange={event => {
              setCategory(event.target.value);
            }}
            placeholder="Categoria"
          />

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal >
    </>
  )
}
