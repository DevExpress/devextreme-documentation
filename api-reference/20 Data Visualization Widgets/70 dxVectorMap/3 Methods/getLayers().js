var i = 0;

$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
            palette: 'Soft',
            paletteSize: 10,
            customize: function () {
                return { paletteIndex: i++ % 10 };
            },
            selectedBorderColor: 'white',
            selectedColor: 'red'
        }],
        bounds: [-135, 60, -65, 20],
        zoomFactor: 1.25
    });

    $('#selectRandomAreaButton').click(function () {
        var map = $('#mapContainer').dxVectorMap('instance');
        var layers = map.getLayers();
        var elements = layers[0].getElements();
        var random = Math.floor(Math.random() * elements.length);
        elements[random].selected(true);
    });
});