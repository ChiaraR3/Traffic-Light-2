import React, { useState } from "react";
import PropTypes from "prop-types";

const RedLight = ({ selectedColor, setSelectedColor }) => {
	return (
		<div
			onClick={() => {
				setSelectedColor("red");
			}}
			className={"redLight" + (selectedColor === "red" ? " glow" : "")}>
			<i className="far fa-hand-paper"></i>
		</div>
	);
};

RedLight.propTypes = {
	setSelectedColor: PropTypes.func,
	selectedColor: PropTypes.string
};
export default RedLight;
