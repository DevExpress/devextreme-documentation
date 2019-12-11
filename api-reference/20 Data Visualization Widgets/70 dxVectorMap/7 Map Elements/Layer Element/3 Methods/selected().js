var markers = [{
    coordinates: [-121.2808, 38.3320],
    text: 'Sacramento'
}, {
    coordinates: [-97.75, 30.25],
    text: 'Austin'
}, {
    coordinates: [-73.7572, 42.6525],
    text: 'Albany'
}, {
    coordinates: [-84.2533, 30.455],
    text: 'Tallahassee'
}, {
    coordinates: [-89.65, 39.783],
    text: 'Springfield'
}, {
    coordinates: [-76.8756, 40.2697],
    text: 'Harrisburg'
}, {
    coordinates: [-82.9833, 39.9833],
    text: 'Columbus'
}, {
    coordinates: [-84.39, 33.755],
    text: 'Atlanta'
}, {
    coordinates: [-84.5467, 42.7336],
    text: 'Lansing'
}, {
    coordinates: [-78.6447, 35.8189],
    text: 'Raleigh'
}];

$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
            hoverEnabled: false
        }, {
            type: 'markers',
            dataSource: markers,
            selectedColor: 'powderblue',
            selectionMode: 'multiple'
        }],
        bounds: [-135, 60, -65, 20],
        zoomFactor: 1.25,
        onClick: function (info) {
            var clickedMarker = info.target;
            if (clickedMarker != null && clickedMarker.layer.type == "marker")
                clickedMarker.selected(!clickedMarker.selected());
        }
    });
});