
class Element{
    constructor(x,y,speed,sz){
        this.x = x; 
        this.y = y; 
        this.speed = speed;
        this.sz = sz;  
        this.hasKit = false; 
        this.kit = new Object();
        this.health = 0; 
        this.health_y = 0; 
        this.max_health = 0; 
    }
    getDistance(element){ 
        let dx = this.x - element.x; 
        let dy = this.y - element.y; 
        return sqrt(dx*dx + dy*dy);
    }
    collide(element){
        let distance = this.getDistance(element);
        if (distance <= this.sz){
            return true;
        }
        return false; 
    }
    getInPosition(x,y){
        if ((this.x -x) <= (this.y-y)){
            if (this.x <= x){
                this.x += this.speed; 
            } else {
                this.y -= this.speed; 
            }
        }else{
            if(this.y <= y){
                this.y += this.speed; 
            }else if(this.y > y){
                this.x -= this.speed; 
            }
        }
    }
    inPosition(){
        return (this.x >= this.start_poX) && (this.y >= this.start_poY); 
    }
    //DONE: draws the health bar beneath the player changes from yellow to red when health is very low
    healthBar(){
        stroke("grey") ;
        fill(255,255,255);
        rect(this.x-10,this.health_y,100,10); 
        if(this.health > 50){
            fill(0,255,0);
            rect(this.x-10,this.health_y,this.health,10); }
        else if( this.health <= 50 && this.health >=30 ){
            fill(255,255,0);
            rect(this.x-10,this.health_y,this.health,10);
        }else{
            fill(255,0,0);
            rect(this.x-10,this.health_y,this.health,10);
        }
    }
}
class Player extends Element{
    constructor(x,y,speed, image){
        super(x,y,speed,80);
        this.image = image; 
        this.health = PLAYER_HEALTH_INIT; 
        this.score= 0; 
        this.lasers = []; 
        this.hitCount = 1; 

    }
    //DONE: moves the player based on key input
    move(){
        if(keyIsDown(LEFT_ARROW) && this.x >= 0){
            this.x -= this.speed;}
        if(keyIsDown(RIGHT_ARROW) && this.x <= width-80){
            this.x+= this.speed;}
         if(keyIsDown(DOWN_ARROW) && this.y <= height-80-35){
            this.y+= this.speed;}
         if(keyIsDown(UP_ARROW) && this.y >=0){
            this.y-=this.speed;
          }
        this.health_y = this.y+90;
        image(this.image,this.x,this.y,80,80);
        this.healthBar();
    }
    hitPulse(){
        image(playerHitImg, this.x, this.y, 80,80);
        //explosive_sound.play(); 
    }
    //DONE: handles player shooting, if lasers go off screen they are taken off the list of lasers
    shooting(){
        if(this.lasers.length != 0){
            for(let i = 0 ; i < this.lasers.length; i ++ )
            { 
                this.lasers[i].draw(); 
                this.lasers[i].move_up(); 
                if ( this.lasers[i].y <= 0) 
                    this.lasers.splice(i,1);
            }}
        }
    
}

class Laser extends Element{
    constructor (x,y, speed,){
        super(x,y,speed,10);
        this.c = color(225,0,0); 
    }
    draw(){
        fill(this.c);
        noStroke(); 
        rect(this.x,this.y,5,10);}
      
    move_up(){
        this.y -= this.speed; 
    }
} 
class Kit extends Element{
    constructor(img){
        super(0,0,0,20);
        this.caputered = true;
        this.image = img; 
    }
    taken(el){
        let angle_ = atan2(el.x,el.y);
        this.speed = el.speed; 
        this.x = el.x - cos(angle_) * 20; 
        this.y = el.y - sin(angle_) * 20; 
        image(this.image,this.x-80,this.y,80,80);
    }
    drop(){
        this.y += this.speed; 
        image(this.image,this.x,this.y,80,80);

    }
    
}
class Carrot extends Element{
    constructor(x,y){
        super(x,y,5,100);
    }
    move(){
        this.y += this.speed; 
        image(carrotImg,this.x,this.y,80,80);

    }
}
class Enemy extends Element{
    constructor(x,y,speed){
        super(x,y,speed, 40);
        this.positionSet = false;
        this.c = color(Math.floor((Math.random()*255)+1)
                    ,Math.floor((Math.random()*255)+0)
                    ,Math.floor((Math.random()*255)+50)); 
        this.speed = speed; 
        this.jailer = false; //true if bot is tracker else its a carrier 
        this.dx = speed; 
        this.dy = speed; 
        this.move_counter = 0; 
        this.follow_dis = Math.floor((Math.random()*500)+150);
        this.start_poY = Math.floor(Math.random()*(height-400)+this.sz); 
        this.start_poX = Math.floor(Math.random()*(width-80)+this.sz); 
        if(this.x > this.start_poX) this.x = 0; 

    }
    draw(){
        noStroke();   
        fill(this.c);
        rect(this.x+5,this.y+15,this.sz,(this.sz/2));
        ellipse(this.x+25,this.y+15,this.sz,this.sz);
        fill("white");
        ellipse(this.x+17,this.y+10,this.sz/4,this.sz/4);
        ellipse(this.x+31,this.y+10,this.sz/4,this.sz/4); 
        fill("black"); 
        ellipse(this.x+31,this.y+10,this.sz/5,this.sz/5);
        ellipse(this.x+17,this.y+10,this.sz/5,this.sz/5);
        //image(enemyImg,this.x,this.y,95,100);

    }
    move(){ 
        // once in position move left and right
        let minHeight ; 
        if(shieldOnOff){
            minHeight = shieldY; 
        }else {
            minHeight = height-this.sz;
        }
        if(this.y > minHeight && shieldOnOff   ){
            this.y = this.start_poY; 
        }
        if(this.x >= width - this.sz || this.x <=0){
            this.dx = -this.dx; }
        this.x += this.dx; 
        if(this. y >= minHeight - this.sz-16 || this.y <= this.sz){
            this.dy = -this.dy; 
        }this.y += this.dy; 
        this.draw(); 
    }
    moveLeftRight(){
        if(this.x >= width - this.sz || this.x <=80){
            this.dx = -this.dx; }
        this.x += this.dx; 
        this.draw();

    }
    movInPosi(){
        if(this.positionSet == false){
            if(this.inPosition() == false){
                this.getInPosition(this.start_poX,this.start_poY);
       }  else{this.positionSet = true; }
       }  
       this.draw();
    }
    
    //Track the pl ayer  NEED to finish; 
    track(element){
        let dist = this.getDistance(element); 
        if(dist < this.follow_dis){
            
                let dx_ = element.x - this.x; 
                let dy_ = element.y - this.y; 
                dx_ = dx_/dist; 
                dy_ = dy_/dist; 
                this.x += dx_ * this.speed; 
                this.y += dy_ * this.speed; }
        else{
                this.move(); 
            }
            this.draw(); 
    }
}
class Boss extends Element{
    constructor(x,y,speed){
        super(x,y,speed,100);
        this.health = BOSS_MAX_HEALTH; 
        this.health_y = this.y+150; 
        this.isHit = false; 
        this.dx = 3; 
        this.dy = 3; 
    }
    move(el){
        this.health_y = this.y+150; 
        let dis = this.getDistance(el);
        let dist = 150; 
        if(dis<dist){
            let dx_ = el.x - this.x; 
            let dy_ = el.y - this.y; 
            dx_ = dx_/dist; 
            dy_ = dy_/dist; 
            this.x += dx_ * this.speed; 
            this.y += dy_ * this.speed;
            image(bossImg,this.x,this.y,100,150);
        }else{
            let minHeight ; 
            if(shieldOnOff){
                minHeight = shieldY; 
            }else {
                minHeight = height-this.sz;
            }
            if(this.y > minHeight && shieldOnOff   ){
                this.y = this.start_poY; 
            }
            if(this.x >= width - this.sz || this.x <=0){
                this.dx = -this.dx; }
            this.x += this.dx; 
            if(this. y >= minHeight - this.sz-16 || this.y <= this.sz){
                this.dy = -this.dy; 
            }this.y += this.dy; 
        }
        if(this.isHit){
            image(bossHitImg,this.x,this.y,100,150);
        }else{

        image(bossImg,this.x,this.y,100,150);}

        this.healthBar(); 
    }

}



