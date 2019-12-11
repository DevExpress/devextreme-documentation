<!--@jQuery-->
$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: ordersNew,
        columns: [{
            dataField: "OrderNumber",
            width: 130
        }, {
            dataField: 'OrderDate',
            dataType: 'date'
        }, {
            dataField: 'CustomerStoreCity',
            caption: "City"
        }, {
            dataField: 'CustomerStoreState',
            caption: "State",
            groupIndex: 0
        }, {
            dataField: "SaleAmount",
            format: "currency"
        }],
        summary: {
            groupItems: [{
                column: "OrderNumber",
                summaryType: "count",
                displayFormat: "{0} orders"
            }, {
                column: "SaleAmount",
                summaryType: "sum",
                valueFormat: "currency",
                showInColumn: 'OrderNumber',
                displayFormat: "Total: {0}",
                showInGroupFooter: true
            }]
        }
    });

    $("#switchContainer").dxSwitch({
        onText: 'Footer',
        offText: 'Header',
        value: true,
        width: 100,
        onValueChanged: function (info) {
            $("#gridContainer").dxDataGrid('instance').option('summary.groupItems[1].showInGroupFooter', info.value)
        }
    });
});
<!--/@jQuery-->
<!--@Knockout-->
var demoViewModel = {
    switched: function (info) {
        $("#gridContainer").dxDataGrid('instance').option('summary.groupItems[1].showInGroupFooter', info.value)
    }
};
ko.applyBindings(demoViewModel);
<!--/@Knockout-->
<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller('demoController', function ($scope) {
    $scope.orders = ordersNew,
    $scope.switchValue = true
});
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
<!--/@AngularJS-->