function GetMap() {
    var directionsManager;
    var navigationBarMode = Microsoft.Maps.NavigationBarMode;
    var map = new Microsoft.Maps.Map('#main-map', {
        navigationBarMode: navigationBarMode.minified,
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,

    });


    //Request the user's location
    navigator.geolocation.getCurrentPosition(function (position) {
        enableHighAccuracy = true;
        var loc = new Microsoft.Maps.Location(
            position.coords.latitude,
            position.coords.longitude);

        //Add a pushpin at the user's location.
        var pin = new Microsoft.Maps.Pushpin(loc);
        map.entities.push(pin);

        //Center the map on the user's location.
        map.setView({ center: loc, zoom: 15 });
    });

    //Load the directions module.
    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
        //Create an instance of the directions manager.
        directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);

        //Specify where to display the route instructions.
        directionsManager.setRenderOptions({ itineraryContainer: '#directionsItinerary' });

        //Specify the where to display the input panel
        directionsManager.showInputPanel('directionsPanel');
    });

}
