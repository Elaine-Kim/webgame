class Hero {
	constructor(el) {
		this.el = document.querySelector(el);
		// console.log(this.el);
	}
	keyMotion() {
		// 키모션 메소드는 히어로의 움직임을 변경
		if (key.keyDown["left"]) {
			this.el.classList.add("run");
			this.el.classList.add("flip");
		} else if (key.keyDown["right"]) {
			this.el.classList.add("run");
			this.el.classList.remove("flip");
		}

		if (key.keyDown["attack"]) {
			this.el.classList.add("attack");
		}

		if (!key.keyDown["left"] && !key.keyDown["right"]) {
			this.el.classList.remove("run");
		}

		if (!key.keyDown["attack"]) {
			this.el.classList.remove("attack");
		}
	}
}
