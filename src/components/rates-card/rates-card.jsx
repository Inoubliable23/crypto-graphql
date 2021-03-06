import React from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import { Link } from 'react-router-dom';
import CryptoIcon from '../crypto-icon/crypto-icon';
import Card from '../card/card';

const Title = styled.div`
	font-size: 20px;
	font-weight: 700;
	padding: 0 10px;
`

const CryptocurrenciesList = styled.div`
	margin-top: 15px;
`

const Row = styled(Link)`
	display: grid;
	grid-template-columns: 44px 1fr 2fr 2fr 2fr;
	padding: 10px;

	&:nth-child(even) {
		background-color: #F5F7FB;
	}

	&:hover {
		background-color: #E3E8F3;
	}
`

const Symbol = styled.div`
	display: flex;
	align-items: center;
	font-weight: 600;
`

const Name = styled.div`
	display: flex;
	align-items: center;
`

const Price = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-weight: 500;
`

const Change = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-weight: 500;

	color: ${props => props.isNegative ? '#E15C5C' : '#86CE97'};
`

const CRYPTO_QUERY = gql`
	{
		cryptocurrencies {
			id
			symbol
			name
			rank
			priceUsd
			changePercent24Hr
		}
	}
`

const RatesCard = () => {

	const { loading, data } = useQuery(CRYPTO_QUERY);

	return (
		<Card>
			<Title>Rates</Title>
			{loading ?
				<p>Loading...</p>
				:
				<CryptocurrenciesList>
					{
						data && data.cryptocurrencies &&
						data.cryptocurrencies.map(cryptocurrency => {
							const { id, symbol, name, priceUsd, changePercent24Hr } = cryptocurrency;
							return (
								<Row key={id} to={`/${id}`}>
									<CryptoIcon name={symbol} />
									<Symbol>{symbol}</Symbol>
									<Name>{name}</Name>
									<Price>$ {priceUsd}</Price>
									<Change isNegative={changePercent24Hr < 0}>
										{changePercent24Hr}%
									</Change>
								</Row>
							)
						})
					}
				</CryptocurrenciesList>
			}
		</Card>
	);
}

export default RatesCard;