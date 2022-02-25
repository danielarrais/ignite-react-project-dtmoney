import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { createServer, Model } from 'miragejs'
import Modal from "react-modal";
import { TransactionProvider } from './TransactionContext';

Modal.setAppElement('#root')

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Lanche Guru Lanches",
          value: 50,
          type: 'deposit',
          category: 'Food',
          createdDate: new Date('2021-02-02 09:00:00')
        },
        {
          id: 2,
          title: "Salário",
          value: 1000,
          type: 'withdraw',
          category: 'Job',
          createdDate: new Date('2021-02-25 09:00:00')
        },
        {
          id: 3,
          title: "Aulas NEXT",
          value: 500,
          type: 'deposit',
          category: 'Job',
          createdDate: new Date('2021-02-15 09:00:00')
        },
      ]
    });
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const transaction = {
        ...JSON.parse(request.requestBody),
        createdDate: new Date()
      }

      return schema.create('transaction', transaction);
    })
  }
});

function App() {
  return (
    <TransactionProvider>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </TransactionProvider>
  );
}

export default App;
