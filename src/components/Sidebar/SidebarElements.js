import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';


export const SidebarContainer = styled.div`
position: fixed;
height: 100%;
width: 100%;
display: grid;
align-items: center;
background: #000;
font-Size: 16px;
color: #fff;
z-index: 999;
top: 0;
left:0;
opacity: ${({ isOpen }) => isOpen ? '100%' : '0'};
top: ${({ isOpen }) => isOpen ? '0' : '-100%'};
transition: .2s ease-in-out;
`;

export const CloseIcon = styled(FaTimes)`
color: #fff;
`;

export const SideLogo = styled.div`
position: absolute;
top: 1.2rem;
right: 1.3rem;
font-size: 1.8rem;
`;
export const SideWrap = styled.div`
color: #00CED1;
`;

export const SideMenu = styled.ul`
display: grid;
place-items: center;
grid-template-columns: 1fr;
grid-template-rows: repeat( 6, 80px );
text-align: center;

@media screen and (max-width: 480px){

grid-template-rows: repeat( 6, 80px );
}
`;
export const SideLinks = styled(LinkS)`
display: flex;
justify-content: center;
font-size: 1.3rem;
font-weight: bold;
color: #fff;
list-style: none;
text-decoration:none;
cursor: pointer;

&:hover{
    color: #00CED1;
}
`;

export const BtnWrap = styled.div `
display: flex;
align-items: center;
justify-content: center;
width: 50%;
`
export const A = styled.a`
text-decoration: none;
`

