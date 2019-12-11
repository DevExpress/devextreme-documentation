var i = 0;

$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt',
            palette: 'Soft',
            paletteSize: 10,
            customize: function () {
                return { paletteIndex: i++ % 10 };
            }
        }],
        controlBar: {
            color: 'cornsilk',
            borderColor: 'goldenrod'
        }
    });
});