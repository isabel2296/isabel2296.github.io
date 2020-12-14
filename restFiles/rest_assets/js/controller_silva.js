// ISABEL SILVA ASSIGEMENT 4 

// ==== MODEL ===========
// this will contain the menu items 
class Item{
  constructor(unique_id, name, price, quantity){
      this.unique_id = unique_id; 
      this.name = name;
      this.price = price; 
      this.quantity = quantity; 
  }
}

class Menu{
  constructor(){
      this.menu_list = []; 
  }
  add_item(item) {
      this.menu_list.push(item);
  }
  remove_item(item){
      
  }
}

class Cart{
  constructor(){
      this.inCart = []; 
      this.table =   document.getElementById("cart-Table"); 
      this.tbdy = document.createElement('tbody');
  }
  add_item(item){
      this.inCart.push(item); 
  }
  total_item(){
      return this.inCart.length; 
  }
  total_price(){
      let total = 0.00; 
      this.inCart.forEach(function(item_){
          total += item_.price * item_.quantity; 
      });
      return total; 
  }
 
  reviewCart(){
    let final = []; 
    for(let i = 0; i < this.inCart; i++ ){
      if(final.includes(this.inCart[i])){
        let ind = final.findIndex(this.inCart[i]); 
        console.log(ind);
      }else{
        final.push(this.inCart[i]);
        console.log(this.inCart[i]);
      }
    }
  }
  displayCart(){
      this.reviewCart(); 
      let currentRows = this.table.rows.length; 
       if(this.table.rows.length!=1){
        for(let k = 0; k<currentRows; k ++){
          this.table.deleteRow(1);
        }
       }

      for(let i =0; i < this.inCart.length; i++){
        var tr = this.tbdy.insertRow(); 
        for(var j = 0;  j < 4; j++){
          if(i == this.inCart.length && j == 4){
            break; 
          }else{
            var td = tr.insertCell(); 
            if(j == 0) td.appendChild(document.createTextNode(this.inCart[i].name));
            if(j==1)td.appendChild(document.createTextNode(this.inCart[i].unique_id));
            if(j==2)td.appendChild(document.createTextNode(this.inCart[i].quantity));
            if(j==3)td.appendChild(document.createTextNode(this.inCart[i].price*this.inCart[i].quantity));
          }
        }
      }
      var footer = this.table.createTFoot();
      console.log(footer.rows.length);
      var row = footer.insertRow(0); 
      if(footer.rows.length>1){
         footer.deleteRow(1);
      } 
      row.insertCell(); 
      row.insertCell(); 
      let totalText = row.insertCell(); 
      totalText.innerHTML = "<b>Total:";
      var cell = row.insertCell();
      cell.innerHTML = this.total_price();
      this.table.appendChild(this.tbdy)
    
  }
}

class Order{

}
// CONTROLLER 

var menu = new Menu(); 
var user_cart = new Cart(); 
// === Hard Code Menu ==== 
menu.add_item(new Item("feature-add-item-1", "f1", 9.99, 3 )); 
menu.add_item(new Item("feature-add-item-2", "f2", 8.79, 12 )); 
menu.add_item(new Item("feature-add-item-3", "f3", 13.56, 13 )); 
menu.add_item(new Item("feature-add-item-4", "f4", 2.99, 100 )); 
menu.add_item(new Item("feature-add-item-5", "f5", 19.99, 20 )); 
menu.add_item(new Item("feature-add-item-6", "f6", 15.99, 6 )); 

menu.add_item(new Item("bulk-add-item-1", "b1", 69.99, 100 )); 
menu.add_item(new Item("bulk-add-item-2", "b2", 120.50, 3 )); 
menu.add_item(new Item("bulk-add-item-3", "b3", 30.99, 20 )); 
menu.add_item(new Item("bulk-add-item-4", "b4", 80.99, 6 )); 
menu.add_item(new Item("bulk-add-item-5", "b5", 200.98, 8 )); 
menu.add_item(new Item("bulk-add-item-6", "b6", 20.99, 3 )); 

//===== User Add item to Cart ==============
$("#featured-AddToCart").click(function(var_){
    let item_type = var_.target.id;
    console.log("featured item", item_type);

    menu.menu_list.forEach(function(i){
      let inCartAlready = false; 
      if(item_type==i.unique_id){
        for(let k = 0; k < user_cart.inCart.length; k++){
          if(item_type == user_cart.inCart[k].unique_id){
            user_cart.inCart[k].quantity++;
            inCartAlready = true; 
            break;
          }else{inCartAlready= false;}
        }
        if(inCartAlready==false){
        user_cart.inCart.push(new Item(i.unique_id, i.name,i.price,1));
          inCartAlready = false; 
      }
      }
    });
});

$("#bulk-buy-AddToCart").click(function(var_){

    let item_type = var_.target.id;
    console.log("bulk-buy item", item_type);

    menu.menu_list.forEach(function(i){
      let inCartAlready = false; 
      if(item_type==i.unique_id){
        for(let k = 0; k < user_cart.inCart.length; k++){
          if(item_type == user_cart.inCart[k].unique_id){
            user_cart.inCart[k].quantity++;
            inCartAlready = true; 
            break;
          }else{inCartAlready= false;}
        }
        if(inCartAlready==false){
        user_cart.inCart.push(new Item(i.unique_id, i.name,i.price,1));
          inCartAlready = false; 
      }
      }
    });
});


//===== UPDATE CART ======
$("#viewCart").click(function(){
  console.log("CLICKED View Cart");

   user_cart.displayCart(); 
});

// ===== covid reporting updating ==== 

$("#reported").click(function(){
  console.log("CLICKED Report Page Button");

 var URL = "reporting.html";
 window.open(URL,"Covid Reporting","width=1000,height=600");
 console.log("opened report window");

 });

 $('#sendReport').click(function(){
   console.log("SUBMITED COVID REPORT");
   var reportedCasesCount = localStorage.getItem('covidCount');
   localStorage.setItem('covidCount', ++reportedCasesCount);
   document.getElementById("covidCount").innerHTML = reportedCasesCount;
 });

 // ====== reservation handling ====== 
 $("#reservationButton").click(function(){
  console.log("open reservation window");
  var URL = "reservation.html";
  window.open(URL,"reservRequest","width=1000,height=600");

  });
$('#sendReserv').click(function(){
  var reserDetail = localStorage.getItem('reservDet');
  let name = document.getElementById("reserv-name");
  let date = document.getElementById("reservDate");
  let num = document.getElementById("reserv-numOfGuest");
  let name_ = "Name: ".concat(name.value, "<br>");
  let date_ = "Date: ".concat(date.value, "<br>");
  let num_ = "Guest: ".concat(num.value, "<br>");
  let nameDate = name_.concat(date_, num_, "<br>");
  reserDetail = nameDate; 
  localStorage.setItem('reservDet', reserDetail);
  document.getElementById("reservDet").innerHTML = reserDetail;
});


 $('#ClickedReset').click(function(){
   console.log("CLICKED RESET");
 });
