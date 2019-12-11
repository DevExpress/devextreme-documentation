$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt'
        }],
        tooltip: {
            enabled: true,
            customizeTooltip: function () {
                return {
                    text: this.attribute('name')
                };
            }
        }
    });

    $('#enableControlBarAndTooltipCheckbox').change(function () {
        var map = $('#mapContainer').dxVectorMap('instance');
        map.option({
            controlBar: {
                enabled: this.checked
            },
            tooltip: {
                enabled: this.checked
            }
        });
    });
});