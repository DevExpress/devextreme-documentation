var markers = [{
    coordinates: [-121.2808, 38.3320],
    attributes: {
        text: 'Sacramento'
    }
}, {
    coordinates: [-97.75, 30.25],
    attributes: {
        text: 'Austin'
    }
}, {
    coordinates: [-73.7572, 42.6525],
    attributes: {
        text: 'Albany'
    }
}, {
    coordinates: [-84.2533, 30.455],
    attributes: {
        text: 'Tallahassee'
    }
}, {
    coordinates: [-89.65, 39.783],
    attributes: {
        text: 'Springfield'
    }
}, {
    coordinates: [-76.8756, 40.2697],
    attributes: {
        text: 'Harrisburg'
    }
}, {
    coordinates: [-82.9833, 39.9833],
    attributes: {
        text: 'Columbus'
    }
}, {
    coordinates: [-84.39, 33.755],
    attributes: {
        text: 'Atlanta'
    }
}, {
    coordinates: [-84.5467, 42.7336],
    attributes: {
        text: 'Lansing'
    }
}, {
    coordinates: [-78.6447, 35.8189],
    attributes: {
        text: 'Raleigh'
    }
}];

$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
            hoverEnabled: false
        }, {
            type: 'markers',
            dataSource: markers
        }],
        bounds: [-135, 60, -65, 20],
        zoomFactor: 1.25,
    });

    var highlightedMarker = 0;
    $("#buttonContainer").dxButton({
        text: 'Highlight next marker',
        onClick: function () {
            var map = $('#mapContainer').dxVectorMap('instance');
            var markers = map.getLayerByIndex(1).getElements();
            highlightedMarker %= markers.length;
            if (highlightedMarker > 0)
                markers[highlightedMarker - 1].applySettings({ color: '#ba4d51' });
            if (highlightedMarker == 0)
                markers[markers.length - 1].applySettings({ color: '#ba4d51' });
            markers[highlightedMarker++].applySettings({ color: 'powderblue' });
        }
    });
});