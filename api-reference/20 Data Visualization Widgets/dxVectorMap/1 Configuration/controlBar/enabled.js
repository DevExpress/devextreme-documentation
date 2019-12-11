$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt'
        }],
        controlBar: {
            enabled: true
        }
    });

    $('#enableControlBarCheckbox').change(function () {
        var vectorMap = $('#mapContainer').dxVectorMap('instance');
        vectorMap.option({
            controlBar: {
                enabled: this.checked
            }
        });
    });
});