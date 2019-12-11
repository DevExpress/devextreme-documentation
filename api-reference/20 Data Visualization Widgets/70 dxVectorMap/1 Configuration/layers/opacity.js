var markers = [{
    coordinates: [-121.2808, 38.3320],
    attributes: {
        text: 'Sacramento',
        value: 10
    }
    }, {
    coordinates: [-97.75, 30.25],
    attributes: {
        text: 'Austin',
        value: 7
    }
}, {
    coordinates: [-73.7572, 42.6525],
    attributes: {
        text: 'Albany',
        value: 17
    }
}, {
    coordinates: [-84.2533, 30.455],
    attributes: {
        text: 'Tallahassee',
        value: 20
    }
}, {
    coordinates: [-89.65, 39.783],
    attributes: {
        text: 'Springfield',
        value: 24
    }
}];

$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
            hoverEnabled: false
        }, {
            dataSource: markers,
            elementType: 'bubble',
            dataField: 'value',
            opacity: 0.6
        }],
        bounds: [-135, 60, -65, 20],
        zoomFactor: 1.25,
    });
});