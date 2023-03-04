import { ClassDetail } from "../components/class-list/class-list.component";

export enum classTimes {
  morning0930 = "0930",
  morning1015 = "1015",
  morning1100 = "1100",
  morning1130 = "1130",
  afternoon1600 = "1600",
  afternoon1645 = "1645",
  evening1800 = "1800",
  evening1830 = "1830",
  evening1930 = "1900",
}

export enum classTypes {
  cubs = "cubs",
  juniors = "juniors",
  adults = "adults",
}

export enum DaysOfTheWeek {
  monday = "Monday",
  tuesday = "Tuesday",
  wednesday = "Wednesday",
  thursday = "Thursday",
  friday = "Friday",
  saturday = "Saturday",
  sunday = "Sunday",
}

export enum classLength {
  cubs = 45,
  fundamentalsJuniors = 60,
  mid = 90,
  standard = 120,
}

export const classesData: ClassDetail[] = [
  {
    id: 1,
    time: classTimes.evening1830,
    type: classTypes.adults,
    classLength: classLength.standard,
    dayOfWeek: DaysOfTheWeek.monday,
  },
  {
    id: 2,
    time: classTimes.morning1100,
    type: classTypes.adults,
    classLength: classLength.standard,
    dayOfWeek: DaysOfTheWeek.tuesday,
  },
  {
    id: 3,
    time: classTimes.afternoon1600,
    type: classTypes.cubs,
    classLength: classLength.cubs,
    dayOfWeek: DaysOfTheWeek.wednesday,
  },
  {
    id: 4,
    time: classTimes.afternoon1645,
    type: classTypes.juniors,
    classLength: classLength.fundamentalsJuniors,
    dayOfWeek: DaysOfTheWeek.wednesday,
  },
  {
    id: 5,
    time: classTimes.evening1800,
    type: classTypes.adults,
    classLength: classLength.fundamentalsJuniors,
    dayOfWeek: DaysOfTheWeek.wednesday,
  },
  {
    id: 6,
    time: classTimes.evening1930,
    type: classTypes.adults,
    classLength: classLength.standard,
    dayOfWeek: DaysOfTheWeek.wednesday,
  },
  {
    id: 7,
    time: classTimes.morning1100,
    type: classTypes.adults,
    classLength: classLength.standard,
    dayOfWeek: DaysOfTheWeek.thursday,
  },
  {
    id: 8,
    time: classTimes.evening1830,
    type: classTypes.adults,
    classLength: classLength.standard,
    dayOfWeek: DaysOfTheWeek.thursday,
  },
  {
    id: 9,
    time: classTimes.evening1830,
    type: classTypes.adults,
    classLength: classLength.standard,
    dayOfWeek: DaysOfTheWeek.friday,
  },
  {
    id: 10,
    time: classTimes.morning1100,
    type: classTypes.adults,
    classLength: classLength.standard,
    dayOfWeek: DaysOfTheWeek.saturday,
  },
  {
    id: 11,
    time: classTimes.morning0930,
    type: classTypes.cubs,
    classLength: classLength.cubs,
    dayOfWeek: DaysOfTheWeek.sunday,
  },
  {
    id: 12,
    time: classTimes.morning1015,
    type: classTypes.juniors,
    classLength: classLength.fundamentalsJuniors,
    dayOfWeek: DaysOfTheWeek.sunday,
  },
  {
    id: 13,
    time: classTimes.morning1130,
    type: classTypes.adults,
    classLength: classLength.mid,
    dayOfWeek: DaysOfTheWeek.sunday,
  },
];
