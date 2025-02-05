import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = ({ seconds }) => {
    return (
        <div className="counter-content">
            <i className="fas fa-clock fa-2x"></i>
            <div className="counter-display">{seconds}</div>
        </div>
    );
};

SecondsCounter.propTypes = {
    seconds: PropTypes.number.isRequired,
};

export default SecondsCounter;
