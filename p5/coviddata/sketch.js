function preload() {
  table = loadTable ('coviddatanz.csv', 'csv', 'header');
  bubble = loadImage ('img/bacteriasimple.svg')
  nz = loadImage('img/map.png');
}

function drawCircle() {
  fill()
  ellipse(200, 200, 200)
}


//TOTAL CASES
function setup (){
  createCanvas(800, 600);

  textAlign(CENTER, TOP);
  image(nz, 100, 100, 500,300);
  noFill();

  for (let r=0;r < table.getRowCount(); r++){
    const name = table.getString (r, "Location");
    const cases = table.getNum (r, "Total");
    const x = table.getNum (r, "X");
    const y = table.getNum (r, "Y");
    const size = map(cases, 0, 1350, 0, 100)
    //ellipse (x, y, size)
    image(bubble, x, y, size, size)
    text(name, x , y, size / 2)
  }

  button = createButton('draw a circle');
  button.position(100, 100);
  button.mousePressed(drawCircle);
  /*
    for (let r=0;r < table.getRowCount(); r++){
      const name = table.getString (r, "Location");
      const actcases = table.getNum (r, "Active");
      const x = random (0, width);
      const y = random (0, height);
      const size = map(actcases, 0, 1350, 0, 300 )
      fill(255,204,0)
      ellipse (x, y, size)
      text(name, x , y, size / 2)
        
    }
    */
  }

// put drawing code here
function draw() {
  //image(nz, 100, 100, 500,300)
  //image(bubble, 400, 200, 50, 50)
}


