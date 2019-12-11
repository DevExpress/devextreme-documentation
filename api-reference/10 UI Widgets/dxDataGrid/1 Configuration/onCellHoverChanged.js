//<!--@Knockout-->
var myViewModel = {
    onCellHoverChanged: function (hoverCell) {
        if (hoverCell.eventType == 'mouseover')
            hoverCell.cellElement.addClass('hovered');
        else
            hoverCell.cellElement.removeClass('hovered');
    },
    orders: orders
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.onCellHoverChanged = function (hoverCell) {
        if (hoverCell.eventType == 'mouseover')
            hoverCell.cellElement.addClass('hovered');
        else
            hoverCell.cellElement.removeClass('hovered');
    }
    $scope.orders = orders;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: orders,
        columns: [
            'OrderID',
            { dataField: 'CustomerID', allowSorting: false },
            { dataField: 'OrderDate', dataType: 'date' },
            { dataField: 'ShippedDate', dataType: 'date' },
            { dataField: 'ShipName', allowSorting: false },
            { dataField: 'ShipCountry', caption: 'Ship To' }
        ],
        paging: { pageSize: 8 },
        onCellHoverChanged: function (hoverCell) {
            if (hoverCell.eventType == 'mouseover')
                hoverCell.cellElement.addClass("hovered");
            else
                hoverCell.cellElement.removeClass("hovered");
        }
    });
});
//<!--/@jQuery-->