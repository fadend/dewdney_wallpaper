class DewdneyWallpaper {
  constructor(container) {
    this.aInput = container.querySelector("#a");
    this.bInput = container.querySelector("#b");
    this.cInput = container.querySelector("#c");
    this.canvas = container.querySelector("#canvas");
    this.context = this.canvas.getContext("2d");
    const inputs = [this.aInput, this.bInput, this.cInput];
    inputs.forEach((input) =>
      input.addEventListener("change", () => this.draw()),
    );
    inputs.forEach((input) =>
      input.addEventListener("keyup", (e) => {
        if (e.key === "Enter" || e.keyCode === 13) {
          this.draw();
        }
      }),
    );
    this.draw();
  }

  draw() {
    const a = parseFloat(this.aInput.value);
    const b = parseFloat(this.bInput.value);
    const c = parseFloat(this.cInput.value);
    const width = this.canvas.width;
    const height = this.canvas.height;
    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, width, height);
    this.context.fillStyle = "white";
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        const x = a + (c * i) / width;
        const y = b + (c * j) / height;
        if (parseInt(x * x + y * y) % 2 == 0) {
          this.context.fillRect(i, j, 1, 1);
        }
      }
    }
  }
}

new DewdneyWallpaper(document.body);
