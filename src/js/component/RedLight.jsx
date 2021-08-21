import React, { useState } from "react";
import PropTypes from "prop-types";

const RedLight = ({
	selectedColor,
	setSelectedColor,
	selectedIcon,
	setSelectedIcon
}) => {
	return (
		<div
			onClick={() => {
				setSelectedColor("red");
				setSelectedIcon("far fa-hand-paper");
			}}
			className={"redLight" + (selectedColor === "red" ? " glow" : "")}>
			<i
				className={
					selectedIcon === "far fa-hand-paper"
						? "far fa-hand-paper"
						: ""
				}></i>
		</div>
	);
};

RedLight.propTypes = {
	setSelectedColor: PropTypes.func,
	selectedColor: PropTypes.string,
	selectedIcon: PropTypes.string,
	setSelectedIcon: PropTypes.func
};
export default RedLight;
