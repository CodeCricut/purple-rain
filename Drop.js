function Drop(x, y, xspeed, yspeed, width, height) {
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.width = width;
    this.height = height;

    this.fall = () => {
        this.x += this.xspeed;
        this.y += this.yspeed;
    };

    this.show = () => {
        context.fillStyle = "#662c5c";
        context.fillRect(this.x, this.y, this.width, this.height);
    };
}

function randDrop() {
    const x = Math.floor(Math.random() * innerWidth);
    const y = 0;
    const xspeed = 0;
    const yspeed = 10;
    const width = Math.floor(Math.random() * 3);
    const height = Math.floor(Math.random() * 10);
    return new Drop(x, y, xspeed, yspeed, width, height);
}
