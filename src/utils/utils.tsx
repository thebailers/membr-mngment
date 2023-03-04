import { Member } from "./member.utils";

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

// Dates
export const getDayOfWeekStringFromUrl = (
  url: string,
  replacePattern: string
): string => url.replace(replacePattern, "");

export const getDayStringFromDayIndex = (d: number) =>
  daysOfWeekArray[d % daysOfWeekArray.length];

export const removeDuplicates = (arr1: Member[], arr2: Member[]) =>
  arr1.filter(
    (array1Item) => arr2.findIndex((e) => e.id === array1Item.id) === -1
  );

// returns boolean - checking if an object exists in both arrays
export const duplicateObjectInArrays = <T,>(
  arr1: T[],
  arr2: T[],
  identifier: keyof T
): boolean =>
  arr1.some((arr1Obj) =>
    arr2.some((arr2Obj) => arr2Obj[identifier] === arr1Obj[identifier])
  );
