import React from 'react';
import PropTypes from 'prop-types';
import './secondsCounter.css';

const SecondsCounter = ({ Minutos, Segundos, CentSegundos }) => {
	const formatNumber = (number) => {
		return String(number).padStart(2, '0');
	};

	return (
		<div className="counter-container">
			<div className="digit">{formatNumber(Minutos)}</div>
			<div className="digit">{formatNumber(Segundos)}</div>
			<div className="digit">{formatNumber(CentSegundos)}</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	Minutos: PropTypes.number.isRequired,
	Segundos: PropTypes.number.isRequired,
	CentSegundos: PropTypes.number.isRequired,
};

export default SecondsCounter;