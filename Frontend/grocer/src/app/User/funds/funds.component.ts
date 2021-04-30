
import { Component, OnInit } from '@angular/core';
import { FundsService } from 'src/app/Services/funds.service';
@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {
  output = "";
  UserID = "";
  constructor(public fundSer: FundsService) { }
  currentFund = 0;
  ngOnInit(): void {
    this.UserID = sessionStorage.getItem("User")
    this.fundSer.getFunds(this.UserID).subscribe((result: any) => {
      console.log(result)
      console.log("Output: " + result[0])
      this.currentFund = result[0].funds;
    })
  }
  /*
  addFunds(fundRef: any) {
    this.fundSer.addFund(fundRef).subscribe(result => {
      console.log(result);
    })
    console.log(fundRef.funds);
    this.output = "Funds added succesfully!"
    this.currentFund += fundRef.funds;
  }*/
  updateFunds(fundRef: any) {

    this.fundSer.updateFunds(fundRef, this.UserID).subscribe((result: any) => {
      console.log(result);
    })
    this.output = "Funds added succesfully!"
    this.fundSer.getFunds(this.UserID).subscribe((result: any) => {
      console.log(result)
      console.log("Output: " + result[0])
      this.currentFund = result[0].funds;
    })
  }

}
