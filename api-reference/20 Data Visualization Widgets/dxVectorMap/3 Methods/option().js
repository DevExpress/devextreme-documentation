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

    $('#enableTooltipCheckbox').change(function () {
        var map = $('#mapContainer').dxVectorMap('instance');
        map.option({
            tooltip: {
                enabled: this.checked
            }
        });
        $('#replySpan').html('tooltip | enabled: ' + map.option().tooltip.enabled);
    });
});