//<!--@Knockout-->
var myViewModel = {
    autocompleteDataSource: new DevExpress.data.DataSource([]),
    maxItemCount: ko.observable(10),
}
ko.applyBindings(myViewModel);
//Loads json data and passes it to the DataSource
$.get("/Content/data/countries.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        myViewModel.autocompleteDataSource.store().insert(data[i]);
    }
    myViewModel.autocompleteDataSource.load();
}, "json");
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.autocompleteDataSource = new DevExpress.data.DataSource([]);
    $scope.maxItemCount = 10;
    //Loads json data and passes it to the DataSource
    $.get("/Content/data/countries.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            $scope.autocompleteDataSource.store().insert(data[i]);
        }
        $scope.autocompleteDataSource.load();
    }, "json");
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var autocompleteData = new DevExpress.data.DataSource([]);
$("#myAutocomplete").dxAutocomplete({
    dataSource: autocompleteData,
    maxItemCount: 10,
    displayExpr: 'country',
    placeholder: 'Type country name',
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("Country: <b>" + itemData.country + "</b><br/>\
        <span style=\"color:grey;\">Capital: " + itemData.capital + "</span>");
    }
});
$("#itemCountSelector").dxNumberBox({
    min: 3,
    max: 30,
    showSpinButtons: true,
    value: 10,
    onValueChanged: function (e) {
        $("#myAutocomplete").dxAutocomplete("instance").option("maxItemCount", e.value);
    }
});
//Loads json data and passes it to the DataSource
$.get("/Content/data/countries.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        autocompleteData.store().insert(data[i]);
    }
    autocompleteData.load();
}, "json");
//<!--/@jQuery-->