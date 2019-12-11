//<!--@Knockout-->
var myViewModel = {
    providers: ["bing", "google", "googleStatic"],
    currentProvider: ko.observable("google"),
    tabClicked: function (e) {
        this.currentProvider(e.itemData);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.providers = ["bing", "google", "googleStatic"];
    $scope.currentProvider = "google";
    $scope.tabClicked = function (e) {
        $scope.currentProvider = e.itemData;
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#providersTabs").dxTabs({
    dataSource: ["bing", "google", "googleStatic"],
    selectedIndex: 1,
    onItemClick: function (e) {
        $("#myMap").dxMap("instance").option("provider", e.itemData);
    }
});
$("#myMap").dxMap({
    provider: "google",
    center: '40.749825, -73.987963',
    zoom: 13
});
//<!--/@jQuery-->