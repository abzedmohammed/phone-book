import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arr: any[]): any {
    if (value && arr?.length) {
      return arr.filter(item => item.first_name.toLowerCase().includes( value.toLowerCase()))
    }
    return arr;
  }

}
