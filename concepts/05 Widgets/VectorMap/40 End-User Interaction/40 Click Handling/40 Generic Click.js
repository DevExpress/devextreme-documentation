//<!--@jQuery-->
$(function () {
    $('#vectorMapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
        }],
        bounds: [-118, 52, -80, 20],
        onClick: function (info) {
            var extEvent = info.jQueryEvent;
            $('#clientAreaCoordinates').html('');
            $('#clientAreaCoordinates').html('Client area coordinates: (' + extEvent.x.toPrecision(4) + ', ' + extEvent.y.toPrecision(4) + ')');
            
            var map = $('#vectorMapContainer').dxVectorMap('instance');
            var geogrCoords = map.convertCoordinates(extEvent.x, extEvent.y);
            $('#geographicalCoordinates').html('');
            $('#geographicalCoordinates').html('Geographical coordinates: (' + geogrCoords[0].toPrecision(4) + ', ' + geogrCoords[1].toPrecision(4) + ')');
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    clientAreaCoordinates: ko.observable(),
    geographicalCoordinates: ko.observable(),
    
    vectorMapInstance: {},
    vectorMapCfg: {
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
        }],
        bounds: [-118, 52, -80, 20],
        onClick: function (info) {
            var extEvent = info.jQueryEvent;
            viewModel.clientAreaCoordinates('Client area coordinates: (' + extEvent.x.toPrecision(4) + ', ' + extEvent.y.toPrecision(4) + ')');
            
            var geogrCoords = viewModel.vectorMapInstance.convertCoordinates(extEvent.x, extEvent.y);
            viewModel.geographicalCoordinates('Geographical coordinates: (' + geogrCoords[0].toPrecision(4) + ', ' + geogrCoords[1].toPrecision(4) + ')');
        },
        onInitialized: function (e) {
            viewModel.vectorMapInstance = e.component;
        }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('vectorMapController', function ($scope) {
        $scope.clientAreaCoordinates = '';
        $scope.geographicalCoordinates = '';
        
        $scope.vectorMapInstance = {};
        $scope.vectorMapCfg = {
            layers: [{
                type: 'area',
                dataSource: '/Content/data/vectorMap-sources/usa.txt',
            }],
            bounds: [-118, 52, -80, 20],
            onClick: function (info) {
                var extEvent = info.jQueryEvent;
                $scope.clientAreaCoordinates = 'Client area coordinates: (' + extEvent.x.toPrecision(4) + ', ' + extEvent.y.toPrecision(4) + ')';
                
                var geogrCoords = $scope.vectorMapInstance.convertCoordinates(extEvent.x, extEvent.y);
                $scope.geographicalCoordinates = 'Geographical coordinates: (' + geogrCoords[0].toPrecision(4) + ', ' + geogrCoords[1].toPrecision(4) + ')'     ;
            },
            onInitialized: function (e) {
                $scope.vectorMapInstance = e.component;
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->