
// ============= IN GAME ANIMATIONS ================

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
//DONE: Displays and updates score on screen
function displayScore(){
    let scoreText = "score: " + player.score; 
    draw_text(scoreText, 0,height,60);
}
//WORK ON TIMING Display points ernered on game display 
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

// ======== GAME OVER ACTIONS Winning AND Losing ============
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

// ======== HELPER FUNCTIONS =================

//DONE: Draws Text on Screen 
function draw_text(text_,x,y,size_){
    noStroke(); 
    fill(255,255,0);
    textSize(size_); 
    text(text_,x,y); 
}

//DONE: returns true if all aliens get into intial game position 
function aliensInPosition(){
    for(let i = 0; i < enemies.length; i++){
        if(enemies[i].positionSet == false){
            return false; 
        } } return true; }

// when soundOnOff button is clicked this function just reverses the previous value for soundOn 
function soundOnOff_Alpha(){
    soundOn = !soundOn; 
    userSoundChoice = soundOn; 
}
// turn background music on and off
function bgm_soundOnOff(){
    if(soundOn){
        gameBGM.play();
    }else {
        gameBGM.stop(); 
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