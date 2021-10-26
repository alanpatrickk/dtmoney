import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { useTransactions } from "../../hooks/useTransactions";

import closeImg from '../../assets/close.svg';
import icomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {

  const { createNewTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('incoming');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    await createNewTransaction({
      title,
      amount,
      category,
      type
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('incoming')
    onRequestClose()

  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        
        <h2>Cadastrar Transação</h2>

        <input 
          type="text" 
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="Título"
        />
        
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            isActive={type === 'incoming'}
            activeColor="green"
            onClick={() => setType('incoming')}
          >
            <img src={icomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
            type="button"
            isActive={type === 'outcoming'}
            activeColor="red"
            onClick={() => setType('outcoming')}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <select
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        >
          <option value="Casa">Casa</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
        </select>

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  )
}