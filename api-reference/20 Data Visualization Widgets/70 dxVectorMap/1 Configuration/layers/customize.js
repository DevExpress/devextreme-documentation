var mostPopulatedCountries = ['China', 'India', 'United States', 'Indonesia', 'Brazil', 'Pakistan', 'Nigeria', 'Bangladesh', 'Russia', 'Japan'];

$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt',
            color: 'powderblue',
            hoverEnabled: false,
            customize: function (elements) {
                for (i in elements) {
                    if ($.inArray(elements[i].attribute('name'), mostPopulatedCountries) > -1) {
                        elements[i].applySettings({ color: 'dodgerblue' });
                    }
                }
            }
        }]
    });
});