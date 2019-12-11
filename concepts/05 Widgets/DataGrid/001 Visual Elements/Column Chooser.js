var columnChooserModes = ['dragAndDrop', 'select'];

//<!--@jQuery-->
$(function () {
    var dataGridInstance = $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author', 'title', 'year', 'genre', 'format',
            { dataField: 'price', visible: false },
            { dataField: 'language', visible: false },
            { dataField: 'length', visible: false }
        ],
        paging: { pageSize: 8 },
        columnChooser: {
            enabled: true,
            mode: columnChooserModes[0]
        }
    }).dxDataGrid('instance');
    
    $("#selectBoxContainer").dxSelectBox({
        items: columnChooserModes,
        value: columnChooserModes[0],
        onValueChanged: function (e) {
            dataGridInstance.option({
                columnChooser: { mode: e.value }
            })
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    books: books,
    availableModes: columnChooserModes,
    selectedMode: ko.observable(columnChooserModes[0])
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('gridController', function ($scope) {
        $scope.books = books;
        $scope.availableModes = columnChooserModes;
        $scope.selectedMode = columnChooserModes[0];
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->