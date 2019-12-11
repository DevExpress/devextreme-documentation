$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt',
            selectedBorderColor: 'white',
            selectedColor: 'seagreen',
            selectionMode: 'single'
        }],
        onClick: function (e) {
            var clickedArea = e.target;
            if (clickedArea != undefined && clickedArea.layer.type == 'area') {
                clickedArea.selected(!clickedArea.selected());
            }
        }
    });

    $('#dropdownListSelector').change(function () {
        var vectorMap = $('#mapContainer').dxVectorMap('instance');
        vectorMap.option("layers[0].selectionMode", this.value);
    });
});