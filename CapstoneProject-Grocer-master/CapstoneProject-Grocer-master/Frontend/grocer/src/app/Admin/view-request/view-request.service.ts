import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRequests } from 'src/app/model.IRequest';

@Injectable({
  providedIn: 'root'
})
export class ViewRequestService {

  constructor(public http:HttpClient) { }

  retrieveAllRequest():Observable<IRequests[]>{
    return this.http.get<IRequests[]>("http://localhost:9090/request/view");
  }

  updateRequest(request:any):any{
    return this.http.put("http://localhost:9090/request/updateRequest", request, {responseType:'text'});
  }
}
