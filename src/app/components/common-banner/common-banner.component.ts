import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-common-banner',
  templateUrl: './common-banner.component.html',
  styleUrls: ['./common-banner.component.css']
})
export class CommonBannerComponent implements OnInit {
  banner=[];
  constructor(public bs: BannerService) { }

  ngOnInit() {
    this.bs.getBannerData().subscribe((res)=>{
     // console.log(res[0]);
       
        this.banner=res;
      //  console.log(this.banner);
    })
  }
   
}
