var i = 0;

$(function () {
    $('#mapContainer').dxVectorMap({
        bounds: [-135, 60, -65, 20],
        zoomFactor: 1.25,
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
            palette: 'Bright',
            paletteSize: 5,
            customize: function () {
                return {
                    paletteIndex: i++ % 5
                };
            }
        }],
        controlBar: { enabled: false }
    });

    $("#getSVG").click(function () {
        var map = $('#mapContainer').dxVectorMap('instance');
        $('#widgetSVG').html(map.svg());
    });
});