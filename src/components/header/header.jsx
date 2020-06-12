import React from 'react';
import styled from 'styled-components';
import LoginDropdown from '../login-dropdown/login-dropdown';

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 10px 30px;
`

const Header = () => {
	return (
		<Container>
			<LoginDropdown />
		</Container>
	);
}

export default Header;