import {
  daysOfWeekArray,
  removeDots,
  urlFriendlyWeekday,
  capitaliseFirstLetter,
  getTodayDOWString,
} from "../utils";

// urlFriendlyWeekday

describe("utils", () => {
  test("Days of the week array contains all the days of the week", () => {
    expect(daysOfWeekArray.length).toBe(7);
    expect(daysOfWeekArray[0]).toBe("Sunday");
    expect(daysOfWeekArray[1]).toBe("Monday");
    expect(daysOfWeekArray[2]).toBe("Tuesday");
    expect(daysOfWeekArray[3]).toBe("Wednesday");
    expect(daysOfWeekArray[4]).toBe("Thursday");
    expect(daysOfWeekArray[5]).toBe("Friday");
    expect(daysOfWeekArray[6]).toBe("Saturday");
  });

  test("UrlFriendlyTime correctly displays a url friendly time", () => {
    const time = "16.00";
    const formattedTime = removeDots(time);
    expect(formattedTime).toBe("1600");
  });

  test("UrlFriendlyWeekday correctly lowercases a string weekday value", () => {
    const day = "Monday";
    const formattedDay = urlFriendlyWeekday(day);
    expect(formattedDay).toBe("monday");
    expect(formattedDay).not.toBe("Monday");
  });

  test("CapitaliseFirstLetter correctly capitalises a string value", () => {
    const str = "lorem";
    const formattedStr = capitaliseFirstLetter(str);
    expect(formattedStr).toBe("Lorem");
    expect(formattedStr).not.toBe("lorem");
  });

  test("get today DOW string", () => {
    const today = daysOfWeekArray[new Date().getDay()];
    expect(getTodayDOWString()).toBe(today);
  });
});
