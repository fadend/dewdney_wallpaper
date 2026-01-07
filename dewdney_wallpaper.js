class DewdneyWallpaper {
  constructor(container) {
    this.aInput = container.querySelector("#a");
    this.bInput = container.querySelector("#b");
    this.cInput = container.querySelector("#c");
    this.useColorInput = container.querySelector("#use-color");
    this.canvas = container.querySelector("#canvas");
    this.context = this.canvas.getContext("2d");
    const inputs = [this.aInput, this.bInput, this.cInput, this.useColorInput];
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
    const useColor = this.useColorInput.checked;
    const width = this.canvas.width;
    const height = this.canvas.height;
    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, width, height);
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        const x = a + (c * i) / width;
        const y = b + (c * j) / height;
        const m = x * x + y * y;
        let pixelFill = "black";
        if (useColor) {
          const evenBelow = 2 * parseInt(m / 2);
          const diffFromMiddle = Math.abs(m - evenBelow - 1);
          pixelFill = `hsl(${parseInt(360 * diffFromMiddle)} 100 50)`;
        } else {
          if (parseInt(m) % 2 == 0) {
            pixelFill = "white";
          }
        }
        if (pixelFill != "black") {
          this.context.fillStyle = pixelFill;
          this.context.fillRect(i, j, 1, 1);
        }
      }
    }
  }
}

new DewdneyWallpaper(document.body);
