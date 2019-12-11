//<!--@Knockout-->
var viewModel = {
    dataGridOptions: {
        dataSource: books,
        customizeColumns: function (columns) {
            var bookInfo = ['author', 'title', 'year', 'genre'];
            var editionInfo = ['format', 'language', 'length', 'price'];

            columns.push({ // Pushes two band columns into the "columns" array
                caption: 'Book Info',
                isBand: true
            }, {
                caption: 'Edition Info',
                isBand: true
            });

            for (var i = 0; i < columns.length - 2; i++) {
                var dataField = columns[i].dataField;

                if ($.inArray(dataField, bookInfo) !== -1)
                    columns[i].ownerBand = columns.length - 2; // Places the column under the "Book Info" header
                else if ($.inArray(dataField, editionInfo) !== -1)
                    columns[i].ownerBand = columns.length - 1; // Places the column under the "Edition Info" header
            }
        },
        paging: { pageSize: 8 }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller("dataGridController", function ($scope) {
        $scope.dataGridOptions = {
            dataSource: books,
            customizeColumns: function (columns) {
                var bookInfo = ['author', 'title', 'year', 'genre'];
                var editionInfo = ['format', 'language', 'length', 'price'];
                
                columns.push({ // Pushes two band columns into the "columns" array
                    caption: 'Book Info',
                    isBand: true
                }, {
                    caption: 'Edition Info',
                    isBand: true
                });
                
                for (var i = 0; i < columns.length-2; i++) {
                    var dataField = columns[i].dataField;
                    
                    if (bookInfo.indexOf(dataField) > -1)
                        columns[i].ownerBand = columns.length - 2; // Places the column under the "Book Info" header
                    else if (editionInfo.indexOf(dataField) > -1)
                        columns[i].ownerBand = columns.length - 1; // Places the column under the "Edition Info" header
                }
            },
            paging: { pageSize: 8 }
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
        customizeColumns: function (columns) {
            var bookInfo = ['author', 'title', 'year', 'genre'];
            var editionInfo = ['format', 'language', 'length', 'price'];
            
            columns.push({ // Pushes two band columns into the "columns" array
                caption: 'Book Info',
                isBand: true
            }, {
                caption: 'Edition Info',
                isBand: true
            });
            
            for (var i = 0; i < columns.length-2; i++) {
                var dataField = columns[i].dataField;
                
                if ($.inArray(dataField, bookInfo) !== -1)
                    columns[i].ownerBand = columns.length - 2; // Places the column under the "Book Info" header
                else if ($.inArray(dataField, editionInfo) !== -1)
                    columns[i].ownerBand = columns.length - 1; // Places the column under the "Edition Info" header
            }
        },
        paging: { pageSize: 8 }
    });
});
//<!--/@jQuery-->