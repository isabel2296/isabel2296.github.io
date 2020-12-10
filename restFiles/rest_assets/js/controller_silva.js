// ISABEL SILVA ASSIGEMENT 4 

$("#viewCart").on('click', function(e) {
    e.stopPropagation(); // prevents the link from actually opening the target
    console.log(e);
    url = $(e.target).attr('href');
  
    $.get(url)
      .done(function(response) {
        $(".main-panel").html(response);
      })
      .fail(function() {
        $(".main-panel").prepend("SHIT BROKE!");
      })
    });

let item_list = []; 
//===== User Add item to Cart ==============
$("#featured-AddToCart").click(function(var_){
    console.log("featured item");
    let item = var_.target.id;
    item_list.push(item);

});

$("#bulk-buy-AddToCart").click(function(var_){
    console.log("bulk-buy item");

    let item = var_.target.id;
    item_list.push(item);
});


//===== UPDATE CART ======
$("#viewCart").click(function(){
    console.log("viewing cart");
    buildCart();
});

//===== Helper Functions ==== 
function buildCart(){
    item_list.forEach(function(item){
        console.log(item); 
    })
}