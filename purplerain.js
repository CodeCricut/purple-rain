const canvas = document.getElementById("canvas1");
const context = canvas.getContext("2d");
let drops = [];

// Run once at the beginning of the program
function setup() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}

// run every frame
function draw() {
    requestAnimationFrame(draw);
    context.clearRect(0, 0, innerWidth, innerHeight);

    spawnDrops();

    for (let i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].fall();
    }
}

function spawnDrops() {
    for (let i = 0; i < 100; i++) {
        drops.push(randDrop());
    }
}

setup();
draw();
