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
        sorting: { mode: 'multiple' }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    dataGridOptions: {
        dataSource: books,
        columns: [
            'author',
            { dataField: 'title', width: 210 },
            'year', 'genre', 'format'
        ],
        paging: { pageSize: 8 },
        sorting: { mode: 'multiple' }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('dataGridController', function ($scope) {
        $scope.dataGridOptions = {
            dataSource: books,
            columns: [
                'author',
                { dataField: 'title', width: 210 },
                'year', 'genre', 'format'
            ],
            paging: { pageSize: 8 },
            sorting: { mode: 'multiple' }
        };
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->