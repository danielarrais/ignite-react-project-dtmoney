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

export const TransactionContext = createContext<Transaction[]>([])

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  )
}
