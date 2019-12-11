//<!--@Knockout-->
var myViewModel = {
    emptyText: ko.observable("No data to display"),
    lookupDataSource: new DevExpress.data.DataSource([])
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.emptyText = "No data to display";
    $scope.lookupDataSource = new DevExpress.data.DataSource([]);
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myLookup").dxLookup({
    dataSource: new DevExpress.data.DataSource([]),
    displayExpr: 'name',
    title: 'States'
});
$("#noDataTextField").dxTextBox({
    value: "No data to display",
    onValueChanged: function (e) {
        $("#myLookup").dxLookup("instance").option("noDataText", e.value);
    }
});
//<!--/@jQuery-->
