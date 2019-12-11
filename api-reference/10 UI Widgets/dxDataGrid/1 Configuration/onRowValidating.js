//<!--@Knockout-->
var myViewModel = {
    books: books,
    onRowValidating: function (e) {
        var dataGrid = e.component;
        var rowIndex = dataGrid.getRowIndexByKey(e.key),
            year = (e.newData.year === undefined) ? e.oldData.year : e.newData.year;
        if (year > new Date().getFullYear()) {
            e.isValid = false;
            dataGrid.getCellElement(rowIndex, 'year').find('input').css('background', 'rgba(255, 0, 0, 0.5)');
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.books = books;
    $scope.onRowValidating = function (e) {
        var dataGrid = e.component;
        var rowIndex = dataGrid.getRowIndexByKey(e.key),
            year = (e.newData.year === undefined) ? e.oldData.year : e.newData.year;
        if (year > new Date().getFullYear()) {
            e.isValid = false;
            dataGrid.getCellElement(rowIndex, 'year').find('input').css('background', 'rgba(255, 0, 0, 0.5)');
        }
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author',
            { dataField: 'title', width: 210 },
            'year', 'genre', 'format'
        ],
        paging: { pageSize: 8 },
        editing: {
            allowUpdating: true,
            allowAdding: true
        },

        onRowValidating: function (e) {
            var dataGrid = e.component;
            var rowIndex = dataGrid.getRowIndexByKey(e.key),
                year = (e.newData.year === undefined) ? e.oldData.year : e.newData.year;

            if (year > new Date().getFullYear()) {
                e.isValid = false;
                dataGrid.getCellElement(rowIndex, "year").find("input").css("background", "rgba(255, 0, 0, 0.5)");
            }
        }

    });
});
//<!--/@jQuery-->