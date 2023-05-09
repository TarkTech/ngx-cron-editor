import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'monthDayDisplay'
})
export class MonthDayDisplayPipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  transform(month: string): string {
    if (!this.translateService.currentLang) {
      this.translateService.use('en');
    }
    if (month === 'L') {
      return this.translateService.instant('cronEditor.lbl.lastDay');
    }
    return month;
  }
}
