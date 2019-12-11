$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt',
            hoverEnabled: false,
            selectedBorderColor: 'forestgreen'
        }],
        onClick: function (info) {
            var clickedArea = info.target;
            if (clickedArea && clickedArea.layer.type == 'area')
                clickedArea.selected(!clickedArea.selected());
        }
    });
});