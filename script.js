const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let painting = false;
let erase = false;

function startPostion (e)
{
    painting = true;
    draw(e);
}
function finishedPosition ()
{
    painting = false;
    ctx.beginPath();
    
}
function draw(e)
{
    if (!painting) return;
    ctx.lineWidth=8;
    ctx.lineCap=' round ';
    ctx.strokeStyle='white';
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
}

function clear(e)
{
    ctx.clearRect(0, 0,canvas.width,canvas.height);
    
}

//eventlisteners
canvas.addEventListener("mousedown" , startPostion)
canvas.addEventListener("mouseup" , finishedPosition)
canvas.addEventListener("mousemove" , draw)
canvas.addEventListener("mouseenter" , clear)

