//Loads Map, Data and Bubble
function preload() {
  table = loadTable ('coviddatanz.csv', 'csv', 'header');
  bubble = loadImage ('img/bacteria2.svg')
  nz = loadImage('img/map3.png');
}


function total() {
  noLoop();
  for (let r=0;r < table.getRowCount(); r++){
    const name = table.getString (r, "Location");
    const cases = table.getNum (r, "Total");
    const x = table.getNum (r, "X");
    const y = table.getNum (r, "Y");
    const size = map(cases, 0, 1350, 0, 100)
    //ellipse (x, y, size)
    stroke('white')
    fill(13,199,32,80)
    ellipse(x - size/2 , y - size/2, size, size)
    button = createButton('click me');
    button.position(100, 100);
    button.size(100,100);
    button.mousePressed(setup);
  }  
}

//TOTAL CASES
function setup (){
  createCanvas(800, 600);
  textAlign(CENTER, TOP);
  image(nz, 0, 0, 509, 582);
  noFill();


    button = createButton('click me');
    button.position(100, 100);
    button.size(100,100);
    button.mousePressed(total);
    
    
    //image(bubble, x - size/2 , y - size/2, size, size)
    //text(name, x , y, size / 2)
  

    /*for (let r=0;r < table.getRowCount(); r++){
      const name = table.getString (r, "Location");
      const actcases = table.getNum (r, "Active");
      const x = table.getNum (r, "X");
      const y = table.getNum (r, "Y");
      const size = map(actcases, 0, 1350, 0, 300 )
      fill(255,204,0,80)
      ellipse (x - size/2 , y - size/2, size, size)
        
    }*/
  }

// put drawing code here
function draw() {
  //image(nz, 100, 100, 500,300)
  //image(bubble, 400, 200, 50, 50)
}


