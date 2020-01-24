const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

let logo = document.createElement("img");
logo.src = "img/roza2.png";

const intro = {
	width: window.innerWidth,
	height: window.innerHeight,
	mainCounter: 0,
	alpha: 0,
	running: false,
	animate: () => {
		intro.mainCounter++;

		if (intro.mainCounter < 120) {
			intro.alpha < 1 ? intro.alpha += 0.01 : null;
		}

		if (intro.mainCounter >= 120 /*&& intro.mainCounter <= 123*/) {
			switch (intro.mainCounter) {
				case 120:
					intro.alpha = 0.5;
				break;

				case 121:
					intro.alpha = 0.8;
				break;

				case 122:
					intro.alpha = 0.4;
				break;

				case 123:
					intro.alpha = 0.9;
				break;

				case 124:
					intro.alpha = 0.3;
				break;

				case 125:
					intro.alpha = 1;
				break;
			}
		}

		// if (intro.mainCounter >= 150 && intro.mainCounter <= 151) {
		// 	ctx.rotate(22 * Math.PI / 180);
		// 	ctx.transform(1, 0, .5, 1.3, -200, -220);
		// } else if (intro.mainCounter >= 152 && intro.mainCounter <= 153) {
		// 	ctx.rotate(22 * Math.PI / 180);
		// 	ctx.transform(1, 0, .5, 1.3, -55, -220);
		// }

		if (intro.mainCounter === 200) {
			intro.mainCounter = 0;
		}
	}
}

const loop = () => {
	canvas.width = intro.width;
	canvas.height = intro.height;

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// ctx.drawRect(0, 0, canvas.width, canvas.height);
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	intro.running ? intro.animate() : null;
	
	// ctx.rotate(25 * Math.PI / 180);
	// ctx.transform(1.3,0,.5,1.1,-170,-230);
	// ctx.rotate(22 * Math.PI / 180);
	// ctx.transform(1, 0, .5, 1.3, -55, -220);
	ctx.globalAlpha = intro.alpha;
	ctx.translate(-112, -300);
	ctx.drawImage(logo, canvas.width / 2, canvas.height / 2);

	window.requestAnimationFrame(loop);
}

window.onresize = () => {
	intro.width = window.innerWidth;
	intro.height = window.innerHeight;
}

window.onload = () => {
	loop();
}

window.onclick = () => {
	intro.running = !intro.running;
}