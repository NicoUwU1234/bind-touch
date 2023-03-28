var last_position_x, last_position_y;
color="black";
ancho_linea = 2;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var ancho = screen.width;
nuevo_ancho = screen.width - 70;
nuevo_largo = screen.height - 200
if(ancho <992){
    document.getElementById("myCanvas").width = nuevo_ancho;
    document.getElementById("myCanvas").height = nuevo_largo;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    last_position_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    current_position_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = ancho_linea;
    ctx.moveTo(last_position_x,last_position_y);
    ctx.lineTo(current_position_x,current_position_y);
    ctx.stroke();
    last_position_x = current_position_x;
    last_position_y = current_position_y;
}
