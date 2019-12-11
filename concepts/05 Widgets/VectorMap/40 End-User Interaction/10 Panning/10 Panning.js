var markerData = [
    { coordinates: [-87.627778, 41.881944], attributes: { text: 'Chicago' } }
];

//<!--@jQuery-->
$(function () {
    $('#vectorMapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
            palette: 'Soft',
            paletteSize: 10,
            customize: function (elements) {
                $.each(elements, function (i, element) {
                    element.applySettings({ paletteIndex: i % 10 });
                });
            }
        }, {
            type: 'marker',
            dataSource: markerData,
            label: {
                enabled: true,
                dataField: 'text'
            }
        }],
        tooltip: {
            enabled: true,
            customizeTooltip: function () {
                return { text: this.attribute('name') };
            }
        },
        onCenterChanged: function (info) {
            var updatedCoordinates = info.center;
            $('#textArea').html('');
            $('#textArea').html('Center coordinates: (' + updatedCoordinates[0].toPrecision(4) + ', ' + updatedCoordinates[1].toPrecision(4) + ')');
        },
        bounds: [-135, 60, -65, 20],
        center: [-87.627778, 41.881944] // the map is initially centered on Chicago
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var i = 0;

var viewModel = {
    text: ko.observable(),
    vectorMapInstance: {},
    vectorMapCfg: {
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
            palette: 'Soft',
            paletteSize: 10,
            customize: function (elements) {
                ko.utils.arrayForEach(elements, function (element) {
                    element.applySettings({ paletteIndex: i++ % 10 });
                });
            }
        }, {
            type: 'marker',
            dataSource: markerData,
            label: {
                enabled: true,
                dataField: 'text'
            }
        }],
        tooltip: {
            enabled: true,
            customizeTooltip: function () {
                return { text: this.attribute('name') };
            }
        },
        onCenterChanged: function (info) {
            var updatedCoordinates = info.center;
            viewModel.text('Center coordinates: (' + updatedCoordinates[0].toPrecision(4) + ', ' + updatedCoordinates[1].toPrecision(4) + ')');
        },
        bounds: [-135, 60, -65, 20],
        center: [-87.627778, 41.881944] // the map is initially centered on Chicago
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var i = 0;

angular
    .module('myApp', ['dx'])
    .controller('vectorMapController', function ($scope) {
        $scope.text = "",
        $scope.vectorMapInstance = {};
        $scope.vectorMapCfg = {
            layers: [{
                type: 'area',
                dataSource: '/Content/data/vectorMap-sources/usa.txt',
                palette: 'Soft',
                paletteSize: 10,
                customize: function (elements) {
                    angular.forEach(elements, function (element) {
                        element.applySettings({ paletteIndex: i++ % 10 });
                    });
                }
            }, {
                type: 'marker',
                dataSource: markerData,
                label: {
                    enabled: true,
                    dataField: 'text'
                }
            }],
            tooltip: {
                enabled: true,
                customizeTooltip: function () {
                    return { text: this.attribute('name') };
                }
            },
            onCenterChanged: function (info) {
                var updatedCoordinates = info.center;
                $scope.text = 'Center coordinates: (' + updatedCoordinates[0].toPrecision(4) + ', ' + updatedCoordinates[1].toPrecision(4) + ')';
            },
            bounds: [-135, 60, -65, 20],
            center: [-87.627778, 41.881944] // the map is initially centered on Chicago
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->