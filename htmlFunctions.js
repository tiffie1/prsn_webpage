import {
    createLineTable,
    updateLineTable
} from "./chartConfig.js";

export function rowFill(station) {
    return `
    <div class="table-item label"> 

		<h2>Mountpoint: <strong>/${station.MountPoint}</strong></h2>
		<p>IP Address: <i>${station.IPAddress}</i></p>
		<p>Identifier: <i>${station.Identifier}</i></p>
		<p>Maximum Latency: <i id="${station.MountPoint}-MaxLat">0</i></p>
		<p>Minimum Latency: <i id="${station.MountPoint}-MinLat">0</i></p>
		<p>Average Latency: <i id="${station.MountPoint}-AvgLat">0</i></p>
		<p>Root Mean Square: <i id="${station.MountPoint}-rms">0</i></p>
				
	</div>
	<div class="graph"><canvas id="${station.MountPoint}-LatTable" alt="Line Chart in Chart.js"></canvas></div>`;
}

export function createGraph(station, dateObj) {
    station.Chart = createLineTable(`${station.MountPoint}-LatTable`, station.Latency, dateObj);
}

export function updateRow(station, dateObj) {
    updateLineTable(station.Chart, station.Latency, dateObj);
    document.getElementById(`${station.MountPoint}-MaxLat`).innerHTML = station.MaxLatency;
    document.getElementById(`${station.MountPoint}-MinLat`).innerHTML = station.MinLatency;
    document.getElementById(`${station.MountPoint}-AvgLat`).innerHTML = station.AverageLatency;
    document.getElementById(`${station.MountPoint}-rms`).innerHTML = station.RMS;
}