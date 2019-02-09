import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    // for(let i=0;i<value.length;i++){
    //     if(output.indexOf(value[i])==-1){
    //       output.push(value[i]);
    //     }
    // }
    // return output;
   var result = [];
   var obj = {};
   for(var i =0; i<value.length; i++){
      if(!obj[value[i].id]){
         result.push(value[i]);
         obj[value[i].id] = true;
      }
   }
   return result;
   }

}
