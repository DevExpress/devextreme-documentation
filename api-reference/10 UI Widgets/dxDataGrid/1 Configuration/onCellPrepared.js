//<!--@Knockout-->
var myViewModel = {
    onCellPrepared: function (info) {
        if (info.value == '')
            info.cellElement.addClass('noData');
    },
    beers: beers
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.onCellPrepared = function (info) {
        if (info.value == '')
            info.cellElement.addClass('noData');
    }
    $scope.beers = beers;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: beers,
        columns: [
            'name', 'beer_style', 'alcohol_content', 'brewery_brand', 'from_region'
        ],
        paging: { pageSize: 8 },
        onCellPrepared: function (info) {
            if (info.value == "")
                info.cellElement.addClass("noData");
        }
    });
});
//<!--/@jQuery-->