import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';
import { order } from 'src/app/model.order';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {
  UserID?:String;
  orders: Array<order> = [];
  constructor(public orderSer: OrderService) { }

  ngOnInit(): void {
    this.UserID = sessionStorage.getItem("User");
  }
  showOrders(fundRef:any) {
    this.orderSer.getOrders().subscribe(result=>{
      console.log("Orders", result);
      for (let i = 0; i < result.length; i++) {
      if(fundRef.userid==result[i].UserID){
          var OrderNumber = result[i].OrderNumber;
          var UserID = result[i].UserID;
          var Status = result[i].Status;
          var Date = result[i].Date;

        var table = document.getElementById("orderTable");
        var body = table.getElementsByTagName("tbody")[0];
        var newRow = body.insertRow();
        var cell1 = newRow.insertCell();
        cell1.innerHTML = OrderNumber.toString();
        var cell2 = newRow.insertCell();
        cell2.innerHTML = UserID.toString();
        var cell3 = newRow.insertCell();
        cell3.innerHTML = Status.toString();
        var cell4 = newRow.insertCell();
        cell4.innerHTML = String(Date);
      }
      }
    })
  }

}