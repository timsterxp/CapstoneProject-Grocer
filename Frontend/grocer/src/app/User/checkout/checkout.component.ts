import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';
import { FundsService } from 'src/app/Services/funds.service';
import { CartService } from 'src/app/Services/cart.service';
import { Order } from 'src/app/order.model';
import { item } from 'src/app/item.model';
//import { newArray } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  userID = 0;
  ordernum = 0;
  totalcost = 0;
  output = "";
  accountbal = 0;
  //allcart: Observable<Object> = new Observable();
  allcart: Array<item> = new Array();
  constructor(public orderSer: OrderService, public fundSer: FundsService, public cartSer: CartService) { }

  ngOnInit(): void {
    var cart = localStorage.getItem("cartItems");
    this.cartSer.getCart().subscribe((result: any) => {
      console.log(result);
      for (let i = 0; i < result.length ; i++) {
        let temprice = Number(result[i].ProductPrice);
        let tempquan = Number(result[i].Quantity)
        let Item: item ={
          Name: result[i].ProductName,
          Price: temprice,
          Quantity: tempquan
        }

        this.allcart.push(Item);
        console.log(this.allcart);

        var name = result[i].ProductName;
        var price = temprice;
        var quantity = tempquan;

        var table = document.getElementById("checkoutTable");
        var body = table.getElementsByTagName("tbody")[0];
        var newRow = body.insertRow();
        var cell1 = newRow.insertCell();
        cell1.innerHTML = name;
        var cell2 = newRow.insertCell();
        cell2.innerHTML = String(price);
        var cell3 = newRow.insertCell();
        cell3.innerHTML = String(quantity);
        var cell4 = newRow.insertCell();
        var value = Number(price) * Number(quantity);
        this.totalcost = this.totalcost + value;
        cell4.innerHTML = String(value);
      }
    })
    console.log("Cart:",this.allcart);
    
  }
  checkout() {
    this.fundSer.getFunds(this.userID).subscribe((result: any) => {
      console.log("Funds" + result);
      this.accountbal = result[0].Funds;
      console.log(result[0].Funds);
      if (result[0].Funds >= this.totalcost) {
        console.log("Purchase Successful!");
        this.output = "Order successfully placed!";
        let order: Order = {
          OrderNumber: this.ordernum,
          Products: this.allcart,
          Amount: 0,
          Status: "good",
          Reason: "no issue",
          Date: new Date()
        }
        console.log("Order Number:", this.ordernum);
        console.log(order);
        this.orderSer.addnewOrder(order).subscribe(result => {
          console.log(result);
        });

      } else {
        this.output = "Insufficient funds, please add more.";
        console.log('Total Cost: ', this.totalcost, "Account Balance: ", this.accountbal);
      }
    })
    //OrderRef: any
    //this.orderSer.addOrder(OrderRef).subscribe(result => {
     // console.log(result);
    //})
    console.log("Checkout!")
  }
  addOrder(orderRef: any) {
    this.userID = orderRef.userid;
    this.ordernum = orderRef.ordernum;
  }
}
