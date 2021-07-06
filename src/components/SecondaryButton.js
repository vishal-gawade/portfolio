import styled from 'styled-components';


export const Button = styled.button`
  border-radius: 50px;
  background: ${({ primary }) => primary ? '0' : '#010606'};
  white-space: nowrap; 
  padding: ${({ big }) => big ? '14px 18px' : '12px 30px'};
  color: ${({ dark }) => dark ? '#010606' : '#fff'};
  font-size: ${({ fontBig }) => fontBig ? '20px' : '16px'};
  font-weight: ${({ fontWeight }) => fontWeight ? '500' : '400'};
  outline: none;
  border: none; 
  cursor: pointer; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  transition: all .2s ease-in-out; 

  &:hover {
    transition: all .2s ease-ease-in-out; 
    background: ${({ primary }) => primary ? '#fff' : '#00CED1'};
  }
`;