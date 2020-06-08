import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Card from '../card/card';

const Title = styled.div`
	font-size: 20px;
	font-weight: 700;
	padding: 0 10px;
`

const TradeRows = styled.div`
	margin-top: 15px;
`

const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 16px;
	font-weight: 600;
	padding: 10px;
`

const Input = styled.input`
	font-size: 16px;
	font-weight: 400;
	padding: 6px 10px;
	border: 1px solid #aaa;
	border-radius: 2px;
`

const buttonDisabledStyles = css`
	background-color: ${props => props.theme.btnSecondary};
	color: ${props => props.theme.btnSecondaryText};
	border: ${props => `1px solid #aaa`};
	cursor: auto;
`

const Button = styled.button`
	font-size: 16px;
	font-weight: 500;
	padding: 8px 18px;
	border-radius: 20px;
	cursor: pointer;

	background-color: ${props => props.theme.btnPrimary};
	color: ${props => props.theme.btnPrimaryText};
	border: ${props => `1px solid ${props.theme.btnPrimaryText}`};

	${props => props.disabled && buttonDisabledStyles}
`

const TradeCard = () => {

	const [sellingPrice, setSellingPrice] = useState('');
	const [buyingPrice, setBuyingPrice] = useState('');

	const handleSellInputChange = e => {
		const inputVal = e.target.value;
		if (Number(inputVal) || inputVal === '') {
			setSellingPrice(e.target.value);
		}
	}

	const handleBuyInputChange = e => {
		const inputVal = e.target.value;
		if (Number(inputVal) || inputVal === '') {
			setBuyingPrice(inputVal);
		}
	}

	const handleSellClick = () => {
		setSellingPrice('');
	}

	const handleBuyClick = () => {
		setBuyingPrice('');
	}

	return (
		<Card>
			<Title>Trade</Title>
			<TradeRows>
				<Row>
					<div>BTC &rArr; USD</div>
					<Input
						type='text'
						min='0'
						value={sellingPrice}
						onChange={handleSellInputChange}
					/>
					<Button
						disabled={sellingPrice.length < 1}
						onClick={handleSellClick}
					>Sell</Button>
				</Row>
				<Row>
					<div>USD &rArr; BTC</div>
					<Input
						type='text'
						min='0'
						value={buyingPrice}
						onChange={handleBuyInputChange}
					/>
					<Button
						disabled={buyingPrice.length < 1}
						onClick={handleBuyClick}
					>Buy</Button>
				</Row>
			</TradeRows>
		</Card>
	);
}

export default TradeCard;