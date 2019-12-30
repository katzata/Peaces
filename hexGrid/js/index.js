//
//
//

// 12px difference between width and height 
const hexGrid = {
	text: "Button",
	cellSize: 20,
	addition: 0,
	rows: 0,
	columns: 0,
	offset: 0,
	borderWidth: 1,
	borderColor: "#2B2B2B", // NO hashtag
	generate: function (target) {
		if (target.children.length != 0) {
			target.innerHTML = "";
		}

		if (this.cellSize >= 21) {
			this.borderWidth = 2;
		}

		this.offset = this.cellSize / 2;

		this.columns = Math.ceil((target.offsetWidth / this.cellSize) / 1.5);
		this.rows = Math.ceil(target.offsetHeight / this.cellSize) * 2;

		let textContainer = document.createElement("div");
		textContainer.classList.add("textContainer");

		let text = document.createElement("div");
		text.classList.add("text");
		text.innerHTML = this.text;

		let gridContainer = document.createElement("div");
		gridContainer.classList.add("gridContainer");
		gridContainer.style.border = `${this.borderWidth * 3}px solid ${this.borderColor}`;

		textContainer.appendChild(text);
		gridContainer.appendChild(textContainer);
		target.appendChild(gridContainer);

		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.columns; j++) {
				let cellContainer = document.createElement("div");
				cellContainer.classList.add("cellContainer");
				cellContainer.style.width = `${this.cellSize + this.addition}px`;
				cellContainer.style.height = `${this.cellSize}px`;

				cellContainer.style.top = `${(-this.cellSize / 2) + i * this.cellSize / 2}px`;
				
				if (i % 2 === 0) {
					cellContainer.style.left = `${Math.round(this.cellSize / 4) + j * this.cellSize + j * Math.round(this.cellSize / 2)}px`;
				} else {
					cellContainer.style.left = `${-Math.round(this.cellSize / 2) + j * this.cellSize + j * Math.round(this.cellSize / 2)}px`;
				}

				let straightBox = document.createElement("div");
				straightBox.classList.add("hexStraigh");
				straightBox.style.width = `${this.cellSize / 2}px`;
				straightBox.style.height = `${this.cellSize}px`;
				straightBox.style.left = `${(this.cellSize / 2) - (this.cellSize / 2) / 2}px`;
				straightBox.style.borderTop = `${this.borderWidth}px solid ${this.borderColor}`;
				straightBox.style.borderBottom = `${this.borderWidth}px solid ${this.borderColor}`;

				let tiltedBox1 = document.createElement("div");
				tiltedBox1.classList.add("hexSide1");
				tiltedBox1.style.width = `${this.cellSize / 2}px`;
				tiltedBox1.style.height = `${this.cellSize}px`;
				tiltedBox1.style.left = `${(this.cellSize / 2) / 2}px`;
				tiltedBox1.style.borderTop = `${this.borderWidth}px solid ${this.borderColor}`;
				tiltedBox1.style.borderBottom = `${this.borderWidth}px solid ${this.borderColor}`;

				let tiltedBox2 = document.createElement("div");
				tiltedBox2.classList.add("hexSide2");
				tiltedBox2.style.width = `${this.cellSize / 2}px`;
				tiltedBox2.style.height = `${this.cellSize}px`;
				tiltedBox2.style.left = `${(this.cellSize / 2) / 2}px`;
				tiltedBox2.style.borderTop = `${this.borderWidth}px solid ${this.borderColor}`;
				tiltedBox2.style.borderBottom = `${this.borderWidth}px solid ${this.borderColor}`;

				cellContainer.appendChild(straightBox);
				cellContainer.appendChild(tiltedBox1);
				cellContainer.appendChild(tiltedBox2);

				gridContainer.appendChild(cellContainer);
			}
		}
	}
}

hexGrid.generate(document.querySelector(".target"));

document.querySelector(".target").addEventListener("mouseenter", () => {
	document.querySelector(".text").style.textShadow = "0 0 8px rgba(244, 158, 0, .95)";
})
document.querySelector(".target").addEventListener("mouseleave", () => {
	document.querySelector(".text").style.textShadow = "0 0 6px rgba(244, 158, 0, 1)";
})

window.onresize = () => {
	hexGrid.generate(document.querySelector(".target"));
}

window.onclick = () => {
	console.log(hexGrid.cellContainer)
}