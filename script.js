const map = L.map('map').setView([49.8064, 73.0855], 11); // Karaganda

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

// Industrial zone marker
L.circle([49.8064, 73.0855], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 5000
}).addTo(map).bindPopup("High pollution industrial zone");

// Residential zone marker
L.circle([49.80, 73.10], {
  color: 'orange',
  fillColor: '#f90',
  fillOpacity: 0.4,
  radius: 3000
}).addTo(map).bindPopup("Residential heating zone");
