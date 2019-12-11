var i = 0;

$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt',
            palette: 'Default',
            paletteSize: 10,
            customize: function () {
                return {
                    paletteIndex: i++ % 10
                };
            }
        }],
        size: {
            width: 700,
            height: 400
        }
    });
});