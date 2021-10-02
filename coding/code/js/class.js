class Hero {
	constructor(el) {
		this.el = document.querySelector(el);
		// console.log(this.el);

		// 히어로가 움직이기 위해선 1.이동할 거리, 2.속도가 필요함
		this.movex = 0; // 이동할 거리
		this.speed = 16; // 속도\

		// console.log(window.innerHeight);
		// console.log(this.el.getBoundingClientRect().top);
		// console.log((window.innerHeight = this.el.getBoundingClientRect().top));
	}
	keyMotion() {
		// 키모션 메소드는 히어로의 움직임을 변경
		if (key.keyDown["left"]) {
			this.el.classList.add("run");
			this.el.classList.add("flip");

			this.movex = this.movex - this.speed;
		} else if (key.keyDown["right"]) {
			this.el.classList.add("run");
			this.el.classList.remove("flip");

			this.movex = this.movex + this.speed;
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

		this.el.parentNode.style.transform = `translateX(${this.movex}px)`;
	}

	position() {
		// 해상도를 유지하지 않는다면 꼭 위 또는 아래에 기준을 두고 위치를 구해야한다. (수업에선 아래를 기준으로 잡는다.)
		return {
			left: this.el.getBoundingClientRect().left,
			right: this.el.getBoundingClientRect().right,
			top: gameProp.screenHeight - this.el.getBoundingClientRect().top,
			bottom:
				gameProp.screenHeight -
				this.el.getBoundingClientRect().top -
				this.el.getBoundingClientRect().height,
		};
	}
}
