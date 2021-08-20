import React, { useState } from "react";
import GreenLight from "./GreenLight.jsx";
import RedLight from "./RedLight.jsx";
import YellowLight from "./YellowLight.jsx";

// onClick={() => setColor("yellow")}

const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	return (
		<div className="container">
			<div className="LightTop"></div>
			<div className="TrafficLight">
				<RedLight
					selectedColor={selectedColor}
					setSelectedColor={setSelectedColor}
				/>
				<YellowLight
					selectedColor={selectedColor}
					setSelectedColor={setSelectedColor}
				/>
				<GreenLight
					selectedColor={selectedColor}
					setSelectedColor={setSelectedColor}
				/>
			</div>
		</div>
	);
};

export default Home;
