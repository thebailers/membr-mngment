export const daysOfWeekArray: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export enum weekdaysLowerCase {
  sunday = "sunday",
  monday = "monday",
  tuesday = "tuesday",
  wednesday = "wednesday",
  thursday = "thursday",
  friday = "friday",
  saturday = "saturday",
}

export const urlFriendlyTime = (time: String): string => time.replace(".", "");

export const urlFriendlyWeekday = (day: String): string => day.toLowerCase();

export const capitaliseFirstLetter = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const getWeekdayNumberFromURL = (day: weekdaysLowerCase): number =>
  daysOfWeekArray.indexOf(capitaliseFirstLetter(day));

export const getTodayDOWString = (): string =>
  daysOfWeekArray[new Date().getDay()];
