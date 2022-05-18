var mouseEvent="";
var last_position_of_x,last_position_of_y;


canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

width_of_the_line=1;
colour="black";



canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    colour=document.getElementById("colour").value;
    width_of_the_line=document.getElementById("width_of_the_line").value;
    mouseEvent="mouseDown";

}


canvas.addEventListener("mousemove",mousemove);
function my_mousemove(e){
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;
if(
    mouseEvent=="mousedown"
){
    ctx.beginpath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=width_of_the_line;
    console.log("last position of x and y coordinates=")
    console.log("x="+last_position_of_x+"y="+last_position_of_y);
    ctx.moveto(last_position_of_x,last_position_of_y);


    console.log("Current position of x and y coordinates=")
    console.log("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
    ctx.lineto(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
function clearCanvas(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);   

}



































