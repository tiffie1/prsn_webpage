/**
 * Adds a data point to the end of the array and removes the first element.
 * @param {intergerArray} __array Array of current data.
 * @param {interger} __data Data to be pushed into the array.
 * @returns The updated array.
 */
export function arrayAddData(__array, __data) {
  __array.push(__data);
  __array.shift();
  return __array;
}

/**
 * Creates a data array of 11 zeros. Used for latency data.
 * @returns Array of 11 zeros.
 */
export function createDataArray() {
  let dataArray = [];
  dataArray.length = 11;
  dataArray.fill(0);

  return dataArray;
}


/**
 * Creates and returns the structure needed for a station.
 * @param {string} mountPoint Mountpoint code for the station.
 * @param {string} IPAddress IP address for the station. Used in display only.
 * @param {string} identifier Short description of station location. Used in display only.
 * @param {intergerArray} latencyArray Array of data to be used in the chart.
 * @returns Data structure for a station.
 */
export function createStationDataStructure(mountPoint, IPAddress, identifier, latencyArray) {
  return {
    MountPoint: mountPoint,
    IPAddress: IPAddress,
    Identifier: identifier,
    Latency: latencyArray,
    MaxLatency: 0,
    MinLatency: 0,
    RMS: 0,
    AverageLatency: 0,
    Chart: null
  };
}
