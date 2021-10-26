import { createContext, useEffect, useState, useContext, ReactNode } from 'react'
import { api } from "../services/api";

interface Transition {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransitionApi = Omit<Transition, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transition[];
  createNewTransaction: (transaction: TransitionApi) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({children}: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<Transition[]>([]);
  
  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createNewTransaction(TransitionApi: TransitionApi) {
    const response = await api.post('transactions', {
      ...TransitionApi,
      createdAt: new Date()
    })
    const { transaction } = response.data;
    setTransactions([
      ...transactions,
      transaction
    ])

  }

  return (
    <TransactionsContext.Provider value={{ transactions, createNewTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )

}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}