import React from 'react';
import PropTypes from 'prop-types';
import './secondsCounter.css';

const SecondsCounter = ({ digitOne, digitTen, digitHundred, digitThousand, digitTenThousand, digitHundredThousand }) => {
    return (
        <div className="counter-container">
            <div className="digit">{digitHundredThousand}</div>
            <div className="digit">{digitTenThousand}</div>
            <div className="digit">{digitThousand}</div>
            <div className="digit">{digitHundred}</div>
            <div className="digit">{digitTen}</div>
            <div className="digit">{digitOne}</div>
        </div>
    );
};

SecondsCounter.propTypes = {
    digitOne: PropTypes.number.isRequired,
    digitTen: PropTypes.number.isRequired,
    digitHundred: PropTypes.number.isRequired,
    digitThousand: PropTypes.number.isRequired,
    digitTenThousand: PropTypes.number.isRequired,
    digitHundredThousand: PropTypes.number.isRequired,
};

export default SecondsCounter;