import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iva',
})
export class IvaPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value + ' +IVA';
  }
}
