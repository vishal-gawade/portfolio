import styled from 'styled-components';

export const AboutContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #000;
	height: auto;
	width: 100%;
	background: var(--white);
	font-size: 16px;
`;

export const AboutWrap = styled.div`
	display: grid;
	place-items: center;
	grid-gap: 4rem;
	height: 100%;
	padding-block: 7rem;
	@media screen and (max-width: 768px) {
		padding-top: 5rem;
	}
`;

export const TextWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const AboutH3 = styled.h3`
	color: #00ced1;
	font-size: 1.5rem;
	font-weight: bold;
	margin-bottom: 20px;
`;

export const AboutH1 = styled.h3`
	color: #000;
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 20px;
`;

export const AboutH2 = styled.h3`
	color: #000;
	font-size: 1.5rem;
	font-weight: bold;
`;

export const AboutColumn = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	place-items: center;
	grid-gap: 1rem;
	color: #000;
	padding-inline: 50px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr;
	}
`;

export const InfoWrap = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	place-items: center;
`;

export const InfoH2 = styled.h2`
	font-size: 1.5rem;
	font-weight: bold;
	color: #000;
`;

export const InfoP = styled.p`
	font-size: 1rem;
	color: #000;
	padding: 3rem;
	line-height: 1.5rem;
	font-weight: 500;
`;

export const SkillContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: auto;
	grid-gap: 0.5rem;
	padding: 2rem;
	place-items: center;
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
`;

export const SkillWrap = styled.div`
	display: grid;
	place-items: center;
	height: 100%;
	width: 100%;
	max-width: 10rem;
	background: #eeeeee;
	border-radius: 5px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
	border: none;
	color: #000;

	&:hover {
		transform: scale(1.02);
		transition: 0.2s ease-in-out;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
	}
`;

export const SkillText = styled.h5`
	z-index: 2;
	color: gray;
	padding: 5px;
`;
