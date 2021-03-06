import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';
import { Order } from 'src/app/order.model';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  orders: Array<Order> = [];
  UserID = sessionStorage.getItem("User")
  constructor(public orderSer: OrderService) { }

  ngOnInit(): void {
    this.orderSer.getOrders().subscribe((result: any) => {
      console.log("Orders", result);
      for (let i = 0; i < result.length; i++) {
        console.log("USERID: " + result[i].UserID);
        if (this.UserID == result[i].UserID) {
            var OrderNumber = result[i].OrderNumber;
            var UserID = result[i].UserID;
            var Status = result[i].Status;
            var Date = result[i].Date;

            var table = document.getElementById("orderTable");
            var body = table.getElementsByTagName("tbody")[0];
            var newRow = body.insertRow();
            var cell1 = newRow.insertCell();
            cell1.innerHTML = OrderNumber;
          
            var cell2 = newRow.insertCell();
            cell2.innerHTML = UserID;
            var cell3 = newRow.insertCell();
            cell3.innerHTML = Status;
            var cell4 = newRow.insertCell();
            cell3.innerHTML = String(Date);
        }
      }
    })
  
  } /*
  showOrders() {
    this.orderSer.getOrders().subscribe((result: any) => {
      console.log("Orders", result);
      for (let i = 0; i < result.length; i++) {
        var OrderNumber = result[i].OrderNumber;
        var Status = result[i].Status;
        var Date = result[i].Date;
        var table = document.getElementById("orderTable");
        var body = table.getElementsByTagName("tbody")[0];
        var newRow = body.insertRow();
        var cell1 = newRow.insertCell();
        cell1.innerHTML = OrderNumber;
        var cell2 = newRow.insertCell();
        cell2.innerHTML = Status;
        var cell3 = newRow.insertCell();
        cell3.innerHTML = String(Date);
        
      }
    })
  }*/

}