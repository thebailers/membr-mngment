import { daysOfWeekArray, weekdaysLowerCase } from "./utils";

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

export const addMinutes = (date: Date, minutes: number) => {
  return new Date(date.getTime() + minutes * 60000);
};

export const subtractMinutes = (date: Date, minutes: number) => {
  return new Date(date.getTime() - minutes * 60000);
};

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
