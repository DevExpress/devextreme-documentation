//<!--@jQuery-->
$(function () {
    var items = [{ id: 1, name: 'Item1' }, { id: 2, name: 'Item2' }, { id: 3, name: 'Item3' }];
    $("#gridContainer").dxDataGrid({
        dataSource: [{ id: 1 }, { id: 2 }, { id: 3 }],
        columns: [{
            dataField: 'id',
            lookup: {
                dataSource: items,
                valueExpr: 'id',
                displayExpr: 'name'
            },
            editCellTemplate: function (cellElement, cellInfo) {
                var div = document.createElement("div");
                cellElement.get(0).appendChild(div);
                $(div).dxLookup({
                    dataSource: items,
                    valueExpr: 'id',
                    displayExpr: 'name',
                    onValueChanged: function (e) {
                        cellInfo.setValue(e.value);
                    }
                });
            }
        }],
        editing: {
            mode: 'row',
            allowUpdating: true
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    items: [{ id: 1, name: 'Item1' }, { id: 2, name: 'Item2' }, { id: 3, name: 'Item3' }]
}
ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller('MyCtrl', ['$scope', function ($scope) {
    $scope.items = [{ id: 1, name: 'Item1' }, { id: 2, name: 'Item2' }, { id: 3, name: 'Item3' }];
    $scope.valueChangeAction = function (e) {
        this.setValue(e.value);
    };
}]);
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->