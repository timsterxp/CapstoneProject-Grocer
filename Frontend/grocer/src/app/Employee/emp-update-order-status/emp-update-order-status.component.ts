import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { order } from 'src/app/model.order';

@Component({
  selector: 'app-emp-update-order-status',
  templateUrl: './emp-update-order-status.component.html',
  styleUrls: ['./emp-update-order-status.component.css']
})
export class EmpUpdateOrderStatusComponent implements OnInit {
Msg?:String;
Option:String;
Cancelled=false;
Orders?:Array<order>;
  constructor(public empService:EmployeeService) { }

  ngOnInit(): void {
    this.empService.getAllOrders().subscribe(result=>this.Orders=result);           // A simple get function that retrieves all the orders from the database and stores it in an array Orders that is used to display the data in the table 
  }

  Update(OrderRef:any){
    this.empService.updateOrderStatus(OrderRef).subscribe((result:String)=>{        // if we choose "Cancelled" on the frontend the we first use update put function to update the status in the order collection, now if the status is cancelled we get the userid from the order collection and then use an put function to update the funs of user by adding the amount form the order to it as a refund.
      if(OrderRef.status=="Cancelled"){
        let num = OrderRef.ordernumber;
        this.empService.getOrderByNum(num).subscribe(result=>{
          type Details = {userid: String, fund:Number};
          let order: Details = { userid:result[0].UserID, fund:result[0].Amount};
          console.log(order);
          this.empService.refundUser(order).subscribe((result:String)=>{
            this.Msg = "Status Updated!"+ " "+ result;
          })
        });
      }
      this.Msg = result;
    });
  }

  selected(){                                       // if we select cancelled a text box appears for typing the reason by setting the Option value to true.
    if(this.Option=="Cancelled"){
      this.Cancelled = true;
    }else{
      this.Cancelled = false;
    }
  }

}
