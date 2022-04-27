import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import SecondsCounter from "./component/secondsCounter.js";

/////////SecondsCounter///////////////

let i = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;
let i5 = 0;
let i6 = 0;

setInterval(function () {
	i++;
	i2 = Math.floor(i / 10);
	i3 = Math.floor(i / 100);
	i4 = Math.floor(i / 1000);
	i5 = Math.floor(i / 10000);
	i6 = Math.floor(i / 100000);

	///////////////Render////////////////

	ReactDOM.render(
		<SecondsCounter
			counter={i}
			counter2={i2}
			counter3={i3}
			counter4={i4}
			counter5={i5}
			counter6={i6}
		/>,
		document.querySelector("#app")
	);
	////////////////////////
}, 1000);
