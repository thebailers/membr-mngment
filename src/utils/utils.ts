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

/**
Removes duplicates from an array of Member objects based on their "id" property.
@param {Member[]} arr1 - The first array of Member objects.
@param {Member[]} arr2 - The second array of Member objects.
@returns {Member[]} - An array of Member objects that are present in arr1 but not in arr2.
*/
export const removeDuplicates = (arr1: Member[], arr2: Member[]) =>
  arr1.filter(
    (array1Item) => arr2.findIndex((e) => e.id === array1Item.id) === -1
  );

/**
Checks if any object in the first array exists in the second array, based on the specified identifier.
@template T - The type of objects in the arrays.
@param {T[]} arr1 - The first array to check.
@param {T[]} arr2 - The second array to check.
@param {keyof T} identifier - The identifier to compare the objects with.
@returns {boolean} Whether any object in the first array exists in the second array.
*/
export const duplicateObjectInArrays = <T>(
  arr1: T[],
  arr2: T[],
  identifier: keyof T
): boolean =>
  arr1.some((arr1Obj) =>
    arr2.some((arr2Obj) => arr2Obj[identifier] === arr1Obj[identifier])
  );
