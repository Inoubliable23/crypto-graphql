import React, { useState } from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo';
import { saveToken } from '../../helpers';
import { useHistory } from 'react-router-dom';

const Input = styled.input`
	width: 100%;
	padding: 10px 15px;
	margin-bottom: 20px;
	font-size: 16px;
`

const SubmitButton = styled.button`
	padding: 12px 25px;
	font-size: 16px;
	background-color: ${props => props.theme.btnPrimary};
	color: ${props => props.theme.btnPrimaryText};
	cursor: pointer;
`

const AuthInfo = styled.div`
	margin-top: 20px;
	height: 19px;
	color: ${props => props.isError ? '#E15C5C' : 'initial'};
`

const LOGIN_MUTATION = gql`
	mutation LoginMutation($name: String!, $password: String!) {
		login(name: $name, password: $password) {
			token
			error
		}
	}
`

const SIGNUP_MUTATION = gql`
	mutation SignupMutation($name: String!, $password: String!) {
		signup(name: $name, password: $password) {
			token
			error
		}
	}
`

const LoginSignupForm = ({ isLogin }) => {

	const history = useHistory();

	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const [error, setError] = useState('');

	const onAuthCompleted = data => {
		const response = isLogin ? data.login : data.signup;

		if (response.error) {
			setError(response.error);
			return;
		}
		saveToken(response.token);
		history.push('/');
	}

	const [loginMutation, { loading: authLoading }] = useMutation(LOGIN_MUTATION, {
		onCompleted: onAuthCompleted
	});

	const [signupMutation] = useMutation(SIGNUP_MUTATION, {
		onCompleted: onAuthCompleted
	});

	const handleSubmit = e => {
		e.preventDefault();

		const variables = {
			name,
			password
		};

		isLogin ? loginMutation({ variables }) : signupMutation({ variables });
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<Input
					type='text'
					placeholder='Name'
					value={name}
					onChange={e => setName(e.target.value)}
					required
				/>
				<Input
					type='password'
					placeholder='Password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
				<SubmitButton type='submit' >
					{isLogin ? 'Login' : 'Sign Up'}
				</SubmitButton>
			</form>
			<AuthInfo isError={error}>{authLoading ? 'Loading...' : error}</AuthInfo>
		</>
	);
}

export default LoginSignupForm;