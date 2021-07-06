
import React from 'react'
import { Button } from '../SecondaryButton';
import {
    SidebarContainer,
    SideLogo,
    SideWrap,
    SideMenu,
    SideLinks,
    CloseIcon,
    BtnWrap,
    A
} from '../Sidebar/SidebarElements';

const Sidebar = ({ isOpen, toggle, }) => {

    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <SideLogo>
                    <CloseIcon />
                </SideLogo>
                <SideWrap>
                    <SideMenu>
                        <SideLinks to='home' onClick={toggle}>
                            Home
                        </SideLinks>
                        <SideLinks to='about' onClick={toggle}>
                            About
                        </SideLinks>
                        <SideLinks to='work' onClick={toggle}>
                            Work
                        </SideLinks>
                        <SideLinks to='contact' onClick={toggle}>
                            Contact
                        </SideLinks>
                        <BtnWrap>
                            <A href="https://drive.google.com/file/d/1Ka3nR1UJoi6ZTLGdluWeNp5FyXmq_Std/view" >
                                <Button
                                    fontBig={true}
                                    fontWeight={true}
                                >
                                    Resume
                                </Button>
                            </A>
                        </BtnWrap>
                    </SideMenu>

                </SideWrap>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
