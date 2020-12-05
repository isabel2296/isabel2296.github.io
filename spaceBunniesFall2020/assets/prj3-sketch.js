//isabel silva
// main components of the game shows here 
//--- GAME DISPLAY + Scrolling Image Variables -----
var display = { width:1500, height: 1000 }; 
var y1 = 0; 
var y2 = -display.height; 
const scroll_speed = 4; 
let gameCountDown = 30 ;
//====== GAME POINT SYSTEM ======== 
let enemyKill = 50; // player gets 50 points 
let kitSaved  = 25; // player gets 25 points
let kitDies = -100; // player loses 100 points
let starPoint = 10; // player gets 10 points 

//======= HealthSystem =============
let eatCarrot = 3; // player gains 3 health point
let enemyHit = 1; // player loses 1 health points

// ---- GAME SOUNDS ======
let pause_play_sound, laser_sound, explosive_sound, enemyStart_sound, gameBGM; 
// --- GAME IMAGES -------------
let backImg, playerImg, kitImg, bunnyNpcImg, playerHitImg, backGroundImg, enemyImg, enemyHitImg; 
// ----- SHIELD VARIABLES -----------
    //     NOTE: Wave variables and helper function taken from https://p5js.org/examples/math-sine-wave.html 
    //     and modified to fit my liking
let shieldOnOff = false; //field is off when flase else on when true
let xspacing = 8; // Distance between each horizontal location
let w = display.width + 16; // Width of entire wave
let shieldY = display.height -150; 
let dx;  // dx value for incrementing x
let theta = 0.0; // Start angle at 0
let amplitude = 5.0; // Height of wave
let period = 100.0; // How many pixels before the wave repeats
let yvalues; // Using an array to store height values for the wave
//---- Player Info ----- 
var player; 
const player_speed = 15;
const player_speedWithKit = 10; 
const laser_speed = 10  ;  /// player's lasers   
// ---- ENEMY & KIT KIT --------
let num_of_enemies, num_of_kits,numKitSaved ;
var enemies = []; 
var kits = []; 
let getInPosi = false; // if enemies are getting in positon will be true once they are in position it will turn false

// ---- USER OPTIONS VARIABLES -----
let soundOn ;
var soundButton, startGameB; 
//------Game Text --------------
const game_overText = "GAME OVER"; 
const game_win_text = "Congratulations!! You Won!!";
const restartText = "Refresh webpage to restart game."; 
const pause = "PAUSED";

// ------ Run Game Variables ----------------
var setTimer = 5; // 5 seconds 
const g_frame_mod = 24; // Update ever 'mod' frames.
var run_game = false; // if this is true then run game 
var menu_on = true; 
var countDown = false; 
// -------- Start of P5 Functions --------------
function preload(){
    gameBGM = createAudio('assets/sounds/bg_game.wav' );
    if(soundOn){
        gameBGM.play(); 
    }
    //game music will be start playing
}
function setup() 
{
    createCanvas( display.width,display.height );  // Make a P5 canvas.
    // pre game entities set up 
    soundOn = true; 
    // Load Game Images
    backImg = loadImage('assets/images/space_back.jpg');
    playerImg = loadImage('assets/images/Player.png');
    kitImg = loadImage('assets/images/kit_.jpg');
    playerHitImg = loadImage('assets/images/playerPulse.png');
    backGroundImg = loadImage('assets/images/bgpic_1.jpg');
    enemyImg = loadImage('assets/images/boss.png');
    enemyHitImg = loadImage('assets/images/boss_hit.png');
    // Load Game Sound 
    laser_sound = loadSound('assets/sounds/weapon_laser.mp3');
    explosive_sound = loadSound('assets/sounds/explosion.mp3');
    // Sound Volume
    gameBGM.volume(0.2);
    //pause_play_sound = loadSound();
    // Button 
    startGameB = select('#start'); 
    soundButton = select('#sound');
    startGameB.position(850,650);
    startGameB.mousePressed(set_game);
    soundButton.mousePressed(soundOnOff_Alpha);
}


function draw()  // P5 Frame Re-draw Fcn, Called for Every Frame.
{
    bgm_soundOnOff(); 
    if(menu_on){
        image(backGroundImg, 0, 0, display.width, display.height);
    }
    if(getInPosi){
        background_scroll();
        displaySetUpCountDown(); 
        noStroke() ;
        fill(155);
        ellipse(width-50,50,75,75);
        draw_text(gameCountDown,width-80,66,50);
        if(aliensInPosition()){
            if(setTimer == 0){
                if (frameCount % 60 == 0 ) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
                    run_game = true; 
                    getInPosi = false; 
                  }
            }
        }
        enemies.forEach(function(bot){
            bot.movInPosi(); 
            if(bot.jailer){bot.kit.taken(bot); }
        });
    }
    if(run_game) runGame();
    
}

function keyPressed( )
{   console.log('key pressed');
    if(getInPosi == false){
            if(key == 'p'  )
                 { run_game = !run_game;
                   draw_text(pause,width/2-100,height/2,50);
                   if(soundOn){
                       soundOn = false;
                     }else {soundOn = !soundOn;}}
    if(key == ' ' && runGame)  
             { player.lasers.push(new Laser(player.x+39,player.y, laser_speed)); 
                if(soundOn) {laser_sound.play();}}}
}
function soundOnOff_Alpha(){
    soundOn = !soundOn; 
}
function bgm_soundOnOff(){
    if(soundOn){
        gameBGM.play();
    }else {
        gameBGM.stop(); 
    }
}
function mousePressed(){
}

// --------------HELPER FUNCTIONS --------------
// Sets ups game vairables, able to call this when reseting
function set_game(){
  startGameB.remove(); 
  menu_on = false;
  getInPosi = true; 
  // initialize Player (class Player in utilities.js)
  player = new Player(width/2,height-80-25,player_speed, playerImg); 
  // initialize enemy and kit values 
  num_of_enemies = 15; 
  numKitSaved = 0; 
  num_of_kits = Math.ceil(num_of_enemies/3); 
  let temp = num_of_kits;  
  // -- create the enemies -- 
  for(let i = 0; i < num_of_enemies; i ++ ){
    enemies.push(new Enemy(width/2,0,4));
    if(temp != 0){
        enemies[i].jailer = true;       
        temp--;
        enemies[i].kit = new Kit(kitImg);
    } 
  }
  //shield set up
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
  setTimer = 5;

}
// updates the game display
function runGame() 
{   
    background_scroll(); 
    displayScore(); 
    displayKitSaved(); 
    displayGameCountdown();
    // --- checks if player has kit then kit follows ----- 
    if(player.hasKit){
        player.kit.taken(player);
    }
    //---- handles enemy and kit interaction
    enemies.forEach(function(bot){ 
        if(bot.jailer){
            bot.moveLeftRight();
            bot.kit.taken(bot);}
        else{
         //if(player.hasKit){
            bot.track(player);
           // }else{
             //   bot.move(); 
            }

        if(bot.collide(player)){ // enemy hits player
            player.health -= enemyHit;
            image(enemyHitImg,bot.x,bot.y,80,80);
            player.hitPulse();
        }
    });
    
    laserHandling(); 
    player.shooting(); 
    player.move(); 
        // display's shield when player has kit 
    if(shieldOnOff){
        calcWave();
        renderWave();}
    //DONE: win handling all enemies die, player wins 
    if(enemies.length == 0 || numKitSaved == num_of_kits){
        game_win(); 
    }
    //DONE:  game over handling player health reaches 0, player loses
    if(player.health <= 0 || gameCountDown ==0){
        game_over();
    } 
        // ----kit handling -----
    if(kits.length != 0){
        kits.forEach(function(k){
            k.drop();
            if(player.collide(k)){
                if(player.hasKit == false){
                    player.hasKit =true; 
                    player.speed = player_speedWithKit;
                    player.kit = k; 
                    shieldOnOff = true; 
                    kits.splice(k,1);    
                }
            }
            if(k.y > height - 80){
                kits.splice(k,1);
                displayPointsRec("-",kitDies);
            } 
        });
    } 
    //--- player with kit handling---
    if(player.hasKit){
        if(player.kit.y > shieldY){
            player.hasKit = false; 
            player.speed = player_speed;
            numKitSaved++;
            shieldOnOff = false; 
            displayPointsRec("+", kitSaved);
        }
    }
    
}
//  Display game countdown 
function displayGameCountdown(){
    noStroke() ;
    fill(155);
    ellipse(width-50,50,75,75);
    if(frameCount % 60 == 0){
        gameCountDown--; 
    }
    draw_text(gameCountDown,width-65,65,50);

    }
//DONE: Displays and updates score on screen
function displayScore(){
    let scoreText = "score: " + player.score; 
    draw_text(scoreText, 0,height,60);
}
//WORK ON TIMING Display points ernered
function displayPointsRec(sign,points){
    player.score += points;  
    let te = sign + points; 
    draw_text(te, player.x+80, player.y+40, 40); 
}
//DONE: Display kit saved 
function displayKitSaved(){
    let kitSavedText = numKitSaved + "/" + num_of_kits;
    draw_text(kitSavedText, width-180,height,60);
    image(kitImg,width-100,height-80,80,80);
}
//DONE: Displays a countdown on screen for start
function displaySetUpCountDown(){
    noStroke() ;
    fill(155);
    if(setTimer == 0){
        rect(width/2-30,height/2-100,220,120);
        draw_text("start",width/2-20,height/2,100);
    }else{
    ellipse(width/2+30,height/2-40,120,120);
    draw_text(setTimer,width/2,height/2,100);}
  if (frameCount % 60 == 0 && setTimer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    setTimer --;
  }
}
//DONE: returns true if all aliens get into intial game position 
function aliensInPosition(){
    for(let i = 0; i < enemies.length; i++){
        if(enemies[i].positionSet == false){
            return false; 
        } } return true; }

//WORK ON THISdraws the menu screen
function draw_menu() {
    background(0);
    draw_text("TBD MENU PAGE",width/2-200,height/2,50);
}
//DONE:WAVE function provided by Daniel Shiffman https://p5js.org/examples/math-sine-wave.html
function calcWave() {
    // Increment theta (try different values for
    // 'angular velocity' here)
    theta += 0.02;
    // For every x value, calculate a y value with sine function
    let x = theta;
    for (let i = 0; i < yvalues.length; i++) {
      yvalues[i] = sin(x) * amplitude;
      x += dx;
    }
  }
//DONE:WAVE function provided by Daniel Shiffman https://p5js.org/examples/math-sine-wave.html
function renderWave() {
    noStroke();
    fill(255);
    //yvalues.sort(function(a,b){return a-b});
    for (let x = 0; x < yvalues.length; x++) {
        ellipse(x * xspacing, height-155 + yvalues[x], 8, 8);
      }
  }
  
//DONE: handles when laser collides with objects
function laserHandling(){
    let i= 0; 
    player.lasers.forEach(function(laser){
         for(let e = 0 ; e < enemies.length; e++){
            if(enemies[e].collide(laser)){
                if(enemies[e].jailer){
                    enemies[e].hasKit = false; 
                    kits.push(enemies[e].kit);
                }
                enemies.splice(e,1);
                player.lasers.splice(i,1);
                i = i - 1; 
                displayPointsRec("+", enemyKill);
                break; 
            }
        }
    i++});  
}

//DONE: gives the background image the illusion of scrolling downward  - provided by p5.js
function background_scroll(){
    image(backImg, 0, y1, display.width, display.height);
    image(backImg, 0, y2, display.width, display.height);
    y1 += scroll_speed; 
    y2 += scroll_speed; 
    if(y1 == height){
        y1 = -height; 
    } 
    if(y2 == height){
        y2 = -height; 
    }
}



//ADD RESTART/MENU option:  display game over screen when player dies or looses
function game_over(){
    draw_text(game_overText,width/3+100, height/2, 50)
    draw_text(restartText, width/3 , height/2 + 40,35);
    run_game = false;
}
  
//ADD CONTINUE/MENU option: display game victory on screen win player wins
 function game_win(){
      draw_text(game_win_text,width/3-50, height/2, 50)
      draw_text(restartText, width/3 , height/2 + 40,35);
      run_game = false;
    }

//DONE: Draws Text on Screen 
function draw_text(text_,x,y,size_){
    noStroke(); 
    fill(255,255,0);
    textSize(size_); 
    text(text_,x,y); 
}