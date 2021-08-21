import React, { useState } from "react";
import PropTypes from "prop-types";

const YellowLight = ({
	selectedColor,
	setSelectedColor,
	selectedIcon,
	setSelectedIcon
}) => {
	return (
		<div
			onClick={() => {
				setSelectedColor("yellow");
				setSelectedIcon("far fa-hand-spock");
			}}
			className={
				"yellowLight" + (selectedColor === "yellow" ? " glow" : "")
			}>
			<i
				className={
					selectedIcon === "far fa-hand-spock"
						? "far fa-hand-spock"
						: " "
				}></i>
		</div>
	);
};

YellowLight.propTypes = {
	setSelectedColor: PropTypes.func,
	selectedColor: PropTypes.string,
	selectedIcon: PropTypes.string,
	setSelectedIcon: PropTypes.func
};
export default YellowLight;
