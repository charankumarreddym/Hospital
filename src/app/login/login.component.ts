import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginData = {};
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  onLoginUser() {
    this.userService.onLoginUser(this.loginData)
    .subscribe(data => {
     
        if(data){
          this.router.navigate(['/dashboard'])
        }
      
    })
  }
}
