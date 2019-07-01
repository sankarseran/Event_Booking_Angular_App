import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventFilter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], key: string, args?: any): any {
    if (items && !items.length) {
      return;
    }
    if (items && key) {
      return items.filter((item) => item.name.includes(key));
    } else {
      return items;
    }
  }

}
