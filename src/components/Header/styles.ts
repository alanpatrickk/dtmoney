import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width:768px) {
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem 1rem 7rem;
  }
  .logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    small {
      color: var(--background);
      margin-left: 1rem;
      margin-top: .4rem;
      filter: opacity(70%);
    }
  }
  button { 
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: var(--radius);
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.1);
    }

    @media (max-width:768px) {
      margin-top: 1.5rem;
    }

  }
`;