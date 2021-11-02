import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Dev Site John',
          type: 'incoming',
          category: 'Freelas',
          amount: 8000,
          createdAt: new Date('2021-10-30 10:00:00'),
        },
        {
          id: 2,
          title: 'Dev Site Mary',
          type: 'incoming',
          category: 'Freelas',
          amount: 6500,
          createdAt: new Date('2021-11-01 10:25:00'),
        },
        {
          id: 3,
          title: 'Aluguel',
          type: 'outcoming',
          category: 'Casa',
          amount: 1400,
          createdAt: new Date('2021-11-02 12:30:00'),
        },
        {
          id: 4,
          title: 'Luz',
          type: 'outcoming',
          category: 'Casa',
          amount: 280,
          createdAt: new Date('2021-11-02 12:30:00'),
        },
      ],
    })
  },

  routes() {

    this.namespace = '/api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })

  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
