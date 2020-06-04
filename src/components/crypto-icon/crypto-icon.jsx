import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	align-items: center;
`

const CryptoIcon = ({ name }) => {

	const [icon, setIcon] = useState('');

	useEffect(() => {
		const importIcon = async () => {
			try {
				const importedSvg = await import(`../../assets/icons/cryptocurrencies/${name.toLowerCase()}.svg`);
				setIcon(importedSvg.default);
			} catch (error) { }
		};
		importIcon();
	}, [name]);

	return (
		<Container>
			{
				icon &&
				<img src={icon} alt={name} />
			}
		</Container>
	);
}

export default CryptoIcon;