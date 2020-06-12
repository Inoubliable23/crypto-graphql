import React, { useState } from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo';

const Container = styled.div``

const LoginButton = styled.div`
	position: relative;
	padding: 15px 20px;
	font-size: 16px;
	background-color: ${props => props.theme.bgMain};
	color: ${props => props.theme.textPrimary};
	cursor: pointer;
`

const SignUpButton = LoginButton;

const DropdownContainer = styled.div`
	position: absolute;
	top: 60px;
	right: 0;
	background-color: ${props => props.theme.bgMain};
	border: 1px solid ${props => props.theme.textPrimary};
	padding: 30px;
	z-index: 100;
`

const Input = styled.input`
	padding: 10px 15px;
	margin-bottom: 20px;
`

const SubmitButton = styled.button`
	padding: 10px 15px;
	background-color: ${props => props.theme.btnPrimary};
	color: ${props => props.theme.btnPrimaryText};
	cursor: pointer;
`

const SwitchLoginSignup = styled.p`
	margin-top: 8px;
	cursor: pointer;
`

const LOGIN_MUTATION = gql`
	mutation LoginMutation($name: String!, $password: String!) {
		login(name: $name, password: $password) {
			token
		}
	}
`

const SIGNUP_MUTATION = gql`
	mutation SignupMutation($name: String!, $password: String!) {
		signup(name: $name, password: $password) {
			token
		}
	}
`

const LoginDropdown = () => {

	const [isLogin, setIsLogin] = useState(true);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const onMutationComplete = data => localStorage.setItem('crypto-graphql-token', data.signup.token);

	const [loginMutation] = useMutation(LOGIN_MUTATION, {
		onCompleted: onMutationComplete
	});
	const [signupMutation] = useMutation(SIGNUP_MUTATION, {
		onCompleted: onMutationComplete
	});

	const onSubmit = () => {
		const variables = {
			name,
			password
		};

		isLogin ? loginMutation({ variables }) : signupMutation({ variables });
	}

	return (
		<Container>
			{
				isLogin ?
					<>
						<LoginButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
							Login
						</LoginButton>
						{
							isDropdownOpen &&
							<DropdownContainer>
								<Input
									type='text'
									placeholder='Name'
									value={name}
									onChange={e => setName(e.target.value)}
								/>
								<br />
								<Input
									type='password'
									placeholder='Password'
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
								<br />
								<SubmitButton
									type="submit"
									onClick={onSubmit}
								>Login</SubmitButton>
								<br />
								<SwitchLoginSignup onClick={() => setIsLogin(false)}>Don't have an account yet?</SwitchLoginSignup>
							</DropdownContainer>
						}
					</>
					:
					<>
						<SignUpButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
							Sign Up
						</SignUpButton>
						{
							isDropdownOpen &&
							<DropdownContainer>
								<Input
									type='text'
									placeholder='Name'
									value={name}
									onChange={e => setName(e.target.value)}
								/>
								<br />
								<Input
									type='password'
									placeholder='Password'
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
								<br />
								<SubmitButton
									type="submit"
									onClick={onSubmit}
								>Sign Up</SubmitButton>
								<SwitchLoginSignup onClick={() => setIsLogin(true)}>Already have an account?</SwitchLoginSignup>
							</DropdownContainer>
						}
					</>
			}
		</Container>
	);
}

export default LoginDropdown;