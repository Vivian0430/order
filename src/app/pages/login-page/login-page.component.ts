import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  txtphone:any;
  txtpassword:any;
  constructor(public router: Router,public ds: LoginService) {
   
   }
  
  
  ngOnInit() {
    
  }
  login():any{
    if(this.txtphone && this.txtpassword){
      sessionStorage.setItem('user', JSON.stringify(this.txtphone));
      sessionStorage.setItem('pwd',JSON.stringify(this.txtpassword));
      this.router.navigate(['/mine']);
    }
  }

  // submitForm(formModel:FormGroup):void{
      
  // }
}
