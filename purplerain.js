const canvas = document.getElementById("canvas1");
const context = canvas.getContext("2d");

// Run once at the beginning of the program
function setup() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}

// run every frame
function draw() {
    requestAnimationFrame(draw);
}

setup();
draw();
