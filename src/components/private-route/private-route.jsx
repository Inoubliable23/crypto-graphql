import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getToken } from '../../helpers';

const PrivateRoute = props => {

	const isAuthenticated = getToken();

	return (
		<>
			{isAuthenticated ?
				<Route {...props}></Route>
				:
				<Redirect to='/login' />
			}
		</>
	);
}

export default PrivateRoute;