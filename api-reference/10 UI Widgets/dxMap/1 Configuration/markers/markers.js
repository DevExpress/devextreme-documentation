//<!--@Knockout-->
var myViewModel = {
    providers: ["bing", "google", "googleStatic"],
    currentProvider: ko.observable("google"),
    tabClicked: function(e){
        this.currentProvider(e.itemData);
    },
    mapMarkers: [{
        title: "A marker",
        tooltip: { text: "<p>The <b style=\"color: red;\">A</b> marker</p>", isShown: true },
        location: [40.749802, -73.981018],
        onClick: function () { DevExpress.ui.notify("Marker 'A' clicked!", "info", 1000); }
    },
    {
        title: "C marker",
        tooltip: "<p>The <b style=\"color: green;\">C</b> marker</p>",
        location: [40.755823, -73.986397],
        onClick: function () { DevExpress.ui.notify("Marker 'C' clicked!", "info", 1000); }
    },
    {
        title: "B marker",
        tooltip: "<p>The <b style=\"color: blue;\">B</b> marker</p>",
        location: [40.749825, -73.987963],
        onClick: function () { DevExpress.ui.notify("Marker 'B' clicked!", "info", 1000); }
    }]
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.providers = ["bing", "google", "googleStatic"];
    $scope.currentProvider = "google";
    $scope.tabClicked = function(e){
        $scope.currentProvider = e.itemData;
    };
    $scope.mapMarkers = [{
        title: "A marker",
        tooltip: { text: "<p>The <b style=\"color: red;\">A</b> marker</p>", isShown: true },
        location: [40.749802, -73.981018],
        onClick: function () { DevExpress.ui.notify("Marker 'A' clicked!", "info", 1000); }
    },
    {
        title: "C marker",
        tooltip: "<p>The <b style=\"color: green;\">C</b> marker</p>",
        location: [40.755823, -73.986397],
        onClick: function () { DevExpress.ui.notify("Marker 'C' clicked!", "info", 1000); }
    },
    {
        title: "B marker",
        tooltip: "<p>The <b style=\"color: blue;\">B</b> marker</p>",
        location: [40.749825, -73.987963],
        onClick: function () { DevExpress.ui.notify("Marker 'B' clicked!", "info", 1000); }
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
    markers: [{
        title: "A marker",
        tooltip: { text: "<p>The <b style=\"color: red;\">A</b> marker</p>", isShown: true },
        location: [40.749802, -73.981018],
        onClick: function () { DevExpress.ui.notify("Marker 'A' clicked!", "info", 1000); }
    },
    {
        title: "C marker",
        tooltip: "<p>The <b style=\"color: green;\">C</b> marker</p>",
        location: [40.755823, -73.986397],
        onClick: function () { DevExpress.ui.notify("Marker 'C' clicked!", "info", 1000); }
    },
    {
        title: "B marker",
        tooltip: "<p>The <b style=\"color: blue;\">B</b> marker</p>",
        location: [40.749825, -73.987963],
        onClick: function () { DevExpress.ui.notify("Marker 'B' clicked!", "info", 1000); }
    }]
});
//<!--/@jQuery-->