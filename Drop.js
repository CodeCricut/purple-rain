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

    this.destroy = () => {
        return (
            this.x < 0 ||
            this.x > innerWidth ||
            this.y < -MAX_STARTING_HEIGHT ||
            this.y > innerHeight
        );
    };
}

function randDrop() {
    const x = Math.floor(Math.random() * innerWidth);
    const y = Math.floor(-Math.random() * MAX_STARTING_HEIGHT);
    const xspeed = Math.floor(Math.random() * MAX_X_SPEED * 2 - MAX_X_SPEED);
    const yspeed = Math.floor(
        Math.random() * (MAX_Y_SPEED - MIN_Y_SPEED) + MIN_Y_SPEED
    );
    const width = Math.floor(
        Math.random() * (MAX_WIDTH - MIN_WIDTH) + MIN_WIDTH
    );
    const height = Math.floor(
        Math.random() * (MAX_HEIGHT - MIN_HEIGHT) + MIN_HEIGHT
    );
    return new Drop(x, y, xspeed, yspeed, width, height);
}
