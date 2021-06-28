import React from 'react'

import {
    SidebarContainer,
    SideLogo,
    SideWrap,
    SideMenu,
    SideLinks,
    CloseIcon
} from '../Sidebar/SidebarElements';

const Sidebar = ({ isOpen, toggle,}) => {
   
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
                    </SideMenu>
                </SideWrap>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
