import { daysOfWeekArray, weekdaysLowerCase } from "./utils";

/**
Returns the date of the next occurrence of the specified weekday, relative to the provided date.
@param {string} dayString - The name of the weekday, in lowercase, to search for (e.g. 'monday').
@param {Date} date - The date to start searching from.
@returns {Date} The date of the next occurrence of the specified weekday.
*/
export const getDateOfNextWeekday = (
  dayString: weekdaysLowerCase,
  date: Date
) => {
  const dayIndex = daysOfWeekArray.indexOf(dayString);
  const dateIndex = date.getDay();
  if (dayIndex === dateIndex) return date;
  const nextDate = new Date(date);
  while (nextDate.getDay() !== dayIndex) {
    nextDate.setDate(nextDate.getDate() + 1);
  }
  return nextDate;
};

/**

Returns a new Date object that is the specified number of minutes after the provided date.
@param {Date} date - The date to add minutes to.
@param {number} minutes - The number of minutes to add to the provided date.
@returns {Date} A new Date object that is minutes after the provided date.
*/
export const addMinutes = (date: Date, minutes: number) => {
  return new Date(date.getTime() + minutes * 60000);
};

/**

Returns a new Date object that is the specified number of minutes before the provided date.
@param {Date} date - The date to subtract minutes from.
@param {number} minutes - The number of minutes to subtract from the provided date.
@returns {Date} A new Date object that is minutes before the provided date.
*/
export const subtractMinutes = (date: Date, minutes: number) => {
  return new Date(date.getTime() - minutes * 60000);
};

/**

Returns a new Date object with the specified hours, minutes, and seconds, based on the given date string.
@param {Date} dateString - The date string used to create the new Date object.
@param {number} hours - The hours to set in the new Date object.
@param {number} minutes - The minutes to set in the new Date object.
@param {number} seconds - The seconds to set in the new Date object.
@returns {Date} A new Date object with the specified hours, minutes, and seconds.
*/
export const getFormattedDate = (
  dateString: Date,
  hours: number,
  minutes: number,
  seconds: number
) => {
  var date = new Date(dateString);
  date.setHours(hours, minutes, seconds); // Set hours, minutes and seconds
  return date;
};

/**
Returns the start and end times for class sign-in period based on provided parameters.
@param {Date} date - The date of the class sign-in period.
@param {number} hours - The hours of the class sign-in period.
@param {number} mins - The minutes of the class sign-in period.
@param {string} dur - The duration of the class.
@returns {{classSigninStart: Date, classSigninEnd: Date}} An object containing the start and end times for the class sign-in period.
*/
export const getClassSigninTimes = (
  date: Date,
  hours: number,
  mins: number,
  dur: string
) => {
  const classSigninStart = subtractMinutes(
    getFormattedDate(date, hours, mins, 0),
    15
  );
  const classSigninEnd = addMinutes(
    getFormattedDate(date, hours, mins, 0),
    +dur + 30
  );

  return { classSigninStart, classSigninEnd };
};

/**
Get the date d number of days from today.
@param {number} d - The number of days from today.
@returns {Date} The date d number of days from today.
*/
export const getDateXDaysFromToday = (d: number) => {
  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);
  return new Date(today.setDate(today.getDate() + d));
};

/**
Compares two dates ignoring time.
@param {Date} d1 - The first date to compare.
@param {Date} d2 - The second date to compare.
@returns {boolean} Whether the two dates have the same year, month and day.
*/
export const compareTwoDatesIgnoringTime = (d1: Date, d2: Date) => {
  const n1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
  const n2 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());
  return n1.getTime() === n2.getTime();
};
