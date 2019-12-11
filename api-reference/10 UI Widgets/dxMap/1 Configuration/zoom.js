//<!--@Knockout-->
var myViewModel = {
    mapZoom: ko.observable(1),
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
    $scope.mapZoom = 1;
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
$("#zoomSlider").dxSlider({
    min: 0,
    max: 22,
    value: 1,
    onValueChanged: function (e) {
        $("#myMap").dxMap("instance").option("zoom", e.value);
        $("#zoomValue").text(e.value);
    }
});
$("#myMap").dxMap({
    provider: "google",
    center: '40.749825, -73.987963',
    zoom: 1
});
//<!--/@jQuery-->