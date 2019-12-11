//<!--@Knockout-->
var myViewModel = {
    markers: [],
    markerAdded: function (e) {
        this.markers.push(e.options);
        if (this.markers.length > 1)
            this.createRoute();
    },
    routeAdded: function () {
        DevExpress.ui.notify("Route added", "success", 1000);
        $("#myMap").dxMap("instance").option("markers", []);
        this.markers = [];
    },
    routeRemoved: function () {
        DevExpress.ui.notify("Route removed", "error", 1000);
    },
    processClick: function (e) {
        $("#myMap").dxMap("instance").addMarker({
            location: e.location
        });
    },
    createRoute: function () {
        var route = { locations: [] };
        for (var i = 0; i < this.markers.length; i++)
            route.locations.push(this.markers[i].location);
        $("#myMap").dxMap("instance").addRoute(route);
    },
    removeRoute: function () {
        var routesCount = $("#myMap").dxMap("instance").option("routes").length;
        if (routesCount < 1)
            return;
        $("#myMap").dxMap("instance").removeRoute($("#myMap").dxMap("instance").option("routes")[routesCount - 1]);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.markerAdded = function (e) {
        markers.push(e.options);
        if (markers.length > 1)
            createRoute();
    };
    $scope.routeAdded = function () {
        DevExpress.ui.notify("Route added", "success", 1000);
        $("#myMap").dxMap("instance").option("markers", []);
        markers = [];
    };
    $scope.routeRemoved = function () {
        DevExpress.ui.notify("Route removed", "error", 1000);
    };
    $scope.processClick = function (e) {
        $("#myMap").dxMap("instance").addMarker({
            location: e.location
        });
    };
    $scope.removeRoute = function () {
        var routesCount = $("#myMap").dxMap("instance").option("routes").length;
        if (routesCount < 1)
            return;
        $("#myMap").dxMap("instance").removeRoute($("#myMap").dxMap("instance").option("routes")[routesCount - 1]);
    };
    var markers = [];
    var createRoute = function () {
        var route = { locations: [] };
        for (var i = 0; i < markers.length; i++)
            route.locations.push(markers[i].location);
        $("#myMap").dxMap("instance").addRoute(route);
    };

});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var markers = [];
var createRoute = function () {
    var route = { locations: [] };
    for (var i = 0; i < markers.length; i++)
        route.locations.push(markers[i].location);
    $("#myMap").dxMap("instance").addRoute(route);
}
$("#myMap").dxMap({
    center: 'USA',
    zoom: 3,
    width: '100%',
    onMarkerAdded: function (e) {
        markers.push(e.options);
        if (markers.length > 1)
            createRoute();
    },
    onRouteAdded: function () {
        DevExpress.ui.notify("Route added", "success", 1000);
        $("#myMap").dxMap("instance").option("markers", []);
        markers = [];
    },
    onRouteRemoved: function () {
        DevExpress.ui.notify("Route removed", "error", 1000);
    },
    onClick: function (e) {
        $("#myMap").dxMap("instance").addMarker({
            location: e.location
        });
    }
});
$("#removeButton").dxButton({
    text: 'Remove last route',
    onClick: function () {
        var routesCount = $("#myMap").dxMap("instance").option("routes").length;
        if (routesCount < 1)
            return;
        $("#myMap").dxMap("instance").removeRoute($("#myMap").dxMap("instance").option("routes")[routesCount - 1]);
    }
});
//<!--/@jQuery-->