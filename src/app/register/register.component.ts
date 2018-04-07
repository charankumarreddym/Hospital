import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  doctorsType = ['Patient','Physician'];
  registerUserData = {}

  constructor() { }

  ngOnInit() {
  }
  registerUser() {
    console.log("adding form values");
    console.log(this.registerUserData);
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
    console.log("adding form values");
    console.log(this.registerUserData);
  }

}
