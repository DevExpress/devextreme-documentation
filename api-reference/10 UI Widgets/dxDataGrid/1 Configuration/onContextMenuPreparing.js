//<!--@Knockout-->
var myViewModel = {
    isEditingInProcess: false,
    switchEditingInProcess: function () {
        myViewModel.isEditingInProcess = !myViewModel.isEditingInProcess
    },
    onContextMenuPreparing: function (e) {
        if (e.row.rowType === 'data') {
            var dataGrid = $("#gridContainer").dxDataGrid("instance");
            e.items = [{
                text: "Edit",
                onItemClick: function () {
                    dataGrid.editRow(e.row.rowIndex);
                    myViewModel.isEditingInProcess = true;
                }
            }, {
                text: "Insert",
                onItemClick: function () {
                    dataGrid.addRow();
                    myViewModel.isEditingInProcess = true;
                }
            }, {
                text: "Delete",
                onItemClick: function () {
                    dataGrid.deleteRow(e.row.rowIndex);
                }
            }];
        }
    },
    onRowClick: function () {
        if (myViewModel.isEditingInProcess) {
            var dataGrid = $("#gridContainer").dxDataGrid("instance");
            dataGrid.saveEditData();
        }
    },
    orders: orders
}

ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.isEditingInProcess = false;
    $scope.switchEditingInProcess = function () {
        $scope.isEditingInProcess = !$scope.isEditingInProcess
    };
    $scope.onContextMenuPreparing = function (e) {
        if (e.row.rowType === 'data') {
            var dataGrid = $("#gridContainer").dxDataGrid("instance");
            e.items = [{
                text: "Edit",
                onItemClick: function () {
                    dataGrid.editRow(e.row.rowIndex);
                    $scope.isEditingInProcess = true;
                }
            }, {
                text: "Insert",
                onItemClick: function () {
                    dataGrid.addRow();
                    $scope.isEditingInProcess = true;
                }
            }, {
                text: "Delete",
                onItemClick: function () {
                    dataGrid.deleteRow(e.row.rowIndex);
                }
            }];
        }
    };
    $scope.onRowClick = function () {
        if ($scope.isEditingInProcess) {
            var dataGrid = $("#gridContainer").dxDataGrid("instance");
            dataGrid.saveEditData();
        }
    };
    $scope.orders = orders;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    var isEditingInProcess = false;
    var switchEditingInProcess = function () {
        isEditingInProcess = !isEditingInProcess
    }
    
    $("#gridContainer").dxDataGrid({
        dataSource: orders,
        columns: [
            "OrderID", "CustomerID",
            { dataField: "OrderDate", dataType: 'date', format: 'shortDate' },
            { dataField: "RequiredDate", dataType: 'date', format: 'shortDate' },
            "Freight", "ShipName"
        ],
        editing: {
            mode: 'row'
        },
        onContextMenuPreparing: function (e) {
            if (e.row.rowType === "data") {
                var dataGrid = $("#gridContainer").dxDataGrid("instance");
                e.items = [{
                    text: "Edit",
                    onItemClick: function () {
                        dataGrid.editRow(e.row.rowIndex);
                        isEditingInProcess = true;
                    }
                }, {
                    text: "Insert",
                    onItemClick: function () {
                        dataGrid.addRow();
                        isEditingInProcess = true;
                    }
                }, {
                    text: "Delete",
                    onItemClick: function () {
                        dataGrid.deleteRow(e.row.rowIndex);
                    }
                }];
            }
        },
        onRowClick: function () {
            if (isEditingInProcess) {
                var dataGrid = $("#gridContainer").dxDataGrid("instance");
                dataGrid.saveEditData();
            }
        },
        onRowUpdated: switchEditingInProcess,
        onRowInserted: switchEditingInProcess
    });
});
//<!--/@jQuery-->