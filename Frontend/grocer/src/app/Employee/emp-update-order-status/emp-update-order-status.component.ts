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
    this.empService.getAllOrders().subscribe(result=>this.Orders=result);
  }

  Update(OrderRef:any){
    this.empService.updateOrderStatus(OrderRef).subscribe((result:String)=>{
      this.Msg = result;
    });
  }

  selected(){
    if(this.Option=="Cancelled"){
      this.Cancelled = true;
    }else{
      this.Cancelled = false;
    }
  }

}
