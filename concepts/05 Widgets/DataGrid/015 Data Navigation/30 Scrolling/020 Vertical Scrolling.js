var scrollingModes = ['standard', 'virtual', 'infinite'];

<!--@jQuery-->
$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: {
            store: {
                type: 'odata',
                url: 'https://sampleservices.devexpress.com/Northwind.svc/Products'
            }
        },
        columns: [
            { dataField: 'ProductID', caption: 'ID' },
            { dataField: 'ProductName', caption: 'Name', width: 220 },
            { dataField: 'QuantityPerUnit', caption: 'Quantity', width: 150 },
            { dataField: 'UnitPrice', caption: 'Price' },
            { dataField: 'UnitsInStock', caption: 'In Stock' }
        ],
        scrolling: { mode: 'standard' }
    });

    $("#scrollingModeSelectBox").dxSelectBox({
        height: 35,
        width: 150,
        items: scrollingModes,
        value: scrollingModes[0],
        onValueChanged: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.option({
                scrolling: { mode: info.value }
            });
        }
    });
});
<!--/@jQuery-->
<!--@Knockout-->
var demoViewModel = {
    scrollingModes: scrollingModes,
    selectedMode: ko.observable(scrollingModes[0])
};
ko.applyBindings(demoViewModel);
<!--/@Knockout-->
<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller('demoController', function ($scope) {
    $scope.scrollingModes = scrollingModes;
    $scope.selectedMode = scrollingModes[0];
    $scope.data = new DevExpress.data.DataSource({
        store: {
                 type: 'odata',
                 url: 'https://sampleservices.devexpress.com/Northwind.svc/Products'
             }
    })
});
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
<!--/@AngularJS-->