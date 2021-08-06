const clearcanvas = document.getElementById("clear")
const rubbing = document.getElementById("erase")
const lighting = document.getElementById("bulb")
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight - 150;
canvas.width = window.innerWidth -40 ;

let painting = false;
let draw_color = 'black';
let draw_width = "2";

function change_color(element)
{
 draw_color = element.style.background;    
}

function startPostion (e)
{
    painting = true;
    draw(e);
}
function finishedPosition (e)
{
    painting = false;
    ctx.beginPath();
    
}
function draw(e)
{
    if (!painting) return;
    ctx.lineWidth= draw_width;
    ctx.lineCap=' round ';
    ctx.lineJoin='round';
    ctx.strokeStyle= draw_color;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
}

//eventlisteners
canvas.addEventListener("mousedown" , startPostion)
canvas.addEventListener("mouseup" , finishedPosition)
canvas.addEventListener("mousemove" , draw)
canvas.addEventListener("mouseout", finishedPosition)
canvas.addEventListener("touchstart", startPostion )
canvas.addEventListener("touchend", finishedPosition)
canvas.addEventListener("touchmove", draw)
clearcanvas.addEventListener("click" , clear)
lighting.addEventListener("click",bulb )

function clear()
{
    ctx.clearRect(0, 0,canvas.width,canvas.height);
}
function bulb()
{
    ctx.fillStyle='black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}