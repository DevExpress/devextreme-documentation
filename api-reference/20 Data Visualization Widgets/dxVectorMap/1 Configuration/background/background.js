$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt'
        }],
        background: {
            borderColor: 'dodgerblue',
            color: 'paleturquoise'
        }
    });
});