// ISABEL SILVA ASSIGEMENT 4 

let item_list = []; 
//===== User Add item to Cart ==============
$("#featured-AddToCart").click(function(var_){
    let item = var_.target.id;
    item_list.push(item);

});

$("#bulk-buy-AddToCart").click(function(var_){
    let item = var_.target.id;
    item_list.push(item);
});


//===== UPDATE CART ======
$("#view-Cart").click(function(){
    console.log("viewing cart");
    buildCart();
});


//===== Helper Functions ==== 
function buildCart(){
    item_list.forEach(function(item){
        console.log(item); 
    })
}