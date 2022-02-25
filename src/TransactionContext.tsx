import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

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
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}
