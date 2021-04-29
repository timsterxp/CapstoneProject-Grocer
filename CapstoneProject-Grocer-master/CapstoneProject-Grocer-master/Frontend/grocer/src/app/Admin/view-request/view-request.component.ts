import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewRequestService } from './view-request.service';

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
  constructor(private viewService: ViewRequestService, public router:Router) { }
  requests:any;
  Msg:any;
  Option:String;

  ngOnInit(): void {
    this.getRequests();
  }

  Update(status:any){
    console.log(status)
    this.viewService.updateRequest(status).subscribe((result:String)=>{
      this.Msg = result;
      this.getRequests();
      
    });

    
  }

  getRequests(){
    this.viewService.retrieveAllRequest().subscribe((result)=>{
      this.requests=result
    })
  }

  back(){
    this.router.navigate(["AdminHome"]);
  }


  displayedColumns=['Employee Id','Request'];

}
