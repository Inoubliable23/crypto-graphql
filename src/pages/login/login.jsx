import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginSignupForm from '../../components/login-signup-form/login-signup-form';

const Container = styled.div`
	max-width: 300px;
	padding-top: 300px;
	margin: 0 auto;
	text-align: center;
`

const SignupLink = styled(Link)`
	margin-top: 20px;
`

const LoginPage = () => {
	return (
		<Container>
			<LoginSignupForm isLogin />
			<SignupLink to={'/signup'}>Don't have an account yet?</SignupLink>
		</Container>
	);
}

export default LoginPage;