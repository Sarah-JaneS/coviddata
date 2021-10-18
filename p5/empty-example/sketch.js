let table;


let bubble
function preload() {
  table = loadTable ('coviddatanz.csv', 'csv', 'header');
  bubble = loadImage ('img/bacteriasimple.svg')
}

function setup (){
  createCanvas(800, 400);
  textAlign(CENTER, TOP);
  for (let r=0;r < table.getRowCount(); r++){
    const name = table.getString (r, "Location");
    const cases = table.getNum (r, "Total");
    const x = random(0, width);
    const y = random (0, height);
    const size = map(cases, 0, 1350, 0, 200 )
    ellipse (x, y, size)
    text(name, x , y, size / 2)
  }

// put drawing code here
function draw() {

}

}
