//<!--@Knockout-->
var myViewModel = {
    providers: ["bing", "google", "googleStatic"],
    currentProvider: ko.observable("google"),
    tabClicked: function (e) {
        this.currentProvider(e.itemData);
    },
    mapRoutes: [{
        color: "red",
        weight: 2,
        locations: [ "40.748302 -73.978518", "40.748625 -73.992363", "40.757823 -73.995297" ]
    },
    {
        color: "blue",
        weight: 4,
        locations: [ "40.747802 -73.995297", "40.746302 -73.978518", "40.757823 -73.978518" ]
    },
    {
        color: "green",
        weight: 6,
        locations: [ "40.749802 -73.981018", "40.749825 -73.987963", "40.755823 -73.986397" ]
    }]
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
    $scope.mapRoutes = [{
        color: "red",
        weight: 2,
        locations: ["40.748302 -73.978518", "40.748625 -73.992363", "40.757823 -73.995297"]
    },
    {
        color: "blue",
        weight: 4,
        locations: ["40.747802 -73.995297", "40.746302 -73.978518", "40.757823 -73.978518"]
    },
    {
        color: "green",
        weight: 6,
        locations: ["40.749802 -73.981018", "40.749825 -73.987963", "40.755823 -73.986397"]
    }];
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
    zoom: 14,
    routes: [{
        color: "red",
        weight: 2,
        locations: ["40.748302 -73.978518", "40.748625 -73.992363", "40.757823 -73.995297"]
    },
    {
        color: "blue",
        weight: 4,
        locations: ["40.747802 -73.995297", "40.746302 -73.978518", "40.757823 -73.978518"]
    },
    {
        color: "green",
        weight: 6,
        locations: ["40.749802 -73.981018", "40.749825 -73.987963", "40.755823 -73.986397"]
    }]
});
//<!--/@jQuery-->