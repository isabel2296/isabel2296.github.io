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
          total += item_.price; 
      });
  }
  displayCart(){
      
       console.log(this.table.rows.length);
       if(this.table.rows.length!=1){
        for(let k = 0; k<this.table.rows.length; k ++){
          this.table.deleteRow(1);
        }
       }
       console.log(this.table.rows.length);

      for(let i =0; i <= this.inCart.length; i++){
        var tr = this.tbdy.insertRow(); 
        for(var j = 0;  j < 4; j++){
          if(i == this.inCart.length && j == 4){
            break; 
          }else{
            var td = tr.insertCell(); 
            td.appendChild(document.createTextNode(this.inCart[i].unique_id));
          }
        }
      }
      this.table.appendChild(this.tbdy)
    
  }
}

class Order{

}
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
    console.log("featured item");
    let item = var_.target.id;
    menu.menu_list.forEach(function(i){
      if(item==i.unique_id){
        user_cart.inCart.push(i);
      }
    });
});

$("#bulk-buy-AddToCart").click(function(var_){
    console.log("bulk-buy item");

    let item_type = var_.target.id;
    menu.menu_list.forEach(function(i){
      if(item_type==i.unique_id){
        user_cart.inCart.push(i);
      }
    });
});


//===== UPDATE CART ======
$("#viewCart").click(function(){
   user_cart.displayCart(); 
});

