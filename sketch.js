var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;


function setup() {
  createCanvas(500, 500);  
   
  btn_red = createButton("Red");
  btn_red.position(100, 200);
  btn_red.mousePressed(red_bgd);
  
  btn_red = createButton("Green");
  btn_red.position(400, 200);
  btn_red.mousePressed(green_bgd);
  
  btn_red = createButton("Blue");
  btn_red.position(250, 370);
  btn_red.mousePressed(blue_bgd);
}

function draw() {
  background(r,g,b);
}

function red_bgd(){
  r = 255
  b = 0
  g = 0
}
function green_bgd(){
  r = 0
  b = 0
  g = 255
}
function blue_bgd(){
  r = 0
  b = 255
  g = 0
}
