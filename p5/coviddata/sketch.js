
//Loads Map, Data and Bubble
function preload() {
  table = loadTable ('coviddatanz.csv', 'csv', 'header');
  //bubble = loadImage ('img/bacteria2.svg')
  nz = loadImage('img/map.svg');
}


//NEW CASES
function today (){
  for (let r=0;r < table.getRowCount(); r++){
    const name = table.getString (r, "Location");
    const actcases = table.getNum (r, "New");
    const x = table.getNum (r, "X");
    const y = table.getNum (r, "Y");
    const size = map(actcases, 0, 1350, 0, 300)
    stroke('white')
    fill(244,46,4,80)
    ellipse (x - size/2 , y - size/2, size, size)
//Button to reset sketch sends back to setup
    button = createButton('New cases');
    button.position(100, 230,);
    button.size(100, 70);
    button.mousePressed(setup); 
  }
}

//CURRENT ACTIVE CASES
function act(){
  for (let r=0;r < table.getRowCount(); r++){
    const name = table.getString (r, "Location");
    const actcases = table.getNum (r, "Active");
    const x = table.getNum (r, "X");
    const y = table.getNum (r, "Y");
    const size = map(actcases, 0, 1350, 0, 300)
    stroke('white')
    fill(255,198,40,80)
    ellipse (x - size/2 , y - size/2, size, size)
//Button to reset sketch sends back to setup
    button = createButton('Active cases');
    button.position(100, 330);
    button.size(100, 70);
    button.mousePressed(setup);
      
  }
}

//TOTAL CASES
function total() {
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
//Button to reset sketch sends back to setup
    button = createButton('Total cases');
    button.position(100, 430);
    button.size(100, 70);
    button.mousePressed(setup);
  }  
}

function setup (){
  createCanvas(509, 582);
  textAlign(CENTER, TOP);
    let col= color(244, 46, 4);
    button = createButton('New cases');
    button.style('background-color', col);
    button.position(100, 230);
    button.size(100, 70);
    button.mousePressed(today);
    
    let col2= color(255, 198, 40);
    button = createButton('Active cases');
    button.style('background-color', col2);
    button.position(100, 330);
    button.size(100, 70);
    button.mousePressed(act);
    
    let col3= color(13, 199, 32);
    button = createButton('Total cases');
    button.style('background-color', col3);
    button.position(100, 430);
    button.size(100, 70);
    button.mousePressed(total);
    image(nz, 0, 0, 509, 582);
  }

// Done in setup
function draw() {

}

