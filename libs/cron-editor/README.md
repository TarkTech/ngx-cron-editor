# @tarktech/ngx-cron-editor

An angular component for building cron expressions graphically with **i18n localization available** 🥳.
Other fixes are:

- usage of solely reactive forms (got rid of template forms) 🤓
- useful scripts are added in order to make future development easy 😌
- code not needed removed 🚮

## Demo

A demo can be found 👉 👉 👉 [here](https://cardiosmircem.github.io/ngx-cron-editor/) 👈 👈 👈

## Usage

1. Install the npm package

   ```
   $ npm i @tarktech/ngx-cron-editor
   ```

2. import the module in your own module

   ```ts
   import { CronEditorModule } from '@tarktech/ngx-cron-editor';

   @NgModule({
       imports: [..., CronEditorModule],
   ...
   })
   export class MyModule {
   }
   ```

3. in your html code include

   ```html
   <app-cron-editor
     [options]="cronOptions"
     [cronStartingValue]="cronValue"
     (cronChange)="seeCron($event)"
   >
   </app-cron-editor>
   ```

4. While in your ts component you have

```ts
import { CronOptions } from '@tarktech/ngx-cron-editor';

@Component({
    ...
})
export class MyComponent {
  cronValue = '0 0 1/1 * *';

  cronOptions: CronOptions = {
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
  ...
}
```

5. finally add these translations (in your `en.json` for example)

```json
"cronEditor": {
    "lbl": {
      "advanced": "Advanced",
      "at": "at",
      "atTime": "at the hour",
      "every": "Every",
      "daily": "Daily",
      "day": "Day",
      "days": "Days",
      "expression": "Cron expression",
      "fromMonthday": "From month day",
      "daysAndFrom": "days from",
      "firstWeekDay": "first week",
      "flavor": "Flavor",
      "fromDate": "from",
      "hourly": "Hourly",
      "hours": "Hours",
      "language": "Language",
      "last": "last",
      "lastDay": "last day",
      "lastWeekDay": "last week",
      "minutes": "Minutes",
      "month": "Month",
      "monthPlural": "Months (from the month of january)",
      "months": {
        "january": "january",
        "february": "february",
        "march": "march",
        "april": "april",
        "may": "may",
        "june": "june",
        "july": "july",
        "august": "august",
        "september": "september",
        "october": "october",
        "november": "november",
        "december": "december"
      },
      "monthly": "Monthly",
      "of": "of",
      "ofEvery": "of every",
      "onThe": "On the",
      "onTheDouble": "On the",
      "onTheDoubleMale": "On the",
      "onTheTriple": "On the",
      "onTheFeminine": "On the",
      "seconds": "Seconds",
      "selectCronFlavor": "Select your cron flavor",
      "week": "Week",
      "weekDays": "From monday to friday at",
      "yearly": "Yearly",
      "first": "first",
      "second": "second",
      "third": "third",
      "fourth": "fourth",
      "fifth": "fifth",
      "MON": "monday",
      "TUE": "tuesday",
      "WED": "wednesday",
      "THU": "thursday",
      "FRI": "friday",
      "SAT": "saturday",
      "SUN": "sunday",
      "weekly": "Weekly"
    }
  }

```

## API

| Name                                               | Description                                                     |
| :------------------------------------------------- | :-------------------------------------------------------------- |
| `@Input()`<br> `options: CronOptions`              | Options for obtaining your desired UI                           |
| `@Input()`<br> `cronStartingValue: string`         | Starting value for example                                      |
| `@Output()`<br> `cronChange: EventEmitter<string>` | Event emitted when the selection on the cron expression changes |

## Development

1. Clone the repo

2. `npm install`

3. `npm run pack-install`

Enjoy developing 🏖️ 🌞 🍹

## History

This package repository has been forked from [ngx-cron-editor](https://github.com/haavardj/ngx-cron-editor).

## License

Licensed under the MIT license.
