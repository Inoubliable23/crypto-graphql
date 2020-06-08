import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	padding: 30px 20px;
	background-color: #fff;
	border-radius: 10px;
`

const Card = ({ children }) => {
	return (
		<Container>
			{children}
		</Container>
	);
}

export default Card;