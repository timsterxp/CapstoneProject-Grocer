import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  data = [];
  temp = [];
  constructor() { }
  
  ngOnInit(): void {
    var cart = localStorage.getItem("cartItems");
    this.data = JSON.parse(cart);
    this.temp.push(JSON.stringify(this.data));
    for (var i = 0; i < this.data.length; i++) {
      var name = this.data[i].Name;
      var price = this.data[i].Price;
      var quantity = this.data[i].Quantity;
     
      var table = document.getElementById("checkoutTable");
      var body = table.getElementsByTagName("tbody")[0];
      var newRow = body.insertRow();
      var cell1 = newRow.insertCell();
      cell1.innerHTML = name;
      var cell2 = newRow.insertCell();
      cell2.innerHTML = price;
      var cell3 = newRow.insertCell();
      cell3.innerHTML = quantity;
      var cell4 = newRow.insertCell();
      var value = Number(price) * Number(quantity);
      cell4.innerHTML = String(value);
    }
    console.log(this.data, localStorage.length);
  }
  checkout() {
    console.log("Checkout!")
  }
}
