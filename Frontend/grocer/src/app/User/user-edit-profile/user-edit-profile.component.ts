import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent implements OnInit {

  constructor(public userSer: UserService) { }

  ngOnInit(): void {
  }
  updateInfo(updateRef: any) {
    this.userSer.updateUser(updateRef).subscribe((result: any) => {
      console.log(result);
    })
  }
}
