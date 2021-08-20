import React, { useState } from "react";
import PropTypes from "prop-types";

const GreenLight = () => {
	const [selectedColor, setSelectedColor] = useState(" ");
	return (
		<div
			onClick={() => setSelectedColor("green")}
			className={
				"greenLight" + (selectedColor === "green" ? " glow" : "")
			}>
			<i className="far fa-thumbs-up"></i>
		</div>
	);
};

GreenLight.propTypes = {
	setSelectedColor: PropTypes.func,
	selectedColor: PropTypes.string
};
export default GreenLight;
