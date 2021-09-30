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

const loadImg = () => {
	// css background-image를 활용해 인터렉션을 구현할 경우, 이미지가 나중에 로드되기 때문에 이미지가 깜빡이는 것처럼 보이는 문제를 해결하기 위함. 이미지가 처음에 로드되지 않고 css 클래스를 추가할 때 로드되는 문제 해결!
	const preLoadImgSrc = [
		"../../lib/images/ninja_attack.png",
		"../../lib/images/ninja_run.png",
	];

	// 반복문을 만들어 배열에 있는 모든 이미지가 로드되도록 처리하기 위함
	preLoadImgSrc.forEach(arr => {
		const img = new Image();
		// src 속성에 이미지를 추가하면 브라우저에서 이미지를 내려받게 됨
		img.src = arr;
	});
};

let hero;
const init = () => {
	hero = new Hero(".hero");
	loadImg();
	windowEvent();
};

window.onload = () => {
	init();
};
