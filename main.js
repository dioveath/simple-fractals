window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;

  var p0 = {
    x: 0,
    y: -300
  };
  var p1 = {
    x: -300,
    y: 300
  };
  var p2 = {
    x: 300,
    y: 300
  };

  context.translate(width/2, height/2);

  var previousTime = Date.now();

  sierpinskiTriangle(p0, p1, p2, 5);

  console.log(Date.now() - previousTime);

  function sierpinskiTriangle(p0, p1, p2, limit){
    if(limit > 0){
      var pA = {
        x: p0.x + (p1.x - p0.x) / 2,
        y: p0.y + (p1.y - p0.y) / 2
      },
      pB = {
        x: p1.x + (p2.x - p1.x) / 2,
        y: p1.y + (p2.y - p1.y) / 2
      },
      pC = {
        x: p2.x + (p0.x - p2.x) / 2,
        y: p2.y + (p0.y - p2.y) / 2
      }
      sierpinskiTriangle(p0, pA, pC, limit - 1);
      sierpinskiTriangle(pA, p1, pB, limit - 1);
      sierpinskiTriangle(pB, p2, pC, limit - 1);
    } else {
      drawTriangle(p0, p1, p2);
    }
  }

  function drawTriangle(p0, p1, p2){
    context.beginPath();
    context.moveTo(p0.x, p0.y);
    context.lineTo(p1.x, p1.y);
    context.lineTo(p2.x, p2.y);
    context.lineTo(p0.x, p0.y);
    context.stroke();
  }

};
