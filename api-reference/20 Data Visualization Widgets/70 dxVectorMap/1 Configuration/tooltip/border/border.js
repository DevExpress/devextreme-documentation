var i = 0;

$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt',
            palette: 'Violet',
            paletteSize: 5,
            customize: function () {
                return {
                    paletteIndex: i++ % 5
                };
            }
        }],
        tooltip: {
            enabled: true,
            customizeTooltip: function () {
                return {
                    text: this.attribute('name')
                };
            },
            border: {
                color: 'plum',
                opacity: 0.5,
                width: 2
            }
        }
    });
});