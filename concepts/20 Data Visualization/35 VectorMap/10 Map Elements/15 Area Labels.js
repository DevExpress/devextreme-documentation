var i = 0;

//<!--@jQuery-->
$(function () {
    $('#vectorMapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
            palette: 'Ocean',
            paletteSize: 9,
            customize: function (elements) {
                $.each(elements, function (_, element) {
                    element.applySettings({ paletteIndex: i++ % 9 });
                });
            },
            label: {
                enabled: true,
                dataField: "name"
            }
        }],
    	bounds: [-135, 60, -65, 20],
    	zoomFactor: 1.25
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    vectorMapCfg: {
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
            palette: 'Ocean',
            paletteSize: 9,
            customize: function (elements) {
                ko.utils.arrayForEach(elements, function (element) {
                    element.applySettings({ paletteIndex: i++ % 9 });
                });
            },
            label: {
                enabled: true,
                dataField: "name"
            }
        }],
    	bounds: [-135, 60, -65, 20],
    	zoomFactor: 1.25
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('vectorMapCtrl', function ($scope) {
        $scope.vectorMapCfg = {
            layers: [{
                type: 'area',
                dataSource: '/Content/data/vectorMap-sources/usa.txt',
                palette: 'Ocean',
                paletteSize: 9,
                customize: function (elements) {
                    angular.forEach(elements, function (_, element) {
                        element.applySettings({ paletteIndex: i++ % 9 });
                    });
                },
                label: {
                    enabled: true,
                    dataField: "name"
                }
            }],
            bounds: [-135, 60, -65, 20],
            zoomFactor: 1.25
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->