   $(document).ready(function () {

			//Open street  Map
	var coord = [25.640020, -80.438220]; // <--- coordinates here

	var map = L.map('map-canvas', { scrollWheelZoom:false}).setView(coord, 10);

	 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 22,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
	}).addTo(map);

	// custom icon
	var customIcon = L.icon({
		iconUrl: '../dog_pin.png',
		  	iconSize:     [110, 110], // size of the icon
			iconAnchor:   [32, 63] // point of the icon which will correspond to marker's location
		});

	// marker object, pass custom icon as option, add to map         
	var marker = L.marker(coord, {icon: customIcon}).addTo(map);
		});