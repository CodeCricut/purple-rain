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
