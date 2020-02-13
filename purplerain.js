const canvas = document.getElementById("canvas1");
const context = canvas.getContext("2d");

// Run once at the beginning of the program
function setup() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}

let drop = new Drop(20, 30, 2, 1, 10, 20);

// run every frame
function draw() {
    requestAnimationFrame(draw);
    context.clearRect(0, 0, innerWidth, innerHeight);
    drop.show();
    drop.fall();
}

setup();
draw();
