import React from 'react';
import emailjs from 'emailjs-com';
import {
	ContactContainer,
	MainTitle,
	ContactWrap,
	FormContent,
	Form,
	FormTitle,
	FormInput,
	Textarea,
	FormButton,
	ContactInfoWrap,
	Info,
	AddInfo,
	AddInfoWrap,
} from '../ContactSection/ContactElements';

export default function ContactUs() {
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('service', 'mail_template', e.target, 'user_bJl59d3GXQeLrPmzpz1X2').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
		e.target.reset();
	}


	return (
	
		<>
			<ContactContainer id="contact">
				<MainTitle>CONTACT</MainTitle>
				<ContactWrap>
					<ContactInfoWrap>
						<AddInfoWrap>
							<AddInfo>PHONE</AddInfo>
							<Info>Mobile: (+91)8668226381</Info>
						</AddInfoWrap>
						<AddInfoWrap>
							<AddInfo>EMAIL</AddInfo>
							<Info>vishalgawade.ce@gmail.com</Info>
						</AddInfoWrap>
						<AddInfoWrap>
							<AddInfo>ADDRESS</AddInfo>
							<Info>Pune, Maharashtra</Info>
						</AddInfoWrap>
					</ContactInfoWrap>
					<FormContent>
						<Form onSubmit={sendEmail}>
							
							<FormTitle>Get in Touch</FormTitle>
							<FormInput type="text" placeholder="Your Name" name="name" required />
							<FormInput type="text" placeholder="Subject" name="subject" required />
							<FormInput type="email" placeholder="Your Mail" name="email" required />
							<Textarea type="textarea" placeholder="Message" name="message" />
							<FormButton type="submit">Send Message</FormButton>
						</Form>
					</FormContent>
				</ContactWrap>
			</ContactContainer>
		</>
	);
}
