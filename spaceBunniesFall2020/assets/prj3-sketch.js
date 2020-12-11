//isabel silva
// main components of the game shows here 
//--- GAME DISPLAY + Scrolling Image Variables -----
var display = { width:1300, height: 700 }; 
var y1 = 0; 
var y2 = -display.height; 
const scroll_speed = 4; 
let gameCountDown;

//====== GAME POINT SYSTEM ======== 
let enemyKill = 50; // player gets 50 points 
let kitSaved  = 75; // player gets 25 points
let kitDies = -100; // player loses 100 points
let starPoint = 10; // player gets 10 points 
let bossHitLoss = -10; 
//======= HealthSystem =============
let eatCarrot = 3; // player gains 3 health point
let enemyHit = 1; // player loses 1 health points
const BOSS_MAX_HEALTH = 100; // boss starting health
const PLAYER_HEALTH_INIT = 100; 

// ---- GAME SOUNDS ======
let pause_play_sound, laser_sound, explosive_sound, enemyStart_sound, gameBGM; 
// --- GAME IMAGES -------------
let backImg, playerImg, kitImg, bunnyNpcImg, playerHitImg, backGroundImg, enemyImg, enemyHitImg, bossImg, bossHitImg; 

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
//---- Player AVATAR Info ----- 
var player; 
const player_speed = 15;
const player_speedWithKit = 10; 
const laser_speed = 10  ;  /// player's lasers   

// ---- ENEMY & BOSS & KIT Info --------
let num_of_enemies, num_of_kits,numKitSaved, num_of_kitsLeft,bossFight=false;
var enemies, kits, obs;  //obstacles
let getInPosi = false; // if enemies are getting in positon will be true once they are in position it will turn false
var lBoss; 
// ---- USER OPTIONS VARIABLES -----
let soundOn = true;
let userSoundChoice = true; 
let isPaused = false; 
var soundButton, startGameB, restartB, resumeB; // buttons

//------Game Text NEED TO CHANGE--------------
const game_overText = "GAME OVER"; 
const game_win_text = "Congratulations!! You Won!!";
const restartText = "Refresh webpage to restart game."; 
const pause = "PAUSED";

// ------ Run Game Variables ----------------
var setTimer = 5; // 5 seconds 
const g_frame_mod = 24; // Update ever 'mod' frames.
var run_game = false; // if this is true then run game 
var menu_on = true; // if this is true then menu is displayed
// var countDown = false; DELETE THIS

// -------- Start of P5 Functions --------------
function preload(){
    gameBGM = createAudio('assets/sounds/bg_game.wav' );
    if(soundOn){
        gameBGM.play(); 
    }
    //game music will be start playing
    //BUTTONS 
    // Button 
    startGameB = select('#start'); 
    soundButton = select('#sound');
    restartB = select('#restart');
    resumeB = select('#continue');
    restartB.position(display.width/2-200,display.height/2+100);
    resumeB.position(restartB.x, restartB.y+200);
    startGameB.position(display.width/2,display.height/2+100);
    restartB.hide(); 
    resumeB.hide(); 
}
function setup() 
{

    createCanvas( display.width,display.height );  // Make a P5 canvas.
    // Load Game Images
    backImg = loadImage('assets/images/space_back.jpg');
    playerImg = loadImage('assets/images/Player.png');
    kitImg = loadImage('assets/images/kit_.jpg');
    playerHitImg = loadImage('assets/images/playerPulse.png');
    backGroundImg = loadImage('assets/images/bgpic_1.jpg');
    enemyImg = loadImage('assets/images/boss.png');
    enemyHitImg = loadImage('assets/images/boss_hit.png');
    bossImg = loadImage('assets/images/LBoss.png');
    bossHitImg = loadImage('assets/images/LBossHit.png');
    // Load Game Sound 
    laser_sound = loadSound('assets/sounds/weapon_laser.mp3');
    explosive_sound = loadSound('assets/sounds/explosion.mp3');
    // Sound Volume
    gameBGM.volume(0.4);
    //pause_play_sound = loadSound();
    restartB.mousePressed(set_game);
    startGameB.mousePressed(set_game);
    soundButton.mousePressed(soundOnOff_Alpha);
    resumeB.mousePressed(resumeGame);
}

// Sets ups game vairables, able to call this when reseting
function set_game(){
    // game start ups
    gameCountDown = 30; 
    soundOn = userSoundChoice; 
    //create empty lists
    enemies = [];
    kits =[];
    obs=[]; 
    bossFight = false; 
    
    //hide buttons
    restartB.hide(); 
    resumeB.hide(); 
    startGameB.hide(); 
    menu_on = false;
    getInPosi = true; 
    // initialize Player (class Player in utilities.js)
    player = new Player(width/2,height-80-25,player_speed, playerImg); 
    // intialize boss
    lBoss = new Boss(100, height/2, player_speed);
    // initialize enemy and kit values 
    num_of_enemies = 8; 
    numKitSaved = 0; 
    num_of_kits = Math.ceil(num_of_enemies/3); 
    let temp = num_of_kits;  
    num_of_kitsLeft = num_of_kits;
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

function draw()  // P5 Frame Re-draw Fcn, Called for Every Frame.
{
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
                if (frameCount % 60 == 0 ) { 
            // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
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
    

    bgm_soundOnOff(); 
    
}

function keyPressed( )
{   
    if(getInPosi == false && menu_on==false){
            if(key == 'p'  )
                {
                isPaused = !isPaused;  
                run_game = !run_game;
                draw_text(pause,width/2-100,200,50);
                if(isPaused){
                    if(soundOn){soundOn = false; }
                    else if(soundOn == false){ soundOn = false;}
                    else {soundOn = !soundOn; }
                }else{
                    restartB.show(); 
                    resumeB.show();
                    soundOn = userSoundChoice;}
                }
    if(key == ' ' && run_game)  
             { player.lasers.push(new Laser(player.x+39,player.y, laser_speed)); 
                if(soundOn) {laser_sound.play();}}}
}

function mousePressed(){
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
            bot.track(player);          
            }

        if(bot.collide(player)){ // enemy hits player
            player.health -= enemyHit;
            player.hitPulse();
        }
    });
    
    laserHandling(); 
    player.shooting(); 
    player.move(); 
    if(bossFight){
        lBoss.move(player); 
        if(lBoss.collide(player)){
            lBoss.isHit = true; 
            player.health -= enemyHit;
            player.hitPulse(); 
        }else{
            lBoss.isHit = false; 
        }

    }
    if(shieldOnOff){
        calcWave();
        renderWave();}
    //DONE: win handling all enemies die, player wins 
    if(num_of_kitsLeft == 0){
        bossFight=true; 
    }
    if(enemies.length == 0 && lBoss.health <= 0 ){
        game_win(); 
    }
    //DONE:  game over handling player health reaches 0, player loses
    if(player.health <= 0 || gameCountDown == 0){
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
                num_of_kitsLeft += -1; 
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
            num_of_kitsLeft += -1; 
            displayPointsRec("+", kitSaved);
        }
    } 
}


//DONE: handles when laser collides with objects
function laserHandling(){
    let i= 0; 
    player.lasers.forEach(function(laser){
        if(bossFight){
            if(lBoss.collide(laser)){
                lBoss.health -= 10; 
                lBoss.isHit = true; 
                player.lasers.splice(i,1);
                if(lBoss.health ==0){
                    displayPointsRec("+",1000);
                    
                }

            }else{lBoss.isHit = false; }
        }
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





