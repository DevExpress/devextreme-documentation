//<!--@Knockout-->
var myViewModel = {
    orders: orders,
    checkBoxState: ko.observable(true)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.orders = orders;
    $scope.checkBoxState = true;
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
            "OrderID",
            { dataField: "OrderDate", dataType: 'date', format: 'shortDate' },
            { dataField: "ShippedDate", dataType: 'date', format: 'shortDate' },
            "Freight", "ShipName", "ShipCity"
        ],
        paging: { pageSize: 8 },
        rowAlternationEnabled: true
    });

    $("#rowAlternationCheckbox").dxCheckBox({
        text: 'Enable Row Alternation',
        value: true,
        onValueChanged: function (e) {
            $('#gridContainer').dxDataGrid('instance').option("rowAlternationEnabled", e.value);
        }
    });
});
//<!--/@jQuery-->