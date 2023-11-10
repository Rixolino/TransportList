var map = L.map('map');

// Carica le tile della mappa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Carica i dati sui mezzi pubblici
var amtabLayer = new L.GeoJSON.AJAX('https://api.amtab.it/v1/mezzi_pubblici');
amtabLayer.addTo(map);

// Zoom sulla città di Bari
map.setView([41.1283, 16.8482], 13);
