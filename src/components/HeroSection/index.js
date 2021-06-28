import React from 'react'
import Video from '../../Videos/hero.mp4'
import {Button} from '../ButtonElements';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH3,
    HeroH1,
    BtnWrap,
    ArrowDown,
    

} from '../HeroSection/HeroElements';
const HeroSection = () => {
    return (
        <>
           <HeroContainer id="home">
               <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
               </HeroBg>
               <HeroContent>
                   <HeroH3>
                       HELLO THERE
                   </HeroH3>
                    <HeroH1>
                        I'm Vishal Gawade
                   </HeroH1>
                    <HeroH1>
                        A Web Developer
                   </HeroH1>
                    <BtnWrap>
                        <Button
                            to='about'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                        >
                            Scroll Down <ArrowDown/>
                        </Button>
                    </BtnWrap>
               </HeroContent>
           </HeroContainer> 
        </>
    )
}

export default HeroSection;
