import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.div`
	background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
	height: 80px;
	margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
	color: #fff;
`;

export const NavContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 0 24px;
	height: 80px;
	width: 100%;
	max-width: 1100px;
`;
export const NavWrap = styled.div`
	display: flex;
	justify-self: flex-start;
	justify-content: center;
	height: 2.5rem;
	width: 2.5rem;
	background: linear-gradient(45deg, #00ced1, #7fffd4);
	border-radius: 50%;
`;
export const NavLogo = styled(RouterLink)`
	color: #fff;
	display: flex;
	justify-self: flex-start;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	font-weight: bold;
	cursor: pointer;
	z-index: 2;
	text-decoration: none;
`;
export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		color: #fff;
		font-size: 1.6rem;
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		cursor: pointer;
		transform: translate(-100%, 67%);
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	padding-inline: 1.5rem;
	list-style: none;
   
`;

export const NavLink = styled(ScrollLink)`
	color: #fff;
	font-size: 1rem;
	font-weight: 500;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		color: #00ced1;
	}
	&.active {
		border-bottom: 3px solid var(--cyan);
	}
`;
