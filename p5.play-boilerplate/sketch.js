function setup() {
  createCanvas(400,400);
  d = new raindrop(90);
  d2 = new raindrop(210);
  d3 = new raindrop(80);
  d4 = new raindrop (230);
  d5 = new raindrop(67);
  d6= new raindrop(379);
  d7 = new raindrop(236);
  d8 = new raindrop(43);
  d9 = new raindrop(83);
  d10 = new raindrop(259);

}

function draw(){
  background("black");  
    d.show();
    d.fall();
    d2.fall();
    d2.show();
    d3.show();
    d3.fall();
    d4.show();
    d4.fall();
    d5.show();
    d5.fall();
    d6.show();
    d6.fall();
    d7.show();
    d7.fall();
    d8.show();
    d8.fall();
    d9.show();
    d9.fall();
    d10.show();
    d10.fall();
  
}