<!--@jQuery-->
$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [{
            dataField: "author",
            width: 150
        }, {
            dataField: "title",
        }, {
            dataField: 'genre',
            groupIndex: 0
        }, {
            dataField: 'year',
            width: 80
        }, {
            dataField: 'length',
            width: 80
        }, {
            dataField: "price",
            width: 80
        }],
        grouping: { autoExpandAll: false },
        summary: {
            groupItems: [{
                column: "price",
                summaryType: "avg",
                displayFormat: "Avg price: {0}"
            }, {
                column: "length",
                valueFormat: "decimal",
                summaryType: "avg",
                displayFormat: "Avg length: {0}"
            }],
        },
        sortByGroupSummaryInfo: [{
            summaryItem: 0,
            sortOrder: 'asc'
        }]
    });

    $("#selectBoxContainer").dxSelectBox({
        dataSource: [{ "n": "Average price", "v": 0 },
                     { "n": "Average length", "v": 1 }],
        valueExpr: 'v',
        displayExpr: 'n',
        value: 0,
        width: 200,
        height: 24,
        onValueChanged: function (info) {
            $("#gridContainer").dxDataGrid('instance').option('sortByGroupSummaryInfo[0].summaryItem', info.value);
        }
    });

    $("#switchContainer").dxSwitch({
        onText: 'Asc',
        offText: 'Desc',
        value: true,
        onValueChanged: function (info) {
            $("#gridContainer").dxDataGrid('instance').option('sortByGroupSummaryInfo[0].sortOrder', info.value ? 'asc' : 'desc');
        }
    });
});
<!--/@jQuery-->
<!--@Knockout-->
var demoViewModel = {
    selected: function (info) {
        $('#gridContainer').dxDataGrid('instance').option('sortByGroupSummaryInfo[0].summaryItem', info.value);
    },
    switched: function (info) {
        $('#gridContainer').dxDataGrid('instance').option('sortByGroupSummaryInfo[0].sortOrder', info.value ? 'asc' : 'desc');
    }
};
ko.applyBindings(demoViewModel);
<!--/@Knockout-->
<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller('demoController', function ($scope) {
    $scope.books = books,
    $scope.selected = 0,
    $scope.switched = true,
    $scope.sortOrder = 'asc',
    $scope.$watch('switched', function () {
        $scope.switched ? $scope.sortOrder = 'asc' : $scope.sortOrder = 'desc'
    });
});
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
<!--/@AngularJS-->