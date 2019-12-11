var i = 0;

var assignData = function () {
    var map = $("#mapContainer").dxVectorMap('instance');
    map.option('layers[0].dataSource', '/Content/data/vectorMap-sources/world.txt');
};

$(function () {
    $("#mapContainer").dxVectorMap({
        layers: [{
            type: 'area',
            palette: 'Bright',
            paletteSize: 10,
            customize: function () {
                return { paletteIndex: i++ % 10 };
            }
        }],
        tooltip: {
            enabled: true,
            customizeTooltip: function () {
                return {
                    text: this.attribute('name')
                };
            }
        },
        loadingIndicator: {
            show: true
        }
    });

    $('#showLoadingIndicatorButton').click(function () {
        var map = $('#mapContainer').dxVectorMap('instance');
        map.showLoadingIndicator();
    });

    $('#hideLoadingIndicatorButton').click(function () {
        var map = $('#mapContainer').dxVectorMap('instance');
        map.hideLoadingIndicator();
    });
    
    setTimeout(assignData, 5000);
});