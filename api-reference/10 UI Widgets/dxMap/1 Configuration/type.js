//<!--@Knockout-->
var myViewModel = {
    providers: ["bing", "google", "googleStatic"],
    types: ["roadmap", "hybrid"],
    currentProvider: ko.observable("google"),
    currentType: ko.observable("roadmap"),
    tabClicked: function (e) {
        this.currentType(e.itemData);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.providers = ["bing", "google", "googleStatic"];
    $scope.types = ["roadmap", "hybrid"];
    $scope.currentProvider = "google";
    $scope.currentType = "roadmap";
    $scope.tabClicked = function (e) {
        $scope.currentType = e.itemData;
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#typeTabs").dxTabs({
    dataSource: ["roadmap", "hybrid"],
    selectedIndex: 0,
    onItemClick: function (e) {
        $("#myMap").dxMap("instance").option("type", e.itemData);
    }
});
$("#myMap").dxMap({
    provider: "google",
    type: "roadmap",
    center: '40.749825, -73.987963',
    zoom: 13
});
$("#providerSelector").dxSelectBox({
    dataSource: ["bing", "google", "googleStatic"],
    value: "google",
    onValueChanged: function (e) {
        $("#myMap").dxMap("instance").option("provider", e.value);
    }
});
//<!--/@jQuery-->