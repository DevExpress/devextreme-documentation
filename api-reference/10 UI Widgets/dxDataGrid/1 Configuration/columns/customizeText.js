//<!--@Knockout-->
var myViewModel = {
    books: books,
    columns: [
        'author',
        { dataField: 'title', width: 210 },
        'year', 'genre', 'format',
        {
            dataField: 'language',
            customizeText: function (cellInfo) {
                switch (cellInfo.value) {
                    case 'EN':
                        return 'English'
                        break;
                    case 'GER':
                        return 'German'
                        break;
                    case 'RU':
                        return 'Russian'
                        break;
                }
            }
        }
    ]
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.books = books;
    $scope.columns = [
        'author',
        { dataField: 'title', width: 210 },
        'year', 'genre', 'format',
        {
            dataField: 'language',
            customizeText: function (cellInfo) {
                switch (cellInfo.value) {
                    case 'EN':
                        return 'English'
                        break;
                    case 'GER':
                        return 'German'
                        break;
                    case 'RU':
                        return 'Russian'
                        break;
                }
            }
        }
    ];
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
            'year', 'genre', 'format',
            {
                dataField: 'language',
                customizeText: function (cellInfo) {
                    switch (cellInfo.value) {
                        case 'EN':
                            return 'English'
                            break;
                        case 'GER':
                            return 'German'
                            break;
                        case 'RU':
                            return 'Russian'
                            break;
                    }
                }
            }
        ],
        paging: { pageSize: 8 }
    });
});
//<!--/@jQuery-->