import { Injectable } from '@angular/core';
import { RouteSettingService } from './route-setting.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public setting: RouteSettingService,public http: HttpClient) {}
      insertUserData(txtPhone:any,txtPassword:any):Observable<any>{
        return this.http.get(this.setting.httpUrlRoot + 'register?phone=' + txtPhone + '&password=' + txtPassword);
      }
}
