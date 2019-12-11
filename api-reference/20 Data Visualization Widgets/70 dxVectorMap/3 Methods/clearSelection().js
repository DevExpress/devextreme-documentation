var i = 0;

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
        bounds: [-135, 60, -65, 20],
        zoomFactor: 1.25,
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
            palette: 'Ocean',
            paletteSize: 10,
            customize: function () {
                return { paletteIndex: i++ % 10 };
            },
            selectedBorderColor: 'white',
            selectedColor: 'powderblue',
            selectionMode: 'multiple'
        }, {
            type: 'marker',
            dataSource: markers,
            selectedColor: 'deepskyblue',
            selectionMode: 'multiple',
            label: {
                enabled: true,
                dataField: 'text'
            }
        }],
        onClick: function (info) {
            var clickedElement = info.target;
            if (clickedElement != null)
                clickedElement.selected(true);
        }
    });

    $('#clearSelectionButton').click(function () {
        var map = $('#mapContainer').dxVectorMap('instance');
        map.clearSelection();
    });
});