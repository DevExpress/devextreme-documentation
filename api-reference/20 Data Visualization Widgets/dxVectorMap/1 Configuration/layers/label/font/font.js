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
}];

$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
            hoverEnabled: false
        }, {
            type: 'marker',
            dataSource: markers,
            label: {
                enabled: true,
                dataField: 'text',
                font: {
                    color: 'midnightblue',
                    family: 'Verdana',
                    opacity: 0.9,
                    weight: 100,
                    size: 11
                }
            }
        }],
        bounds: [-135, 60, -65, 20],
        zoomFactor: 1.25,
    });
});