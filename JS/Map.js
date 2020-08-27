var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiYmVhcno0bHlmIiwiYSI6ImNrZWNhMGFrZjAyNjMyenA5NzI5emp6c3QifQ.TAZD8AYKlTOX0JPvaXTROg';
var map = new mapboxgl.Map({
  container: 'YOUR_CONTAINER_ELEMENT_ID',
  style: 'mapbox://styles/mapbox/streets-v11'
});
