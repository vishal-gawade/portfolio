import styled from  'styled-components';
import { BiChevronsUp} from 'react-icons/bi';

export const FooterContainer = styled.div `
display: grid;
height: 150px;
width: 100%;
color: #FFF;
background: #101522;
place-items: center;
font-size: 16px;
`;

export const FooterWrap = styled.div`
display: grid;
place-items: center;
font-size: 16px;
grid-gap: 2rem;
`;

export const ScrollToTop = styled.button`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
color: #FFF;
padding: 5px;
background: var(--cyan);
border:none;
outline:none;
cursor: pointer;
border-radius: 50%;
transform: translate(800%, 0%);

`;
export const ArrowUp = styled(BiChevronsUp) `
    font-size: 1.4rem;
    
`;

export const SocialIcon = styled.div`
display: flex;
flex-direction: row;
`;

export const SocialLink = styled.div`
color: #FFF;
font-size: 1.5rem;
margin-inline: 10px;
cursor: pointer;
`;

export const WebsiteRight = styled.div`
color: #FFF;
font-size: 1rem;
`;

