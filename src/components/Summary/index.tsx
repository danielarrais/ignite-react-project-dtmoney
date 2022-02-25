import { useContext } from 'react';
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'
import { TransactionContext } from '../../TransactionContext';
import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionContext);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.value;
      acc.total += transaction.value;
    } else {
      acc.withdraws += transaction.value;
      acc.total -= transaction.value;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  });

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="Entradas" />
        </header>
        <strong>{formatCurrency(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="Saídas" />
        </header>
        <strong>- {formatCurrency(summary.withdraws)}</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong>{formatCurrency(summary.total)}</strong>
      </div>
    </Container>
  )
}
