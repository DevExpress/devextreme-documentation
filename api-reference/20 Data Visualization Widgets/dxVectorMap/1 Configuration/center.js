var i = 0;

$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/africa.txt',
            palette: 'Soft',
            paletteSize: 10,
            customize: function () {
                return { paletteIndex: i++ % 10 };
            }
        }],
        zoomFactor: 4.5,
        center: [20, 2]
    });
});