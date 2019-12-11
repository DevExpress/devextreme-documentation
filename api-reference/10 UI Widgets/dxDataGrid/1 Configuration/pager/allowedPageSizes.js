var pageSizes = [[3, 5, 8], [5, 8, 10], [8, 10, 15]];

//<!--@Knockout-->
var myViewModel = {
    books: books,
    pageSizes: pageSizes,
    selectedPageSizes: ko.observable(pageSizes[0])
};

ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller("demoController", function ($scope) {
        $scope.books = books;
        $scope.pageSizes = pageSizes;
        $scope.selectedPageSizes = pageSizes[0];
    });

angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    var dataGrid = $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author',
            { dataField: 'title', width: 210 },
            'year', 'genre', 'format'
        ],
        paging: { pageSize: 8 },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: pageSizes[0]
        }
    }).dxDataGrid('instance');

    $("#pageSizesSelectBox").dxSelectBox({
        height: 35,
        width: 150,
        items: pageSizes,
        value: pageSizes[0],
        onValueChanged: function (info) {
            dataGrid.option({
                pager: { allowedPageSizes: info.value }
            });
        }
    });
});
//<!--/@jQuery-->