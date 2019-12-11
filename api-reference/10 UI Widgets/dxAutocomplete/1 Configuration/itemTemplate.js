//<!--@Knockout-->
var myViewModel = {
    autocompleteDataSource: new DevExpress.data.DataSource([]),
    templates: ["brief", "full"],
    currentTemplate: ko.observable("brief")
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
    $scope.templates = ["brief", "full"];
    $scope.currentTemplate = "brief";
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
var briefTemplate = function (itemData, itemIndex, itemElement) {
    itemElement.append("<p><b>"+ itemData.country + "</b> (<i>" + itemData.capital + "</i>)</p>");
};
var fullTemplate = function (itemData, itemIndex, itemElement) {
    itemElement.append("<p>Country: <b>" + itemData.country + "</b></p>");
    itemElement.append("<p style=\"color:grey;\">Capital: <b>" + itemData.capital + "</b></p>");
};
$("#myAutocomplete").dxAutocomplete({
    dataSource: autocompleteData,
    displayExpr: 'country',
    placeholder: 'Type country name',
    itemTemplate: briefTemplate
});
$("#templateSelector").dxSelectBox({
    dataSource: ['brief', 'full'],
    value: 'brief',
    onValueChanged: function (e) {
        $("#myAutocomplete").dxAutocomplete("instance").option("itemTemplate", e.value === 'brief' ? briefTemplate : fullTemplate);
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