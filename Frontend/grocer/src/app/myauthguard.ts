import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
@Injectable()
export class MyAuthGuard implements CanActivate{
    canActivate(){
        let obj = sessionStorage.getItem("token");
        if(obj!=null){
            return true;
        }else{
            return false;
        }
    }
}