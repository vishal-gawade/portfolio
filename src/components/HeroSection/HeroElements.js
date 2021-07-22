import styled from "styled-components";
import { BiChevronsDown } from "react-icons/bi";

export const HeroContainer = styled.div`
  background: var(--corn);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  position: relative;
  z-index: 1;
`;
export const HeroBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH3 = styled.h1`
  color:var(--white);
  font-size: 4rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 700;
  font-family: var(--h1);

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const P = styled.p`
  color: var(--white);
  font-size: 2rem;
  font-family: monospace;
  margin-block: 1.5rem;
`;

export const BtnWrap = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowDown = styled(BiChevronsDown)`
  margin-left: 0.5rem;
  font-size: 1.4rem;
`;
