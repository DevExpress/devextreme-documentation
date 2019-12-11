$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt',
            palette: 'Soft Pastel',
            paletteSize: 9,
            customize: function (elements) {
                $.each(elements, function (i, element) {
                    element.applySettings({ paletteIndex: i % 9 });
                });
            }
        }],
        tooltip: {
            enabled: true,
            customizeTooltip: function () {
                return {
                    text: this.attribute('name')
                };
            }
        }
    });

    $('#dropdownListSelector').change(function () {
        var vectorMap = $('#mapContainer').dxVectorMap('instance');
        vectorMap.option('layers[0].dataSource', '/Content/data/vectorMap-sources/' + this.value + '.txt')
    });
});