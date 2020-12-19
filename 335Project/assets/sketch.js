//isabel silva

//simulation variables
let values = [];
 
//buttons
var resetButton; 
 

// -------- Start of P5 Functions --------------

function setup() 
{
    createCanvas(900,500 );  // Make a P5 canvas.

    resetButton = select('#reset');
    randomNum();
    quickSort3Way(values,0,values.length-1); 

    resetButton.mousePressed(setUp);

}


function draw()  // P5 Frame Re-draw Fcn, Called for Every Frame.
 {
    background(255);
    displayValues();
 }

//===== helper functions ============

// load random numbers in list of values
function randomNum(){
  for(let i = 0;i<(width-540)/8;i++){
        values.push(Math.floor(random(height-50)));
      }
}

// reset button switch
function setUp(){ 
  values = [];
  randomNum();  
  quickSort3Way(values,0,values.length-1); 
}

// displays text on screen
function draw_text(text_,x,y,size_){
  noStroke(); 
  fill(0);
  textSize(size_); 
  text(text_,x,y); 
}

 // dispays the values will show sorting
function displayValues(){
  //background(255);
  for(let i = 0;i<values.length;i++){
    stroke(0);
    fill(155);
    rect(i*20 , height, 20, -values[i]);
    draw_text(Math.floor(values[i]),i*20, height - values[i]-3,10);
    }
  }


// QUICKSORT3WAY
async function quickSort3Way(arr,lo,hi){
  if( hi <= lo) return; 
      
  let lt = lo;
  let gt = hi;
  let v = arr[lo];
  let i = lo+1; 
  while(i<=gt){    
      if (arr[i]< v)
            await exch(arr, lt++, i++); 
      else if (v < arr[i])
            await exch(arr, i, gt--); 
      else i++;  
  } 
  let i_ = 0; 
  if(lt ==0){
      i_ = 0; 
  }else{
      i_ = lt -1; 
  }
    await quickSort3Way(arr, lo, i_);
    await quickSort3Way(arr, gt+1, hi);
}
async function exch(arr,i,j){
  await sleep(30);
  let swap = arr[i];
  arr[i] = arr[j]; 
  arr[j] = swap; 
}
function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}

// quicksort .. 
// async function quickSort(arr,lo,hi){
//     if(lo>=hi) return; 
//     let index = await partition(arr,lo,hi);
//     await Promise.all([
//         await quickSort(arr,lo, index-1),
//         await quickSort(arr,index+1,hi)
//     ]);
  
// }
// async function partition(arr,lo,hi){
//    let pv= arr[hi];
//    let pi  = lo ;
//    for(let i = lo; i < hi; i++){
//        if(arr[i] < pv){
//            await exch(arr,i,pi);
//            pi++
//        }
//    }
//    await exch(arr,pi,hi);
//    return pi; 
// }



