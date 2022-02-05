import React from 'react';
import {render} from 'react-dom';

import mainStyles from './assets/scss/main.scss';

const App = () => {
	return (
		<h1>React Boilerplate</h1>
	);
};

render(<App/>, document.getElementById('root'));