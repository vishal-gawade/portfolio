import styled from 'styled-components';

export const WorkContainer = styled.div`
	height: 100%;
	display: flex;
	font-size: 16px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #010606;
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
	@media screen and (max-width: 480px) {
		font-size: 1rem;
	}
`;

export const AboutH1 = styled.h1`
	color: #fff;
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 20px;
	@media screen and (max-width: 480px) {
		font-size: 1.5rem;
	}
`;

export const AboutH2 = styled.h2`
	color: #fff;
	font-size: 1.5rem;
	font-weight: bold;
	margin-bottom: 40px;

	@media screen and (max-width: 480px) {
		font-size: 1rem;
	}
`;

export const CardContainer = styled.div`
	display: grid;
	margin: 0 auto;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: flex-start;
	grid-gap: 1.5rem;
	padding-inline: 50px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding-inline: 20px;
	}
`;

export const CardWrap = styled.div`
	height: auto;
    width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
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
`;

export const ImageWrap = styled.img`
	height: 160px;
	width: 160px;
	margin-bottom: 10px;
`;

export const WorkH2 = styled.h2`
	font-size: 1rem;
	margin-bottom: 10px;
`;

export const WorkP = styled.p`
	font-size: 1rem;
	text-align: center;
  line-height: 1.5rem;
`;

export const BtnWrap = styled.div`
  margin-top: 1rem;
`;
