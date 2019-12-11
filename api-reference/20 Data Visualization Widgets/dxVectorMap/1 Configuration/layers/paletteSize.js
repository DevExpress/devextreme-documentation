$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt',
            palette: 'Bright',
            paletteSize: 7,
            customize: function (e) {
                for (i in e) e[i].applySettings({ paletteIndex: i++ % 7 });
            }
        }]
    });
});