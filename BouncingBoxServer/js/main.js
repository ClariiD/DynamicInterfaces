var box = document.getElementById("redbox");

var x = 0;
var y = 0;
var dx = 3;
var dy = 3;

function update() {
x+=dx;
y+=dy;

    
if (x > 80 || x < 0) {
         dx *= -1;   
    }
    if (y > 80 || y < 0) {
         dy *= -1;   
    }
    
box.style.marginLeft = x + "px";
box.style.marginTop = y + "px";
}

setInterval(update,1000/30); 