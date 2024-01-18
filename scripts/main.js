/* 
  Everything has to be inside the window.onload function to guarantee that all the data
  taken from Chart.js loads before it is used.
*/
import {
  arrayAddData,
  createStationDataStructure,
  createDataArray
} from "./arrayManip.js";
import {
  createGraph,
  rowFill,
  updateRow
} from "./htmlFunctions.js";

window.onload = function() {
  /*  ---  FUNCTIONS  ---  */

  function createRow(rowName, station, dateObj) {
    document.getElementById(rowName).innerHTML = rowFill(station);
    createGraph(station, dateObj);
  }

  /*  ---  VARIABLES  ---  */
  let intervalID;
  let test = true;

  /*  ---  TABLE CONFIGURATION  --- */
  Chart.defaults.font.family = 'monospace';
  Chart.defaults.animation = false;

  /*  ---  CHART DATA  ---  */
  let numDataHUPR = createDataArray();

  /* CAN BE CHANGED AT WILL TO MANIPULATE CHART */
  /* THE LAST ELEMENT OF THE ARRAY IS THE MOST RECENT DATA*/ 
 
  let HUPR = createStationDataStructure('HUPR', '136.145.50.39', 'Humacao, Puerto Rico',
  numDataHUPR);

  /*let GEOL = createStationDataStructure('GEOL', '126.145.21.13', 'Geology Building',
  numDataGEOL);*/

  /*  ---  MAIN  ---  */

  let date = new Date();
  createRow('row1', HUPR, date);
  updateRow(HUPR, date);

  arrayAddData(HUPR.Latency, 100);
  updateRow(HUPR, date);

  arrayAddData(HUPR.Latency, 200);
  updateRow(HUPR, date);

  arrayAddData(HUPR.Latency, 300);
  updateRow(HUPR, date);

  numDataHUPR.fill(0);
  updateRow(HUPR, date);
}
