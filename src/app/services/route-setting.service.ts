import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteSettingService {
  get httpUrlRoot(){
    return "http://vivian.mynatapp.cc/";
  }
  constructor() { }

}
