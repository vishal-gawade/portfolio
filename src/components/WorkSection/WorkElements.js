import styled from "styled-components";

export const WorkContainer = styled.div`
  height: 100%;
  display: flex;
  font-size: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--corn);
  padding-block: 4rem;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin-top: 20px;
`;

export const AboutH3 = styled.h3`
  color: var(--cyan);
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: var(--h1);

`;

export const AboutH1 = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: var(--h1);

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const AboutH2 = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 40px;
  font-family: var(--h1);
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  margin-inline: auto;
  grid-template-columns: 1fr;
  place-items: center;
  grid-gap: 1.5rem;
  padding-inline: 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr ;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-inline: 20px;
  }
`;

export const CardWrap = styled.div`
  height: 500px;
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  background: #fff;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    max-width: 350px;
  }
`;

export const ImageWrap = styled.img`
  height: 250px;
  width: 350px;
  margin-bottom: 10px;

   @media screen and (max-width: 768px) {
    height: 200px;
    width: 250px;
  }
`;

export const WorkH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  font-family: var(--h1);
`;

export const WorkP = styled.p`
  font-size: 1rem;
  text-align: center;
  line-height: 1.5rem;
  font-family: var(--p);
  padding-inline: 2rem;
`;

export const BtnWrap = styled.div`
  margin-top: 2rem;
`;
