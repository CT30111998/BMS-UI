import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'punchTime'
})
export class PunchTimePipe implements PipeTransform {

  // transform(time: any): any {
  //   let hour = (time.split(':'))[0]
  //   let min = (time.split(':'))[1]
  //   let part = hour > 12 ? 'pm' : 'am';
  //   if(parseInt(hour) == 0)
  //    hour = 12;
  //   min = (min+'').length == 1 ? `0${min}` : min;
  //   hour = hour > 12 ? hour - 12 : hour;
  //   hour = (hour+'').length == 1 ? `0${hour}` : hour;
  //   return `${hour}:${min} ${part}`
  // }
  transform(value: any, args?: any): any {
    return moment(value,'HH:mm').format("HH:mm A");
  }

}
