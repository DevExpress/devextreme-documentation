//<!--@Knockout-->
var myViewModel = {
    markerAdded: function () {
        DevExpress.ui.notify("Marker added", "success", 1000);
    },
    markerRemoved: function () {
        DevExpress.ui.notify("Marker removed", "error", 1000);
    },
    processClick: function (e) {
        $("#myMap").dxMap("instance").addMarker({
            location: e.location
        });
    },
    removeMarker: function () {
        var markersCount = $("#myMap").dxMap("instance").option("markers").length;
        if (markersCount < 1)
            return;
        $("#myMap").dxMap("instance").removeMarker($("#myMap").dxMap("instance").option("markers")[markersCount - 1]);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.markerAdded = function () {
        DevExpress.ui.notify("Marker added", "success", 1000);
    }
    $scope.markerRemoved = function () {
        DevExpress.ui.notify("Marker removed", "error", 1000);
    }
    $scope.processClick = function (e) {
        $("#myMap").dxMap("instance").addMarker({
            location: e.location
        });
    };
    $scope.removeMarker = function () {
        var markersCount = $("#myMap").dxMap("instance").option("markers").length;
        if (markersCount < 1)
            return;
        $("#myMap").dxMap("instance").removeMarker($("#myMap").dxMap("instance").option("markers")[markersCount - 1]);
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myMap").dxMap({
    center: 'USA',
    zoom: 3,
    width: '100%',
    onMarkerAdded: function () {
        DevExpress.ui.notify("Marker added", "success", 1000);
    },
    onMarkerRemoved: function () {
        DevExpress.ui.notify("Marker removed", "error", 1000);
    },
    onClick: function (e) {
        $("#myMap").dxMap("instance").addMarker({
            location: e.location
        });
    }
});
$("#removeButton").dxButton({
    text: 'Remove last marker',
    onClick: function () {
        var markersCount = $("#myMap").dxMap("instance").option("markers").length;
        if (markersCount < 1)
            return;
        $("#myMap").dxMap("instance").removeMarker($("#myMap").dxMap("instance").option("markers")[markersCount - 1]);
    }
});
//<!--/@jQuery-->