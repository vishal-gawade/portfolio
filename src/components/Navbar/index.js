import React, { useEffect, useState } from 'react';
import {
    Nav,
    NavContainer,
    NavItem,
    NavMenu,
    NavLogo,
    NavLink,
    NavWrap,
    MobileIcon,
    BtnWrap,
    ResumeBtn,
    Download,
    A
} from '../Navbar/NavbarElements';
import { FaBars, } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const Navbar = ({ toggle, toggleHome }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        }
        else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

 
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavContainer>
                        <NavWrap>
                            <NavLogo to='/' onClick={toggleHome}>
                                VG
                            </NavLogo>
                            <MobileIcon onClick={toggle}>
                                <FaBars />
                            </MobileIcon>
                        </NavWrap>
                        <NavMenu>
                            {[
                                { to: 'home', title: "Home", },
                                { to: 'about', title: "About", },
                                { to: 'work', title: "Work", },
                                { to: 'contact', title: "Contact", },

                            ].map(({ to, title }) => (

                                <NavItem key={to}>
                                    <NavLink
                                        to={to}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-80}
                                    >
                                        {title}
                                    </NavLink>
                                </NavItem>
                            ))}

                        </NavMenu>
                        <BtnWrap>
                            <A href="https://drive.google.com/file/d/1Ka3nR1UJoi6ZTLGdluWeNp5FyXmq_Std/view" >
                                <ResumeBtn>
                                    Resume<Download />
                                </ResumeBtn>
                            </A>
                        </BtnWrap>
                    </NavContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
