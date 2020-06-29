import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
  transform(data, searchFrom, searchTo) {
  const timedata = [];
    if (searchFrom && searchTo) {
      for(let i=0;i<data.length;i++){
        let a = data[i].time.split(" ")[1];
        if(a > searchFrom && a < searchTo){
          timedata.push(data[i]);
        }
      }
      return timedata;
    }
    return data;
  }
}
