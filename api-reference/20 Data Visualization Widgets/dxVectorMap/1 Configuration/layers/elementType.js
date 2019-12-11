var markers = [{
    coordinates: [-121.2808, 38.3320],
    attributes: {
        text: 'Sacramento',
        value: 10,
        values: [9, 5, 14]
    }
}, {
    coordinates: [-97.75, 30.25],
    attributes: {
        text: 'Austin',
        value: 7,
        values: [10, 2, 3]
    }
}, {
    coordinates: [-73.7572, 42.6525],
    attributes: {
        text: 'Albany',
        value: 17,
        values: [15, 5, 14]
    }
}, {
    coordinates: [-84.2533, 30.455],
    attributes: {
        text: 'Tallahassee',
        value: 20,
        values: [6, 5, 1]
    }
}, {
    coordinates: [-89.65, 39.783],
    attributes: {
        text: 'Springfield',
        value: 24,
        values: [6, 9, 10]
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
            elementType: 'dot',
            label: {
                enabled: true,
                dataField: 'text',
                font: { size: 11 }
            }
        }],
        bounds: [-135, 60, -65, 20],
        zoomFactor: 1.25
    });

    $('#dropdownListSelector').change(function () {
        var vectorMap = $('#mapContainer').dxVectorMap('instance');
        var layers = vectorMap.option('layers')
        layers[1].elementType = this.value;
        layers[1].dataField = 'value' + (this.value == 'pie' ? 's' : '');
        vectorMap.option('layers', layers)
    });
});