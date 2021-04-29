import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  User:String;
  ID:Number;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,public router:Router) {}
  ngOnInit(): void {
    this.User = sessionStorage.getItem('User');
    this.ID = parseInt(sessionStorage.getItem('id'));
    sessionStorage.setItem('EmpID',this.ID.toString());

  }

  Logout(){
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('User');
    sessionStorage.removeItem('token');
    this.router.navigate(["EmpLogin"]);
  }
}

