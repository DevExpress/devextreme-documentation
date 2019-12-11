$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt',
            selectedBorderWidth: 4
        }],
        onClick: function (e) {
            var clickedArea = e.target;
            if (clickedArea != undefined && clickedArea.layer.type == 'area') {
                clickedArea.selected(!clickedArea.selected());
            }
        }
    });
});