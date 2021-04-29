
import { Component, OnInit } from '@angular/core';
import { FundsService } from 'src/app/Services/funds.service';
@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {

  constructor(public fundSer: FundsService) { }
  currentFund = 0;
  ngOnInit(): void {
  }
  addFunds(fundRef: any) {
    this.fundSer.addFund(fundRef).subscribe(result => {
      console.log(result);
    })
    console.log(fundRef.funds);
    this.currentFund += fundRef.funds;
  }

}