import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
	return (
		<div>
			<img
				src={spinner}
				style={{ width: '180px', margin: 'auto', display: 'block' }}
				alt="Loading..."
			/>
		</div>
	);
};

export default Spinner;
