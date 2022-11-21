import { Component, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';

export interface TimePickerModel {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function* range(start: number, end: number) {
  for (let i = start; i <= end; i += 1) {
    yield i;
  }
}

@Component({
  selector: 'cron-time-picker',
  templateUrl: './cron-time-picker.template.html',
  providers: []
})
export class TimePickerComponent {
  @Input() public disabled;

  @Input() public use24HourTime = true;

  @Input() public hideHours = false;

  @Input() public hideMinutes = false;

  @Input() public hideSeconds = true;

  @Input() hourTab = false;

  public minutes = [...range(0, 59)];

  public seconds = [...range(0, 59)];

  public hourTypes = ['AM', 'PM'];

  get hour12Format(): number[]{
    return this.hourTab ? [...range(1, 12)] : [...range(0,12)];
  }

  get hour24Format(): number[]{
    return this.hourTab ? [...range(1, 24)] : [...range(0, 24)];
  }

  get hours(): number[] {
    return this.use24HourTime ? this.hour24Format :  this.hour12Format;
  }

  constructor(public parent: ControlContainer) {}
}
