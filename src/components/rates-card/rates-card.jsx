import React from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

const Container = styled.div`
	padding: 30px 20px;
	background-color: #fff;
	border-radius: 10px;
`

const Title = styled.div`
	font-size: 20px;
	font-weight: 700;
	padding: 0 10px;
`

const CryptocurrenciesList = styled.div`
	margin-top: 15px;
`

const Row = styled.div`
	display: grid;
	grid-template-columns: 44px 1fr 2fr 2fr 2fr;
	padding: 10px;

	&:nth-child(even) {
		background-color: #F5F7FB;
	}
`

const Icon = styled.div`
	display: flex;
	align-items: center;
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
		cryptocurrencies{
			id
			symbol
			name
			rank
			priceUsd
			changePercent24Hr
		}
	}
`

const cryptoSVGs = require.context('../../assets/icons/cryptocurrencies', true);

const getCryptoSvg = symbol => {
	try {
		return cryptoSVGs(`./${symbol.toLowerCase()}.svg`);
	} catch (error) {
		return '';
	}
}

const RatesCard = () => {

	const { loading, data } = useQuery(CRYPTO_QUERY);

	return (
		<Container>
			<Title>Rates</Title>
			<CryptocurrenciesList>
				{
					!loading &&
					data.cryptocurrencies.map(cryptocurrency => (
						<Row key={cryptocurrency.id}>
							<Icon>
								<img src={getCryptoSvg(cryptocurrency.symbol)} alt='' />
							</Icon>
							<Symbol>{cryptocurrency.symbol}</Symbol>
							<Name>{cryptocurrency.name}</Name>
							<Price>$ {cryptocurrency.priceUsd.toFixed(2)}</Price>
							<Change isNegative={cryptocurrency.changePercent24Hr < 0}>
								{cryptocurrency.changePercent24Hr.toFixed(2)}%
							</Change>
						</Row>
					))
				}
			</CryptocurrenciesList>
		</Container>
	);
}

export default RatesCard;