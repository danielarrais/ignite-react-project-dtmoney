import { useState } from 'react';
import Modal from 'react-modal';
import LogoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal';
import { Container, Content } from './styles'

export function Header() {

  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="dt money" />

        <NewTransactionModal
          openModalElement={
            <button>
              Nova transação
            </button>
          }
        />

      </Content>
    </Container>
  )
}
