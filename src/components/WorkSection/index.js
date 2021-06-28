import React from 'react';
import Icon1 from '../../Images/data_report.svg';
import Icon2 from '../../Images/off_road.svg';
import Icon3 from '../../Images/secure_data.svg';
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
                            Crypto Tracker
                        </WorkH2>
                        <WorkP>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Porro, inventore a? Similique voluptatibus doloribus <br />
                            voluptatem error. Dolorem sed eligendi voluptatibus s <br />
                            amet fuga reiciendis voluptatem  <br />
                        </WorkP>
                        <BtnWrap>
                            <Button>
                                SEE LIVE
                            </Button>
                        </BtnWrap>
                    </CardWrap>
                    <CardWrap>
                        <ImageWrap src={Icon2} />
                        <WorkH2>
                            Crypto Tracker
                        </WorkH2>
                        <WorkP>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Porro, inventore a? Similique voluptatibus doloribus <br />
                            voluptatem error. Dolorem sed eligendi voluptatibus s <br />
                            amet fuga reiciendis voluptatem <br />
                        </WorkP>
                        <BtnWrap>
                            <Button>
                                SEE LIVE
                            </Button>
                        </BtnWrap>
                    </CardWrap>
                    <CardWrap>
                        <ImageWrap src={Icon3} />
                        <WorkH2>
                            Crypto Tracker
                        </WorkH2>
                        <WorkP>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Porro, inventore a? Similique voluptatibus doloribus <br />
                            voluptatem error. Dolorem sed eligendi voluptatibus s <br />
                            amet fuga reiciendis voluptatem <br />
                        </WorkP>
                        <BtnWrap>
                            <Button>
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
