/* This file contains functions that are used by multiple files. */

/**
 * Returns a timestamp used for the chart.
 * @param {integer} offset Offset the minutes from the current time. 
 * @param {Date} timeObj Date object to collect time data from.
 * @returns String formatted as "YYYY-MM-DD HH:MM:SS".
 */
function timeStamp(offset, timeObj) {
  let updatedMinute = timeObj.getMinutes() + offset;
  let year = timeObj.getFullYear();
  let month = giveZero(timeObj.getMonth() + 1);
  let day = giveZero(timeObj.getDate());
  let hour = giveZero(timeObj.getHours());

  if (updatedMinute < 0) {
    updatedMinute += 60;
    let tempHour = giveZero(timeObj.getHours() - 1);

    return `${year}-${month}-${day} ${tempHour}:${updatedMinute}:00`;
  }
  else {
    return `${year}-${month}-${day} ${hour}:${giveZero(updatedMinute)}:00`;
  }
}

/**
 * Returns a string of the number with a leading zero if it is less than 10.
 * @param {integer} timeNumber Number to be read.
 * @returns A string.
 */
function giveZero(timeNumber) {
  if(timeNumber < 10)
    return `0${timeNumber}`;
  else
    return `${timeNumber}`;
}


/**
 * Creates an array of timestamps used for the chart.
 * @param {Date} __timeObj Date object to collect time data from. 
 * @returns Array of the current timestamp, followed by the previous 10 minutes' timestamps.
 */
function createTimeData(__timeObj) {
  let data = [];
  data.length = 11;
  for (let i = 0; i < 11; i++)
    data[i] = timeStamp(-i, __timeObj);
  return data;
}


/**
 * Creates a formatted array of data that can be used by a time chart.
 * @param {integer[]} __numData Array of numbers to be used as data.
 * @param {Date} __timeObj Date object to collect time data from.
 * @returns Array of formatted data for a chart.
 */
export function formatTimeData(__numData, __timeObj) {
  let dataTimeStamps = createTimeData(__timeObj);
  let data = [];
  data.length = 11;
  for (let i = 0; i < 11; i++) {
    data[i] = {
      x: dataTimeStamps[i],
      y: __numData[i]
    };
  }
  return data;
}

/**
 * Returns a string of the date in the format "Month Day, Year".
 * @param {Date} __timeObj Date object to get the data from.
 * @returns A string.
 */
export function getDateString(__timeObj) {
  let year = __timeObj.getFullYear();
  let month = getMonthName(__timeObj.getMonth());
  let day = __timeObj.getDate();
  return `${month} ${day}, ${year}`;
}

/**
 * Uses Date.getMonth() to get the corresponding month name.
 * @param {integer} month Number of the current month. Gotten from Date.getMonth().
 * @returns String of the current month's name.
 */
function getMonthName(month) {
  let monthName = ['January',
    'February', 'March', 'April',
    'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'
  ];
  return monthName[month];
}

/**
 * Returns the average of an array of numbers.
 * @param {integer[]} __numData Array of number data.
 * @returns The calculated average of the array.
 */
export function calculateAverage(__numData) {
  let sum = 0;
  for (let i = 0; i < __numData
    .length; i++) {
    sum += __numData[i];
  }
  return Math.round(((sum / __numData
      .length) + Number.EPSILON) *
    100) / 100;
}
