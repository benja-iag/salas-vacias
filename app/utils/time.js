export const blocksArray = [
  "08:30:00 - 09:50:00",
  "10:00:00 - 11:20:00",
  "11:30:00 - 12:50:00",
  "13:00:00 - 14:20:00",
  "14:30:00 - 15:50:00",
  "16:00:00 - 17:20:00",
  "17:25:00 - 18:45:00",
];
/**
 *
 * @param inputHour hora en formato HH:MM:SS
 * @returns
 */
export const convertHourToBlock = (inputHour) => {
  if (typeof inputHour !== "string") {
    console.log("Error: convertHourToBlock: invalid inputHour");
    return -1;
  }
  const hourSplit = inputHour.split(":");
  const hour = hourSplit[0].padStart(2, "0");
  const minute = hourSplit[1].padStart(2, "0");
  const second = hourSplit[2].padStart(2, "0");
  const fullHour = `${hour}:${minute}:${second}`; // always in format HH:MM:SS

  /*
  La idea es ir comparando la hora inicial de un bloque (8:30:00)
  con la hora actual y la hora final de un bloque (9:50:00)
  */
  for (let i = 0; i < blocksArray.length; i++) {
    let start = blocksArray[i].split(" - ")[0];
    let finish = blocksArray[i].split(" - ")[1];
    if (fullHour >= start && fullHour <= finish) {
      return i + 1;
    }
  }
  return 1;
};

export const convertDayToString = (day) => {
  const dict = {
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
  };

  if (dict[day]) {
    return dict[day];
  } else {
    console.log("Error: convertDayToString: invalid day");
    return "";
  }
};

export const actualBlock = () => {
  const date = new Date();
  const fullHour = date.toTimeString().split(" ")[0];
  return convertHourToBlock(fullHour);
};

export const actualDay = () => {
  const date = new Date();
  return date.getDay();
};
