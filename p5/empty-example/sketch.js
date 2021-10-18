let table;

function setup (){
  createCanvas(1000,1000);
  background(0);
  nofill();
  table = loadTable ('covidnz.csv', 'header');
  for (let r=0;r < table.getRowCount(); r++){
    stroke(0, random(255),0)
    ellipse (width/2, covidnz.getInt(i, "TOTAL"), covidnz.getInt(r, "TOTAL"));
    if (covidnz.getInt(i, "TOTAL") ==22){
      strokeWeight(8);
  }
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

}
}

