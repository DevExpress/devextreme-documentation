$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt',
            hoverEnabled: true
        }]
    });

    $('#enableHoverCheckbox').change(function () {
        var vectorMap = $('#mapContainer').dxVectorMap('instance');
        vectorMap.option("layers[0].hoverEnabled", this.checked);
    });
});