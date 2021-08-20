import React, { useState } from "react";
import PropTypes from "prop-types";

const YellowLight = () => {
	const [selectedColor, setSelectedColor] = useState("green");

	return (
		<div
			onClick={() => setSelectedColor("yellow")}
			className={
				"yellowLight" + (selectedColor === "yellow" ? " glow" : "")
			}>
			<i className="far fa-hand-spock"></i>
		</div>
	);
};
YellowLight.propTypes = {
	setSelectedColor: PropTypes.func,
	selectedColor: PropTypes.string
};
export default YellowLight;
