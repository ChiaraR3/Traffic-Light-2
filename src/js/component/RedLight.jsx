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
			}}
			className={"redLight" + (selectedColor === "red" ? " glow" : "")}>
			<i
				onClick={() => {
					setSelectedIcon("far fa-hand-paper");
				}}
				className={
					//"far fa-hand-paper" +
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
