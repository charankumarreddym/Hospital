import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  
  doctorsType = ['Patient','Physician'];
  registerUserData = {}
  constructor(private userService: UserService,
  private router: Router) { }

  ngOnInit() {
  }
  registerUser() {
    this.userService.onRegisterUser(this.registerUserData)
      .subscribe(data =>{
        console.log("adding form values");
        console.log(data);
        if(data){
          this.router.navigate(['/dashboard'])
        }
      });
    // this._auth.registerUser(this.registerUserData)
    // .subscribe(
    //   res => {
    //     localStorage.setItem('token', res.token)
    //     this._router.navigate(['/special'])
    //   },
    //   err => console.log(err)
    // )      
  }
  submit() {
    
      
  
    
  }

}
