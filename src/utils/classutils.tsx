import { ClassDetail } from "../components/class-list/class-list.component";

export enum classTimes {
  morning0930 = "09.30",
  morning1015 = "10.15",
  morning1100 = "11.00",
  morning1130 = "11.30",
  afternoon1600 = "16.00",
  afternoon1645 = "16.45",
  evening1800 = "18.00",
  evening1830 = "18.30",
  evening1930 = "19.00",
}

export enum classTypes {
  cubs = "cubs",
  juniors = "juniors",
  adults = "adults",
}

export enum daysOfTheWeek {
  monday = "Monday",
  tuesday = "Tuesday",
  wednesday = "Wednesday",
  thursday = "Thursday",
  friday = "Friday",
  saturday = "Saturday",
  sunday = "Sunday",
}

export enum classLength {
  cubs = "45 mins",
  mid = "90 mins",
  fundamentalsJuniors = "1 hour",
  standard = "2 hours",
}

export const classesData: ClassDetail[] = [
  {
    id: 1,
    time: classTimes.evening1830,
    type: classTypes.adults,
    classLength: classLength.standard,
    dayOfWeek: daysOfTheWeek.monday,
  },
  {
    id: 2,
    time: classTimes.morning1100,
    type: classTypes.adults,
    classLength: classLength.standard,
    dayOfWeek: daysOfTheWeek.tuesday,
  },
  {
    id: 3,
    time: classTimes.afternoon1600,
    type: classTypes.cubs,
    classLength: classLength.cubs,
    dayOfWeek: daysOfTheWeek.wednesday,
  },
  {
    id: 4,
    time: classTimes.afternoon1645,
    type: classTypes.juniors,
    classLength: classLength.fundamentalsJuniors,
    dayOfWeek: daysOfTheWeek.wednesday,
  },
  {
    id: 5,
    time: classTimes.evening1800,
    type: classTypes.adults,
    classLength: classLength.fundamentalsJuniors,
    dayOfWeek: daysOfTheWeek.wednesday,
  },
  {
    id: 6,
    time: classTimes.evening1930,
    type: classTypes.adults,
    classLength: classLength.standard,
    dayOfWeek: daysOfTheWeek.wednesday,
  },
  {
    id: 7,
    time: classTimes.morning1100,
    type: classTypes.adults,
    classLength: classLength.standard,
    dayOfWeek: daysOfTheWeek.thursday,
  },
  {
    id: 8,
    time: classTimes.evening1830,
    type: classTypes.adults,
    classLength: classLength.standard,
    dayOfWeek: daysOfTheWeek.thursday,
  },
  {
    id: 9,
    time: classTimes.evening1830,
    type: classTypes.adults,
    classLength: classLength.standard,
    dayOfWeek: daysOfTheWeek.friday,
  },
  {
    id: 10,
    time: classTimes.morning1100,
    type: classTypes.adults,
    classLength: classLength.standard,
    dayOfWeek: daysOfTheWeek.saturday,
  },
  {
    id: 11,
    time: classTimes.morning0930,
    type: classTypes.cubs,
    classLength: classLength.cubs,
    dayOfWeek: daysOfTheWeek.sunday,
  },
  {
    id: 12,
    time: classTimes.morning1015,
    type: classTypes.juniors,
    classLength: classLength.fundamentalsJuniors,
    dayOfWeek: daysOfTheWeek.sunday,
  },
  {
    id: 13,
    time: classTimes.morning1130,
    type: classTypes.adults,
    classLength: classLength.mid,
    dayOfWeek: daysOfTheWeek.sunday,
  },
];
