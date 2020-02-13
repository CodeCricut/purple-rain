const canvas = document.getElementById("canvas1");
const context = canvas.getContext("2d");

let drops = [];
mouseMagnet = new mouse(MOUSE_RADIUS, true);

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
        mouseMagnet.pull(drops[i]);
        if (drops[i].destroy()) drops.splice(i, 1);
        // console.log(drops.length);
    }
}

function spawnDrops() {
    for (let i = 0; i < MAX_DROPS_PER_LINE; i++) {
        drops.push(randDrop());
    }
}

setup();
draw();
