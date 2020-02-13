function mouse(mouseRadius, shouldPull = true) {
    this.x = null;
    this.y = null;
    this.mouseRadius = mouseRadius;
    this.shouldPull = shouldPull;

    this.pull = drop => {
        // drop within mouse magnet
        if (
            this.x &&
            this.y &&
            Math.sqrt((this.x - drop.x) ** 2 + (this.y - drop.y) ** 2) <
                this.mouseRadius
        ) {
            const xVector =
                ((this.x - drop.x) / Math.abs(this.x - drop.x)) *
                MOUSE_STRENGTH;
            drop.xspeed += (this.shouldPull ? xVector : -xVector) / 500;
            drop.yspeed -= MOUSE_STRENGTH / 1000;
        }
    };
}

window.addEventListener("mousemove", updateMousePos);
function updateMousePos(event) {
    mouseMagnet.x = event.x;
    mouseMagnet.y = event.y;
}

window.addEventListener("mouseleave", resetMousePos);
function resetMousePos(event) {
    mouseMagnet.x = null;
    mouseMagnet.y = null;
}

window.addEventListener("mouseup", toggleMagnetMode);
function toggleMagnetMode() {
    console.log("mousedown");
    mouseMagnet.shouldPull = !mouseMagnet.shouldPull;
}
