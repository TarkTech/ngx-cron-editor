export interface CronOptions {
  hideMinutesTab: boolean;
  hideHourlyTab: boolean;
  hideDailyTab: boolean;
  hideWeeklyTab: boolean;
  hideMonthlyTab: boolean;
  hideYearlyTab: boolean;
  hideAdvancedTab: boolean;
  hideSpecificWeekDayTab: boolean;
  hideSpecificMonthWeekTab: boolean;

  use24HourTime: boolean;
  hideSeconds: boolean;

  cronFlavor: 'standard' | 'quartz';
  weekStart?: number;
}
