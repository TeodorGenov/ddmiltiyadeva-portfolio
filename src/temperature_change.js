addEvent(t, "input", (e) => {
	let $val = parseInt(e.target.value);
	if ($val > 0) {
		tempCover.style.background = "rgba(255,255,0," + Math.abs($val) / 400 + ")";
		console.log("test");
	} else {
		console.log("test2");
		tempCover.style.background = "rgba(0, 0, 255," + Math.abs($val) / 400 + ")";
	}
});
