import { Component, OnInit } from '@angular/core';
import { CronOptions } from 'cron-editor';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public cronValue = '0 0 1/1 * *';

  public cronOptions: CronOptions = {
    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: false,
    hideSpecificWeekDayTab: false,
    hideSpecificMonthWeekTab: false,

    use24HourTime: true,
    hideSeconds: false,

    cronFlavor: 'standard'
  };

  cronFlavorFC: FormControl;

  languageFC: FormControl;

  availableLanguages = ['en', 'it'];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.addLangs(this.availableLanguages);
    this.translate.use('en');
    this.cronFlavorFC = new FormControl(this.cronOptions.cronFlavor);
    this.languageFC = new FormControl(this.translate.currentLang);
  }

  seeCron(ev: string): void {
    this.cronValue = ev;
  }

  cronFlavorChange(event: any): void {
    this.cronOptions.cronFlavor = event.value;
  }

  changeLanguage(event: any): void {
    this.translate.use(event.value);
  }
}
