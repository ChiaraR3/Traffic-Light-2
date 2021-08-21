import React, { useState } from "react";
import PropTypes from "prop-types";

const GreenLight = ({
	selectedColor,
	setSelectedColor,
	selectedIcon,
	setSelectedIcon
}) => {
	return (
		<div
			onClick={() => {
				setSelectedColor("green");
				setSelectedIcon("far fa-thumbs-up");
			}}
			className={
				"greenLight" + (selectedColor === "green" ? " glow" : "")
			}>
			<i
				className={
					selectedIcon === "far fa-thumbs-up"
						? "far fa-thumbs-up"
						: " "
				}></i>
		</div>
	);
};
GreenLight.propTypes = {
	setSelectedColor: PropTypes.func,
	selectedColor: PropTypes.string,
	selectedIcon: PropTypes.string,
	setSelectedIcon: PropTypes.func
};
export default GreenLight;
