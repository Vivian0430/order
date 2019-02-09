import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  list:any[]=[];
  category:any[]=[];
  isChoosed:boolean=false;
  result:any[]=[];
  obj = {};
  id:Number = 1;
   
  constructor(public activedRouter: ActivatedRoute,public ls: ListService) { 
     this.id = this.activedRouter.snapshot.queryParams['id'];
  }

  ngOnInit() {
    this.ls.getListData().subscribe((res:any)=>{
         this.list= res;
         for(let i=0;i<res.length;i++){
           this.category.push(res[i].category);
         }
         for(var i =0; i<this.category.length; i++){
          if(!this.obj[this.category[i].id]){
             this.result.push(this.category[i]);
             this.obj[this.category[i].id] = true;
          }
       }
    })
     console.log(this.id);
    // this.ls.getCateListData().subscribe((res:any)=>{
    //   this.list = res;
    // })
  }
   
}
