import styled from 'styled-components';

export const ContactContainer = styled.div`
	height: auto;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: 100px;
	font-size: 16px;
	background: var(--white);
	padding-block: 3rem;

`;

export const MainTitle = styled.h1`
	font-size: 1.5rem;
	font-weight: bold;
	color: #00ced1;
	margin-block: 50px;
`;

export const ContactWrap = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 3rem;

`;

export const FormContent = styled.div`
	display: grid;
	place-items: center;
	margin-inline: 1rem;
`;

export const Form = styled.form`
	width: 100%;
	max-width: 500px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	color: #000;
	background: #fff;
	padding-inline: 3rem;
	padding-block: 2rem;
	border-radius: 8px;
	border: 2px solid #fff;
	&:hover {
		border: 2px solid var(--cyan);
	}
	@media screen and (max-width: 768px){
		margin-inline:  3rem;
		padding-block: 1rem;
	}
`;

export const FormTitle = styled.h2`
	margin-block: 10px;
	color: gray;
`;

export const FormInput = styled.input`
	color: #060606;
	font-size: 1rem;
	padding: 0.5rem;
	margin-block: 1rem;
	border: 2px solid grey;
	background: #f7f7f7;
	border-radius: 4px;
	width: 100%;
	border: 2px solid #bebebe;
	&:hover {
		border: 2px solid var(--cyan);
	}
`;

export const Textarea = styled.textarea`
	color: #060606;
	font-size: 1rem;
	border: 2px solid grey;
	padding: 0.5rem;
	margin-block: 1rem;
	border-radius: 4px;
	background: #f7f7f7;
	height: 10rem;
	width: 100%;
	border: 2px solid #bebebe;
	&:hover {
		border: 2px solid #00ced1;
	}
`;

export const FormButton = styled.button`
	color: #fff;
	width: 100%;
	font-size: 1rem;
	padding: 1rem;
	cursor: pointer;
	border-radius: 4px;
	background: #00ced1;
	margin-block: 2rem;
	border: none;

	&:hover {
		transform: scale(0.98);
		transition: 0.2s ease-in-out;
	}
`;

export const ContactInfoWrap = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr;
	place-items: center;
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const AddInfo = styled.h3`
	color: #060606;
	font-size: 1rem;
	padding: 1rem;
`;

export const Info = styled.h3`
	font-size: 1rem;
	padding: 1rem;
	color: gray;
`;

export const AddInfoWrap = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	place-items: center;
`;
