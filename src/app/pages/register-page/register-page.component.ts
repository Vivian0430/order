import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  txtphone:any;
  txtpassword:any;
  frmpassword:any;
  constructor(public router: Router,public rs: RegisterService) { }

  ngOnInit() {
  
  }
   

  register():any{
    
  }

}
