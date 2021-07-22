import React from 'react'
import Video from '../../Videos/hero.mp4'
import {Button} from '../ButtonElements';
import '../Animations/animate.css';
import Typical from 'react-typical';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH3,
    P,
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
                       Hi I'm Vishal Gawade
                   </HeroH3>
                    <P>I'm a{' '} 
                    <Typical
                       loop={Infinity} 
                       wrapper='b'
                       steps={[
                           'developer 💻',
                           1000,
                           'designer 🎨',
                           1000
                       ]}
                    />
                    </P>
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
