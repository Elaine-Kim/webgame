const key = {
	keyDown: {},
	keyValue: {
		ArrowLeft: "left",
		ArrowRight: "right",
	},
};

const windowEvent = () => {
	window.addEventListener("keydown", e => {
		key.keyDown[key.keyValue[e.code]] = true;
	});

	window.addEventListener("keyup", e => {
		key.keyDown[key.keyValue[e.code]] = false;
	});
};

const init = () => {
	windowEvent();
};

window.onload = () => {
	init();
};
