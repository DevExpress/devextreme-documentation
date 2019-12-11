$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt',
            palette: 'Default',
            paletteSize: 9,
            customize: function (elements) {
                $.each(elements, function (i, element) {
                    element.applySettings({ paletteIndex: i % 9 });
                });
            }
        }]
    });

    $('#dropdownListSelector').change(function () {
        var vectorMap = $('#mapContainer').dxVectorMap('instance');
        vectorMap.option('layers[0].palette', this.value);
    });
});