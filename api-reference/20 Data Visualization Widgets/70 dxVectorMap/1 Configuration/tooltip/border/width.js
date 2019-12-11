var i = 0;

$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt',
            palette: 'Pastel',
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
                width: 4
            }
        }
    });
});