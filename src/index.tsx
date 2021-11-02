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
          title: 'Dev Site',
          type: 'incoming',
          category: 'Freela',
          amount: 8000,
          createdAt: new Date('2021-10-05 10:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'outcoming',
          category: 'Casa',
          amount: 1200,
          createdAt: new Date('2021-10-09 12:30:00'),
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
