import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizing'
})
export class CapitalizingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toUpperCase();
  }

}
