/**
 * __data = array of data to be used in a chart. Has to be in the format returned by createData().
 * Returns the configuration for a chart.
 * These values can be changed to manipulate the chart's format.
 */
import {
  formatTimeData,
  getDateString
} from "./functions.js";

/**
 * Creates a chart using given data and returns it as an object.
 * @param {string} elementName Name of the container element.
 * @param {integer[]} numberData Array of numbers to be used as data.
 * @param {Date} dateObj Date object to collect time data from.
 * @returns The chart object.
 */
export function createLineTable(elementName, numberData, dateObj) {
  let array = [...numberData];
  let data = formatTimeData(array.reverse(), dateObj);
  return new Chart(document.getElementById(elementName), getConfigLine(data, dateObj));
}

export function updateLineTable(chart, numberData, dateObj) {
  let array = [...numberData];
  let data = formatTimeData(array.reverse(), dateObj);
  chart.data.datasets[0].data = data;
  chart.options.plugins.title.text = `${getDateString(dateObj)}  UTC-0400`;
  chart.update();
}

/**
 * Returns the configuration for a line chart.
 * @param {formatedTimeData} __data Data to be used in the chart.
 * @param {Date} timeObj Date object to collect time data from.
 * @returns Configuration for a line chart.
 */
function getConfigLine(__data, timeObj) {
  return {
    type: 'line',
    data: {
      datasets: [{
        borderColor: 'rgba(0, 165, 255, 0.8)',
        backgroundColor: 'rgba(0, 165, 255, 0.29)',
        xAxisID: 'xAxis',
        yAxisID: 'yAxis',
        data: __data,
        fill: true,
        tension: 0.1
      }]
    },
    options: {
      plugins: {
        tooltip: {
          enabled: false
        },
        legend: {
          display: false
        },
        title: {
          display: true,
          text: `${getDateString(timeObj)}  UTC-0400`,
        },
        subtitle: {
          display: true,
          text: 'Latency over the past 10 minutes',
        }
      },
      maintainAspectRatio: false,
      scales: {
        yAxis: {
          title: {
            display: true,
            text: 'Latency (seconds)'
          },
          position: 'right',
          min: 0,
          suggestedMax: 2,
        },
        xAxis: {
          type: 'time',
          time: {
            unit: 'minute'
          },
          title: {
            display: true,
            text: 'Time'

          },
        }
      }
    }
  };
}
