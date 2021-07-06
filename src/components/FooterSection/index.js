import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    ScrollToTop,
    WebsiteRight,
    SocialLink,
    SocialIcon,
    ArrowUp


} from '../FooterSection/FooterElements';
import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
} from 'react-icons/fa';

const Footer = ({toggleHome}) => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <ScrollToTop onClick={toggleHome}>
                        <ArrowUp/>
                    </ScrollToTop>
                    <WebsiteRight>
                        VG © {new Date().getFullYear()} All right reserved.
                    </WebsiteRight>
                    <SocialIcon>
                        <SocialLink href="https://github.com/vishal-gawade" target="_blank" aria-label="Github">
                            <FaGithub />
                        </SocialLink >
                        <SocialLink href="https://www.linkedin.com/in/vishal-gawade22/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialLink>
                        <SocialLink href="https://www.instagram.com/vishalgawade22/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialLink>
                    </SocialIcon>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer;
