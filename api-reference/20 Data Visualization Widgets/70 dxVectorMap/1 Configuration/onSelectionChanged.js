$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt',
            selectedBorderColor: 'white',
            selectedColor: 'lightskyblue',
            selectionMode: 'multiple'
        }],
        onClick: function (info) {
            var clickedArea = info.target;
            if (clickedArea != null && clickedArea.layer.type == "area")
                clickedArea.selected(!clickedArea.selected());
        },
        onSelectionChanged: function (info) {
            var selectedArea = info.target;
            if (selectedArea != null && selectedArea.layer.type == "area")
                selectedArea.selected() ?
                    $('#selectionSpan').html(selectedArea.attribute('name') + ' has been selected.') :
                    $('#selectionSpan').html(selectedArea.attribute('name') + ' has been deselected.');
        }
    });
});