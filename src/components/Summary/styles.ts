import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 1.2rem;
  margin-top: -7rem;
  @media (max-width:768px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
  div {
    flex: 1;
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: var(--radius);
    color: var(--text-title);
    @media (max-width:768px) {
      padding: 1.2rem 1.8rem;
    }
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
      @media (max-width:768px) {
        margin-top: 0;
      }
    }
    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }
`;