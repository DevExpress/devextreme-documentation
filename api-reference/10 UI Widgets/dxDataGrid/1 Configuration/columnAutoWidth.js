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
            "OrderID", "CustomerID", "EmployeeID",
            { dataField: "OrderDate", dataType: 'date', format: 'shortDate' },
            { dataField: "RequiredDate", dataType: 'date', format: 'shortDate' },
            { dataField: "ShippedDate", dataType: 'date', format: 'shortDate' },
            "ShipVia", "Freight", "ShipName", "ShipAddress", "ShipCity"
        ],
        paging: { pageSize: 8 },
        columnAutoWidth: true
    });

    $("#columnAutoWidthCheckbox").dxCheckBox({
        text: 'columnAutoWidth',
        value: true,
        onValueChanged: function (e) {
            $('#gridContainer').dxDataGrid('instance').option("columnAutoWidth", e.value);
        }
    });
});
//<!--/@jQuery-->