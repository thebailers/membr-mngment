export const getMinsCSSGridName = (m: string) => {
  switch (m) {
    case "00":
      return "1";
    case "15":
      return "2";
    case "30":
      return "3";
    case "45":
      return "4";
    default:
      throw new Error(
        `A class time with an unsupported start or end minutes value was found. The minutes value sent is ${m}`
      );
  }
};

export const getHourCSSGridName = (h: string) => {
  switch (h) {
    case "09":
      return "nine";
    case "10":
      return "ten";
    case "11":
      return "eleven";
    case "12":
      return "twelve";
    case "13":
      return "thirteen";
    case "14":
      return "fourteen";
    case "15":
      return "fifteen";
    case "16":
      return "sixteen";
    case "17":
      return "seventeen";
    case "18":
      return "eighteen";
    case "19":
      return "nineteen";
    case "20":
      return "twenty";
    case "21":
      return "twentyone";
  }
};
