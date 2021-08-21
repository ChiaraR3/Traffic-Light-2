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
			}}
			className={
				"yellowLight" + (selectedColor === "yellow" ? " glow" : "")
			}>
			<i
				onClick={() => {
					setSelectedIcon("far fa-hand-spock");
				}}
				className={
					//"far fa-hand-spock" +
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
