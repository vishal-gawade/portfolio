import styled from 'styled-components';


export const Button = styled.button`
  border-radius: 50px;
  background: ${({ primary }) => primary ? '0' : 'var(--corn)'};
  white-space: nowrap; 
  padding: ${({ big }) => big ? '14px 18px' : '12px 30px'};
  color: ${({ dark }) => dark ? 'var(--text)' : 'var(--white)'};
  font-size: ${({ fontBig }) => fontBig ? '20px' : '16px'};
  font-weight: ${({ fontWeight }) => fontWeight ? '500' : '400'};
  outline: none;
  border: none; 
  cursor: pointer; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  transition: all .2s ease-in-out; 
  font-family: var(--p);
  &:hover {
    transition: all .2s ease-ease-in-out; 
    background: ${({ primary }) => primary ? 'var(--text)' : 'var(--cyan)'};
   
  }
`;