import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';
import { orderReq } from 'src/app/model.orderReq';

@Component({
  selector: 'app-generate-reports',
  templateUrl: './generate-reports.component.html',
  styleUrls: ['./generate-reports.component.css']
})
export class GenerateReportsComponent implements OnInit {

  constructor(public orderSer : OrderService) { }
  Orders?:Array<orderReq>;

  ngOnInit(): void {
  }

  // generateReport(dateRef) {
   




  //   // console.log(dateRef.dateofReport) ;
  //   // this.orderSer.getOrders().subscribe(result=> {
  //   // console.log(result);
    
  //   // // var result1 = JSON.parse(result.toString()) ;
    
  //   // result1.forEach(orderValue => {
    
     
  //   //  var table = document.getElementById("details");
  //   //  var body = table.getElementsByTagName("tbody")[0];
     
  //   //  var newrow = body.insertRow();  // row created 
  //   //  var cell0 = newrow.insertCell(0);  // row.cell
  //   //  var cell1 = newrow.insertCell(1);  // row.cell1 
  //   //  var cell2 = newrow.insertCell(2);  // row.cell1 
      
  //   //  cell0.innerHTML =   orderValue.OrderNumber.toString();
  //   //  cell1.innerHTML = orderValue.UserID.toString(); 
  //   //  cell1.innerHTML = orderValue.Amount.toString();  
      
   
  //   // });


  //   //  var table = document.getElementById("details");
  //   //  var body = table.getElementsByTagName("tbody")[0];
 
  //   //  var newrow = body.insertRow();  // row created 
  //   //  var cell0 = newrow.insertCell(0);  // row.cell
  //   //  var cell1 = newrow.insertCell(1);  // row.cell1 
  //   //  var cell2 = newrow.insertCell(2);  // row.cell1 
      
  //   //  cell0.innerHTML =   orderValue.OrderNumber.toString();
  //   //  cell1.innerHTML = orderValue.UserID.toString(); 
  //   //  cell1.innerHTML = orderValue.Amount.toString();  
  
 
     
   
 
 
  //    // cell.innerHTML = dash.name ;
  //    // cell1.innerHTML= dash.contact ;
 
    
 
  //   }
    
 


  generateReport(dateRef) {

  console.log(dateRef.dateofReport) ;
  this.orderSer.getAllOrders().subscribe(result=> {
    console.log(result);
    
    
   
    result.forEach(orderValue => {
     

    //  if(orderValue.Date == dateRef.dateofReport) {
    //    console.log("same date") ;
    //  }
     
     var table = document.getElementById("details");
     var body = table.getElementsByTagName("tbody")[0];
 
     var newrow = body.insertRow();  // row created 
     var cell0 = newrow.insertCell(0);  // row.cell
     var cell1 = newrow.insertCell(1);  // row.cell1 
     var cell2 = newrow.insertCell(2);  // row.cell1 
     var cell3 = newrow.insertCell(2);  // row.cell1 
      
     cell2.setAttribute("type" ,  "Date") ;
     cell0.innerHTML =   orderValue.OrderNumber.toString();
     cell1.innerHTML = orderValue.Date.toString(); 
     cell3.innerHTML = orderValue.UserID.toString(); 
     cell2.innerHTML = orderValue.Amount.toString();  
 
    
    });
   
 
 
     // cell.innerHTML = dash.name ;
     // cell1.innerHTML= dash.contact ;
 
    
 
    });

 }



}
