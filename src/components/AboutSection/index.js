import React from 'react'
import {
    AboutContainer,
    AboutWrap,
    TextWrap,
    AboutH1,
    AboutH2,
    AboutH3,
    AboutColumn,
    InfoWrap,
    InfoH2,
    InfoP,
    SkillContainer,
    SkillWrap,
    SkillText,


} from '../AboutSection/AboutElement'
const About = () => {
    return (
        <>
            <AboutContainer id='about'>
                <AboutWrap>
                    <TextWrap>
                        <AboutH3>
                            ABOUT
                        </AboutH3>
                        <AboutH1>
                            Personal Info
                        </AboutH1>
                        <AboutH2>
                            Get to know more about me
                        </AboutH2>
                        <hr />
                    </TextWrap>
                    <AboutColumn>
                        <InfoWrap>
                            <InfoH2>
                                Hello
                            </InfoH2>
                            <InfoP>
                                My Name is vishal and  I'm a passionate Frontend Web Developer
                                using web technologies to build amazing products and focusing
                                on Solving problems for different niches and different industries
                                using the power of technology.
                                <br />
                                I will love to hear from you. Whether its project or job opportunity
                                or just a chat. Feel free to contact me.
                            </InfoP>
                        </InfoWrap>
                        <InfoWrap>
                            <InfoH2>
                                Skills
                            </InfoH2>
                            <SkillContainer>
                                <SkillWrap>
                                    <SkillText>JAVA</SkillText>
                                </SkillWrap>
                                <SkillWrap>
                                    <SkillText>HTML</SkillText>
                                </SkillWrap>
                                <SkillWrap>
                                    <SkillText>CSS</SkillText>
                                </SkillWrap>
                                <SkillWrap>
                                    <SkillText>JAVASCRIPT</SkillText>
                                </SkillWrap>
                                <SkillWrap>
                                    <SkillText>REACT</SkillText>
                                </SkillWrap>
                                <SkillWrap>
                                    <SkillText>GIT</SkillText>
                                </SkillWrap>
                                <SkillWrap>
                                    <SkillText>API</SkillText>
                                </SkillWrap>
                            </SkillContainer>
                        </InfoWrap>
                    </AboutColumn>
                </AboutWrap>
            </AboutContainer>
        </>
    )
}

export default About;
