import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKhr',
})
export class ToKhrPipe implements PipeTransform {
  transform(value: number): string {
    let total = value * 4100
    total = (Math.ceil(total / 100)) * 100
    return total.toLocaleString();
  }
}
