import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
  @media (max-width:768px) {
    margin-top: 2rem;
  }
  table { 
    width: 100%;
    border-spacing: 0 0.5rem;
    th { 
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      @media (max-width:768px) {
        display: none;
      }
    }
    td { 
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      border-radius: var(--radius);
      color: var(--text-body);
      &:first-child {
        color: var(--text-title);
      }
      &.incoming {
        color: var(--green);
      }
      &.outcoming {
        color: var(--red);
      }
      @media (max-width:768px) {
        display: flex;
        flex-direction: collumn;
        flex-wrap: wrap;
        padding: .1rem 2rem;
        border-radius: 0;
        &:first-child {
          border-radius: var(--border-radius) var(--border-radius) 0 0;
          padding-top: 1rem;
        }
        &:last-child {
          border-radius: 0 0 var(--border-radius) var(--border-radius);
          padding-bottom: 1rem;
        }
      }
    }
  }
`;