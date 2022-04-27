import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {
	return (
		<div className="contenedor">
			<div className="row "></div>

			<div>
				<i className="far fa-clock"></i>
			</div>
			<div>
				<div className="col-md">{props.counter6 % 10}</div>
				<div className="col-md">{props.counter5 % 10}</div>
				<div className="col-md">{props.counter4 % 10}</div>
				<div className="col-md">{props.counter3 % 10}</div>
				<div className="col-md">{props.counter2 % 10}</div>
				<div className="col-md">{props.counter % 10}</div>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	counter: PropTypes.number,
	counter2: PropTypes.number,
	counter3: PropTypes.number,
	counter4: PropTypes.number,
	counter5: PropTypes.number,
	counter6: PropTypes.number,
};

export default SecondsCounter;
