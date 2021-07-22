import React from 'react';
import Icon1 from '../../Images/cointraco.png';
import { Button } from '../ButtonElements';
import {
    WorkContainer,
    TextWrap,
    AboutH3,
    AboutH1,
    AboutH2,
    CardContainer,
    CardWrap,
    ImageWrap,
    WorkH2,
    WorkP,
    BtnWrap,
} from '../../components/WorkSection/WorkElements'
const Work = () => {
    return (
        <>
            <WorkContainer id="work">
                <TextWrap>
                    <AboutH3>
                        WORKS
                    </AboutH3>
                    <AboutH1>
                        Latest Projects.
                    </AboutH1>
                    <AboutH2>
                        Here you can find some of the projects that I created Recently.
                    </AboutH2>
                </TextWrap>
                <CardContainer>
                    <CardWrap>
                        <ImageWrap src={Icon1} alt='img' />
                        <WorkH2>
                            Cointraco
                        </WorkH2>
                        <WorkP>
                            Cointraco is cryptocurrency tracker where you 
                            can add coins to your list and track using price 
                            chart of days, week, year of coins.  
                           
                        </WorkP>
                        <BtnWrap>
                            <Button as="a" href='https://cointraco.netlify.app/'>
                                SEE LIVE
                            </Button>
                        </BtnWrap>
                    </CardWrap>
                   
                </CardContainer>
            </WorkContainer>
        </>
    )
}

export default Work;
