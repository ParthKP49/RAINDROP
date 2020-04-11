class raindrop {
     constructor(x){
       this.x = x;
       this.y =random(-200,-100) ;
       this.width = 5;
       this.height = random(10,20);
       this.velocityY = random(+3, +5);
     }

     fall(){
      this.y = this.y + this.velocityY;

      if(this.y > height){
       this.y = random(-200,-100);
      }
     }
     
    
    show(){
      stroke(255);
      strokeWeight(2);
      rect(this.x ,this.y,this.width,this.height);
    }
}