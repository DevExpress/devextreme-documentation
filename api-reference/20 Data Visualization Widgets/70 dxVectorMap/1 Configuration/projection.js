var projections = [{
    name: 'Mercator projection',
    projection: DevExpress.viz.map.projection.get('mercator')
}, {
    name: 'Miller cylindrical projection',
    projection: DevExpress.viz.map.projection.get('miller')
}, {
    name: 'Equirectangular projection',
    projection: DevExpress.viz.map.projection.get('equirectangular')
}, {
    name: 'Lambert cylindrical projection',
    projection: DevExpress.viz.map.projection.get('lambert')
}];

//<!--@jQuery-->
$(function () {
    var vectorMap = $("#vectorMapContainer").dxVectorMap({
        layers: {
            dataSource: '/Content/data/vectorMap-sources/world.txt',
            label: {
                enabled: true,
                dataField: 'name'
            },
            hoverEnabled: false
        }
    }).dxVectorMap('instance');

    $("#selectBoxContainer").dxSelectBox({
        dataSource: projections,
        displayExpr: 'name',
        valueExpr: 'projection',
        value: projections[0].projection,
        onValueChanged: function (e) {
            vectorMap.option('projection', e.value)
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    projections: projections,
    selectedProjection: ko.observable(projections[0].projection)
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('vectorMapController', function ($scope) {
        $scope.projections = projections;
        $scope.updateProjection = function (e) {
            $('#vectorMapContainer')
                .dxVectorMap('instance')
                .option('projection', e.value)
        };
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->