var markers = [{
	coordinates: [-121.2808, 38.3320],
	attributes: { name: 'Sacramento' }
}, {
	coordinates: [-97.75, 30.25],
	attributes: { name: 'Austin' }
}, {
	coordinates: [-73.7572, 42.6525],
	attributes: { name: 'Albany' }
}, {
	coordinates: [-84.2533, 30.455],
	attributes: { name: 'Tallahassee' }
}, {
	coordinates: [-89.65, 39.783],
	attributes: { name: 'Springfield' }
}, {
    coordinates: [-76.8756, 40.2697],
    attributes: { name: 'Harrisburg' }
}, {
    coordinates: [-82.9833, 39.9833],
    attributes: { name: 'Columbus' }
}, {
    coordinates: [-84.39, 33.755],
    attributes: { name: 'Atlanta' }
}, {
    coordinates: [-84.5467, 42.7336],
    attributes: { name: 'Lansing' }
}, {
    coordinates: [-78.6447, 35.8189],
    attributes: { name: 'Raleigh' }
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
        tooltip: {
            enabled: true,
            customizeTooltip: function (element) {
                if (element.layer.type == 'marker') {
                    return {
                        text: element.attribute('name')
                    };
                }
            }
        }
    });
});