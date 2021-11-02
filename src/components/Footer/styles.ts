import styled from 'styled-components';

export const FooterContainer = styled.footer`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  @media (max-width:768px) {
    padding: 1rem 1rem 4rem;
  }

  p { 
    color: var(--text-title);
    font-size: .9rem;
    a { 
      color: var(--blue);
      text-decoration: none;
      &:hover {
        border-bottom: 1px dotted var(--blue);
      }
    }
  }

`;