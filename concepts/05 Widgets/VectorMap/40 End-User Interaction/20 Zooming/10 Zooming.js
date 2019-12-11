//<!--@jQuery-->
$(function () {
    $('#vectorMapContainer').dxVectorMap({
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
        }],
        zoomFactor: 3,
        onZoomFactorChanged: function (info) {
            var updatedZoomFactor = info.zoomFactor;
            $('#textArea').html('');
            $('#textArea').html('Current zoom factor: ' + updatedZoomFactor.toPrecision(3));
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var i = 0;

var viewModel = {
    text: ko.observable(),
    vectorMapCfg: {
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt',
            palette: 'Default',
            paletteSize: 9,
            customize: function (elements) {
                ko.utils.arrayForEach(elements, function (element) {
                    element.applySettings({ paletteIndex: i++ % 9 });
                });
            }
        }],
        zoomFactor: 3,
        onZoomFactorChanged: function (info) {
            var updatedZoomFactor = info.zoomFactor;
            viewModel.text('Current zoom factor: ' + updatedZoomFactor.toPrecision(3));
        }
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
        $scope.vectorMapCfg = {
            layers: [{
                type: 'area',
                dataSource: '/Content/data/vectorMap-sources/world.txt',
                palette: 'Default',
                paletteSize: 9,
                customize: function (elements) {
                    angular.forEach(elements, function (element) {
                        element.applySettings({ paletteIndex: i++ % 9 });
                    });
                }
            }],
            zoomFactor: 3,
            onZoomFactorChanged: function (info) {
                var updatedZoomFactor = info.zoomFactor;
                $scope.text = 'Current zoom factor: ' + updatedZoomFactor.toPrecision(3);
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->