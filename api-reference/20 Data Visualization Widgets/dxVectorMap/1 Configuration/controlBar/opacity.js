$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt'
        }],
        zoomFactor: 3.2,
        controlBar: {
            enabled: true,
            opacity: 0.3
        }
    });

    $("#slider").dxSlider({
        min: 0,
        value: 0.3,
        max: 1,
        step: 0.01,
        onValueChanged: function (e) {
            $('#sliderValue').html(e.value);
            var map = $('#mapContainer').dxVectorMap('instance');
            map.option("controlBar.opacity", e.value);
        }
    });
});