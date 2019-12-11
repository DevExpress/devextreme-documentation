var i = 0;

$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt',
            palette: 'Ocean',
            paletteSize: 5,
            customize: function () {
                return {
                    paletteIndex: i++ % 5
                };
            }
        }],
        tooltip: {
            enabled: true,
            border: { color: 'royalblue' },
            customizeTooltip: function () {
                return {
                    text: this.attribute('name')
                };
            },
            font: {
                color: 'dodgerblue'
            }
        }
    });
});