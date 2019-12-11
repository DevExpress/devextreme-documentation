var i = 0;

$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
            palette: 'Ocean',
            paletteSize: 10,
            customize: function () {
                return { paletteIndex: i++ % 10 };
            }
        }],
        bounds: [-135, 60, -65, 20]
    });
});