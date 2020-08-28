mapboxgl.accessToken = 'pk.eyJ1IjoiYmVhcno0bHlmIiwiYSI6ImNrZWNhMGFrZjAyNjMyenA5NzI5emp6c3QifQ.TAZD8AYKlTOX0JPvaXTROg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/bearz4lyf/ckedfxhpb0hkl1apmtw14evht', // stylesheet location
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});


document.getElementById('fit').addEventListener('click', function() {
    map.fitBounds([
    [32.958984, -5.353521],
    [43.50585, 5.615985]
    ]);
    map.zoomTo(17, {duration: 1200})
    });