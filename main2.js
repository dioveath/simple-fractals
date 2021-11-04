window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;


  var p0 = {
    x: -width/2 + 280,
    y: -120
  },
  p1 = {
    x: width/2 - 280,
    y: -120
  },
  p3 = {
    x: 0,
    y: 300
  };

  var limit = 5,
      limitInterval = 1;

  //For animation from Keith Peter's
  var a = 0,
      t;

  context.translate(width/2, height/2);
  update();

  function update(){
    context.clearRect(-width/2, -height/2, width, height);
    t = Math.sin(a += 0.02);

    drawFractals(p0, p1, limit);
    drawFractals(p3, p0, limit);
    drawFractals(p1, p3, limit);


    requestAnimationFrame(update);
  }

  function drawFractals(p0, p1, limit){
    var partX = (p1.x - p0.x) / 3,
        partY = (p1.y - p0.y) / 3,
        dist = Math.sqrt(partX * partX + partY * partY),
        unit = dist * t,
        baseAngle = Math.atan2(partY, partX);
        var pA = {
          x: p0.x + partX * t,
          y: p0.y + partY * t
        },
        pC = {
          x: p1.x - partX * t,
          y: p1.y - partY * t
        },
        pB = {
          x: pA.x + Math.cos(baseAngle - Math.PI / 3  * t) * unit,
          y: pA.y + Math.sin(baseAngle - Math.PI / 3 * t) * unit
        };
    if(limit > 0){
      drawFractals(p0, pA, limit - 1);
      drawFractals(pA, pB, limit - 1);
      drawFractals(pB, pC, limit - 1);
      drawFractals(pC, p1, limit - 1);
    } else {
      context.beginPath();
      context.moveTo(p0.x, p0.y);
      context.lineTo(pA.x, pA.y);
      context.lineTo(pB.x, pB.y);
      context.lineTo(pC.x, pC.y);
      context.lineTo(p1.x, p1.y);
      context.stroke();
    }
  }

};
