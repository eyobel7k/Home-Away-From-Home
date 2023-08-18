// let map = L.map('map').setView([47.8276, -122.3458], 16);
let map = L.map('map', {
  center: [47.8276, -122.3458],
  zoom: 16,
  scrollWheelZoom: false // Disable scroll wheel zoom
});

// Add OpenStreetMap tiles as the base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker for the provided address
let marker = L.marker([47.8276, -122.3458]).addTo(map);
marker.bindPopup("15110 62nd Ave W, Edmonds, WA 98026").openPopup();