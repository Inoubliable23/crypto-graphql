import React from 'react';
import styled from 'styled-components';
import { useApolloClient } from 'react-apollo';
import { removeToken } from '../../helpers';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 10px 30px;
`

const LogoutButton = styled.button`
	background-color: transparent;
	font-size: 16px;
	padding: 8px 12px;
	cursor: pointer;
`

const Header = () => {

	const apolloClient = useApolloClient();

	const history = useHistory();

	const handleLogoutClick = async () => {
		removeToken();
		await apolloClient.clearStore();
		history.push('/login');
	}

	return (
		<Container>
			<LogoutButton onClick={handleLogoutClick}>Logout</LogoutButton>
		</Container>
	);
}

export default Header;