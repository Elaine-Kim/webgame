const key = {
	keyDown: {},
	keyValue: {
		ArrowLeft: "left",
		ArrowRight: "right",
		KeyX: "attack",
	},
};

const windowEvent = () => {
	window.addEventListener("keydown", e => {
		// console.log(e);
		key.keyDown[key.keyValue[e.code]] = true;
		hero.keyMotion();
	});

	window.addEventListener("keyup", e => {
		key.keyDown[key.keyValue[e.code]] = false;
		hero.keyMotion();
	});
};

let hero;
const init = () => {
	hero = new Hero(".hero");
	windowEvent();
};

window.onload = () => {
	init();
};
