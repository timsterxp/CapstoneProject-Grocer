import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {
 /* requests?:Array<Request>
    constructor(public requestSer:RequestService){}

    ngOnInit():void{
      this.requestSer.retrieveAllRequests().subscribe(result=>this.requests=result);
    }
 //This code is all dependent on what the employee person has set up in regards to requests.
 //Will be edited later   
 */
  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns=['Employee Id','Request'];

}
