// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
	mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jlc2NlbmRvY2h1IiwiYSI6ImNreHcxZGQ4bjRiZ2czMXF3NGZlanUwOHUifQ.1iEERJ4M83PNKmIJ8pH1Qg';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-87.62399291992188, 41.64448547363281],
        zoom: 16
    });
    var arr = null;
    $.ajax({
    'async': false,
    'global': false,
    'url': "/1.json",
    'dataType': "json",
    'success': function (data) {
        arr = data;
    }
});

    map.on('load', () => {
        map.addSource('places', {
            'type': 'geojson',
            'data': arr
        });
        // Add a layer showing the places.
        map.addLayer({
            'id': 'places',
            'type': 'circle',
            'source': 'places',
            'paint': {
                'circle-color': [
                    'match',
                    ['get', 'label_type'],
                    'SurfaceProblem',
                    '#fbb03b',
                    'NoSidewalk',
                    '#223b53',
                    /* other */ '#ccc'
                    ],
                'circle-radius': 5,
                'circle-stroke-width': 0,
                'circle-stroke-color': '#ffffff'
            }
        });

        // Create a popup, but don't add it to the map yet.
        const popup = new mapboxgl.Popup({
            closeButton: true,
            closeOnClick: false
        });

        map.on('mouseenter', 'places', (e) => {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            // Copy coordinates array.
            const coordinates = e.features[0].geometry.coordinates.slice();
            const label_type = e.features[0].properties.label_type;
            const severity = e.features[0].properties.severity;
            const url = e.features[0].properties.img_url;
            const img = "<img width = 460px src=" +"'" + url + "'" + "/>"
            const user = e.features[0].properties.username;
  
            

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(coordinates).setHTML("<strong>Label Type:</strong> " + label_type + "<br><strong>Severity:</strong> " + severity +"<br><strong>User:</strong> " + user + img).addTo(map);
        });

        // map.on('mouseleave', 'places', () => {
        //     map.getCanvas().style.cursor = '';
        //     popup.remove();
        // });
    });