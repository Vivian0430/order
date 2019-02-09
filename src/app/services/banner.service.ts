import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(public http: HttpClient) {}
    urlRoot:any='http://vivian.mynatapp.cc/';
       getBannerData():Observable<any>{
            return this.http.get(this.urlRoot + 'banner');
   }
}
