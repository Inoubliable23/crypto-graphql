import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	padding: 30px;
	background-color: #fff;
	border-radius: 10px;
`

const Title = styled.div`
	font-size: 18px;
	font-weight: 700;
`

const CryptocurrenciesList = styled.div`
	margin-top: 15px;
`

const Row = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr 2fr 2fr;
	padding: 10px 0;
`

const Symbol = styled.div`
	font-weight: 600;
`

const cryptocurrencies = [
	{
		id: 'bitcoin',
		rank: 1,
		symbol: 'BTC',
		name: 'Bitcoin',
		supply: 18389681.0000000000000000,
		maxSupply: 21000000.0000000000000000,
		marketCapUsd: 175354784229.6747521263318403,
		volumeUsd24Hr: 5242945750.5844602880018030,
		priceUsd: 9535.4989697578088563,
		changePercent24Hr: 1.2906178987775091,
		vwap24Hr: 9485.1999770308874960
	},
	{
		id: 'ethereum',
		rank: 2,
		symbol: 'ETH',
		name: 'Ethereum',
		supply: 111144164.1240000000000000,
		maxSupply: null,
		marketCapUsd: 26335926084.8435425775857134,
		volumeUsd24Hr: 2936882649.0120356930963087,
		priceUsd: 236.9528467141233757,
		changePercent24Hr: 7.3582310027157534,
		vwap24Hr: 229.6952305438743462
	},
	{
		id: 'tether',
		rank: 3,
		symbol: 'USDT',
		name: 'Tether',
		supply: 8798069379.4700000000000000,
		maxSupply: null,
		marketCapUsd: 8799447946.1412280913080846,
		volumeUsd24Hr: 7245727913.9681320808694105,
		priceUsd: 1.0001566896794932,
		changePercent24Hr: 0.0666673789783612,
		vwap24Hr: 0.9996871763053111
	}
];

const RatesCard = () => {
	return (
		<Container>
			<Title>Rates</Title>
			<CryptocurrenciesList>
				{
					cryptocurrencies.map(cryptocurrency => (
						<Row key={cryptocurrency.id}>
							<Symbol>{cryptocurrency.symbol}</Symbol>
							<div>{cryptocurrency.name}</div>
							<div>$ {cryptocurrency.priceUsd.toFixed(2)}</div>
							<div>{cryptocurrency.changePercent24Hr.toFixed(2)}%</div>
						</Row>
					))
				}
			</CryptocurrenciesList>
		</Container>
	);
}

export default RatesCard;