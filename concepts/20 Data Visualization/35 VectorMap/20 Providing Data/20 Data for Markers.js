var markers = [{
    coordinates: [-121.2808, 38.3320],
    attributes: {
        text: 'Sacramento',
        value: 10,
        values: [9, 5, 14]
    }
}, {
    coordinates: [-97.75, 30.25],
    attributes: {
        text: 'Austin',
        value: 7,
        values: [10, 2, 3]
    }
}, {
    coordinates: [-73.7572, 42.6525],
    attributes: {
        text: 'Albany',
        value: 17,
        values: [15, 5, 14]
    }
}, {
    coordinates: [-84.2533, 30.455],
    attributes: {
        text: 'Tallahassee',
        value: 20,
        values: [6, 5, 1]
    }
}, {
    coordinates: [-89.65, 39.783],
    attributes: {
        text: 'Springfield',
        value: 24,
        values: [6, 9, 10]
    }
}];

//<!--@jQuery-->
$(function () {
    $("#vectorMapContainer").dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
            hoverEnabled: false
        }, {
            type: 'marker',
            dataSource: markers,
            elementType: 'dot',
            label: { dataField: 'text' }
        }],
        bounds: [-135, 60, -65, 20],
        zoomFactor: 1.25
    });
    
    $("#markerTypeSelectBoxContainer").dxSelectBox({
        dataSource: ['dot', 'bubble', 'pie'],
        value: 'dot',
        onValueChanged: function (e) {
            var vectorMap = $('#vectorMapContainer').dxVectorMap('instance');
            var dataField;
            e.value == 'pie' ? dataField = 'values' : dataField = 'value';
            vectorMap.option('layers[1]', {
                elementType: e.value,
                dataField: dataField
            });
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    vectorMapInstance: {},
    vectorMapCfg: {
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
            hoverEnabled: false
        }, {
            type: 'marker',
            dataSource: markers,
            elementType: 'dot',
            label: { dataField: 'text' }
        }],
        bounds: [-135, 60, -65, 20],
        zoomFactor: 1.25,
        onInitialized: function (e) {
            viewModel.vectorMapInstance = e.component;
        }
    },
    markerTypeSelectBoxCfg: {
        dataSource: ['dot', 'bubble', 'pie'],
        value: 'dot',
        onValueChanged: function (e) {
            var dataField;
            e.value == 'pie' ? dataField = 'values' : dataField = 'value';
            viewModel.vectorMapInstance.option('layers[1]', {
                elementType: e.value,
                dataField: dataField
            });
        }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('vectorMapController', function ($scope) {
        $scope.vectorMapInstance = {};
        $scope.vectorMapCfg = {
            layers: [{
                type: 'area',
                dataSource: '/Content/data/vectorMap-sources/usa.txt',
                hoverEnabled: false
            }, {
                type: 'marker',
                dataSource: markers,
                elementType: 'dot',
                label: { dataField: 'text' }
            }],
            bounds: [-135, 60, -65, 20],
            zoomFactor: 1.25,
            onInitialized: function (e) {
                $scope.vectorMapInstance = e.component;
            }
        };
        $scope.markerTypeSelectBoxCfg = {
            dataSource: ['dot', 'bubble', 'pie'],
            value: 'dot',
            onValueChanged: function (e) {
                var dataField;
                e.value == 'pie' ? dataField = 'values' : dataField = 'value';
                $scope.vectorMapInstance.option('layers[1]', {
                    elementType: e.value,
                    dataField: dataField
                });
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->