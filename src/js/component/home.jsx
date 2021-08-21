import React, { useState } from "react";
import GreenLight from "./GreenLight.jsx";
import RedLight from "./RedLight.jsx";
import YellowLight from "./YellowLight.jsx";

const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	const [selectedIcon, setSelectedIcon] = useState("far fa-hand-paper");
	return (
		<div className="container">
			<div className="LightTop"></div>
			<div className="TrafficLight">
				<RedLight
					selectedColor={selectedColor}
					setSelectedColor={setSelectedColor}
					selectedIcon={selectedIcon}
					setSelectedIcon={setSelectedIcon}
				/>
				<YellowLight
					selectedColor={selectedColor}
					setSelectedColor={setSelectedColor}
					selectedIcon={selectedIcon}
					setSelectedIcon={setSelectedIcon}
				/>
				<GreenLight
					selectedColor={selectedColor}
					setSelectedColor={setSelectedColor}
					selectedIcon={selectedIcon}
					setSelectedIcon={setSelectedIcon}
				/>
			</div>
		</div>
	);
};

export default Home;
