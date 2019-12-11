$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt'
        }]
    });

    $('#changeContainerSizeButton').click(function () {
        var map = $('#mapContainer').dxVectorMap('instance');
        if ($('#mapContainer').height() > 400 || $('#mapContainer').width() > 700) {
            $('#mapContainer').height(400);
            $('#mapContainer').width(700);
        } else {
            $('#mapContainer').height(500);
            $('#mapContainer').width(800);
        }
        map.render();
    });
});