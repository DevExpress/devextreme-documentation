var markerData = [
    { text: 'Sacramento', coordinates: [-121.2808, 38.3320] },
    { text: 'Austin', coordinates: [-97.75, 30.25] },
    { text: 'Albany', coordinates: [-73.7572, 42.6525] },
    { text: 'Tallahassee', coordinates: [-84.2533, 30.455] },
    { text: 'Springfield', coordinates: [-89.65, 39.783] },
    { text: 'Harrisburg', coordinates: [-76.8756, 40.2697] },
    { text: 'Columbus', coordinates: [-82.9833, 39.9833] },
    { text: 'Atlanta', coordinates: [-84.39, 33.755] },
    { text: 'Lansing', coordinates: [-84.5467, 42.7336] },
    { text: 'Raleigh', coordinates: [-78.6447, 35.8189] }
];

//<!--@jQuery-->
$(function () {
    $('#vectorMapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
            hoveredColor: 'yellow',
            hoveredBorderColor: 'red'
        }, {
            type: 'marker',
            dataSource: markerData,
            hoveredColor: 'yellow',
            hoveredBorderColor: 'red'
        }],
        bounds: [-135, 60, -65, 20],
        zoomFactor: 1.5
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    vectorMapCfg: {
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
            hoveredColor: 'yellow',
            hoveredBorderColor: 'red'
        }, {
            type: 'marker',
            dataSource: markerData,
            hoveredColor: 'yellow',
            hoveredBorderColor: 'red'
        }],
        bounds: [-135, 60, -65, 20],
        zoomFactor: 1.5
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('vectorMapController', function ($scope) {
        $scope.vectorMapCfg = {
            layers: [{
                type: 'area',
                dataSource: '/Content/data/vectorMap-sources/usa.txt',
                hoveredColor: 'yellow',
                hoveredBorderColor: 'red'
            }, {
                type: 'marker',
                dataSource: markerData,
                hoveredColor: 'yellow',
                hoveredBorderColor: 'red'
            }],
            bounds: [-135, 60, -65, 20],
            zoomFactor: 1.5
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->