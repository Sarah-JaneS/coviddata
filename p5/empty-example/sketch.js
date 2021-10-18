let table;



function preload() {
  table = loadTable ('covidnz.csv', 'csv', 'header');
  
}

function setup (){

  createCanvas(800, 400);
  background(220);
  textAlign(CENTER, TOP);
  for (let r=0;r < table.getRowCount(); r++){
    const name = table.getString (r, "DHB");
    const cases = table.getNum (r, "TOTAL");
    const x = random(0, width);
    const y = random (0, height);
    const size = map(cases, 0, 293, 0, 200 )
    ellipse (x, y, size)
    text(name, x , y, size / 2)

  }

  //console.log(table);

  ///table = loadTable ('covidnz.csv', 'header');
  //for (let r=0;r < table.getRowCount(); r++){
   // stroke(0, random(255),0)
  //  ellipse (width/2, covidnz.getInt(i, "TOTAL"), covidnz.getInt(r, "TOTAL"));
   // if (covidnz.getInt(i, "TOTAL") ==22){
  //    strokeWeight(8);z

 // for (let c= 0; c < table.getColumnCount(); c++ {
    //print(table.getString(r,c));
  }
  




 // for(int i = 0; ri < covidnz.getRowCount(); i++){
  //  stroke(0, random(255),0)
    //strokeWeight(3);
    //ellipse (width/2, covidnz.getInt(i, "TOTAL"), covidnz.getInt(i, "TOTAL"));
    //  if (covidnz.getInt(i, "TOTAL") ==22){
     //   strokeWeight(8);
     // }
  //}




// put drawing code here
function draw() {
  rect(10, 20, 30, 40);

}


