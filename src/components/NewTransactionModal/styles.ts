import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`

  h2 { 
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input, 
  select { 
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: var(--radius);
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    color: var(--text-title);
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }
    &:focus {
      outline: 0;
      box-shadow: 0 0 10px #d7d7d7;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: var(--radius);
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter .2s;
    &:hover {
      filter: brightness(.9);
    }
  }

`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#E62E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`

  height: 4rem;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    border: 1px solid #d7d7d7;
    background: ${(props) => props.isActive 
      ? transparentize(0.9, colors[props.activeColor])
      : 'transparent'
    };
    font-weight: 400;
    font-size: 1rem;
    img {
      width: 20px;
      height: 20px;
    }
    span {
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }
    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }

`