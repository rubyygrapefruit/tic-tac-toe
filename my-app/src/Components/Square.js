import React from 'react';

function Square({ value, onHandleClick }) {
	return(
		<button className={'square ' + value} onClick={ onHandleClick }>{value}</button>
	);
}

export default Square;