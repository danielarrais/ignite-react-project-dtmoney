import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface TransactionProviderProps {
  children: ReactNode;
}

interface Transaction {
  id: number,
  title: string,
  value: number,
  type: string,
  category: string,
  createdDate: Date
}

type TransactionInput = Omit<Transaction, 'id' | 'createdDate'>

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  const createTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post('/transactions', transactionInput);
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransaction = () => {
  return useContext(TransactionContext);
}
