var i = 0;

var greenTheme = {
    name: 'mapGreenTheme',
    map: {
        background: {
            color: 'lightgreen'
        },
        controlBar: {
            borderColor: 'seagreen',
            color: 'darkseagreen'
        }
    }
};

DevExpress.viz.registerTheme(greenTheme, 'generic.light');

$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt'
        }],
        theme: 'mapGreenTheme'
    });
});