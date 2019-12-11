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
            customizeTooltip: function () {
                return {
                    text: this.attribute('name')
                };
            },
            border: {
                visible: true,
                color: 'mediumseagreen'
            }
        }
    });

    $('#showTooltipBorderCheckbox').change(function () {
        var map = $('#mapContainer').dxVectorMap('instance');
        map.option({
            tooltip: {
                border: { visible: this.checked }
            }
        });
    })
});