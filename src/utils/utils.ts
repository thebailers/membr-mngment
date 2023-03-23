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

/**
 * Returns the given string with any dots (".") removed.
 * @param {string} time - The string to remove dots from.
 * @returns {string} The given string with any dots (".") removed.
 */
export const removeDots = (str: String): string => str.replace(".", "");

/**

Returns the lowercase version of the given string.
@param {string} day - The string to convert to lowercase.
@returns {string} The lowercase version of the given string.
*/
export const urlFriendlyWeekday = (day: String): string => day.toLowerCase();

/**

Returns the given string with the first letter capitalized.
@param {string} string - The string to capitalize the first letter of.
@returns {string} The given string with the first letter capitalized.
*/
export const capitaliseFirstLetter = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);

/**

Returns the index of the given weekday string in the daysOfWeekArray.
@param {string} day - The lowercase weekday string to search for in the daysOfWeekArray.
@returns {number} The index of the given weekday string in the daysOfWeekArray.
*/
export const getWeekdayNumberFromURL = (day: weekdaysLowerCase): number =>
  daysOfWeekArray.indexOf(capitaliseFirstLetter(day));

/**
 * Returns the day of the week string for today.
 * @returns {string} The day of the week string for today.
 */
export const getTodayDOWString = (): string =>
  daysOfWeekArray[new Date().getDay()];

/**
 * Returns the day of the week string from a given URL after replacing a specific pattern.
 * @param {string} url - The URL to extract the day of the week string from.
 * @param {string} replacePattern - The pattern to replace in the URL.
 * @returns {string} The day of the week string extracted from the URL.
 */
export const getDayOfWeekStringFromUrl = (
  url: string,
  replacePattern: string
): string => url.replace(replacePattern, "");

/**
 * Returns the day of the week as a string, given the day index.
 * @param {number} d - The day index. Should be an integer value from 0 to 6, where 0 represents Sunday and 6 represents Saturday.
 * @returns {string} - The day of the week as a string.
 */
export const getDayStringFromDayIndex = (d: number) =>
  daysOfWeekArray[d % daysOfWeekArray.length];

/**
 * Removes duplicates from an array of Member objects based on their "id" property.
 * @param {Member[]} arr1 - The first array of Member objects.
 * @param {Member[]} arr2 - The second array of Member objects.
 * @returns {Member[]} - An array of Member objects that are present in arr1 but not in arr2.
 */
export const removeDuplicates = (arr1: Member[], arr2: Member[]) =>
  arr1.filter(
    (array1Item) => arr2.findIndex((e) => e.id === array1Item.id) === -1
  );

/**
 * Checks if any object in the first array exists in the second array, based on the specified identifier.
 * @template T - The type of objects in the arrays.
 * @param {T[]} arr1 - The first array to check.
 * @param {T[]} arr2 - The second array to check.
 * @param {keyof T} identifier - The identifier to compare the objects with.
 * @returns {boolean} Whether any object in the first array exists in the second array.
 */
export const duplicateObjectInArrays = <T>(
  arr1: T[],
  arr2: T[],
  identifier: keyof T
): boolean =>
  arr1.some((arr1Obj) =>
    arr2.some((arr2Obj) => arr2Obj[identifier] === arr1Obj[identifier])
  );
