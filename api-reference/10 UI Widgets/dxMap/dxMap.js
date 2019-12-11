//<!--@Knockout-->
var myViewModel = {
    options: {
        center: "40.749825, -73.987963",
        width: "100%",
        height: "100%",
        zoom: 13,
        provider: "google",
        mapType: "satellite",
        markers: [
          { title: "A", location: [40.737102, -73.990318] },
          { title: "B", location: [40.749825, -73.987963] },
          { title: "С", location: [40.755823, -73.986397] }
        ],
        routes: [{
            weight: 5,
            color: "blue",
            locations: [
              [40.737102, -73.990318],
              [40.749825, -73.987963],
              [40.755823, -73.986397]
            ]
        }]
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.options = {
        center: "40.749825, -73.987963",
        width: "100%",
        height: "100%",
        zoom: 13,
        provider: "google",
        mapType: "satellite",
        markers: [
          { title: "A", location: [40.737102, -73.990318] },
          { title: "B", location: [40.749825, -73.987963] },
          { title: "С", location: [40.755823, -73.986397] }
        ],
        routes: [{
            weight: 5,
            color: "blue",
            locations: [
              [40.737102, -73.990318],
              [40.749825, -73.987963],
              [40.755823, -73.986397]
            ]
        }]
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myMap").dxMap({
    center: "40.749825, -73.987963",
    width: "100%",
    height: "100%",
    zoom: 13,
    provider: "google",
    mapType: "satellite",
    markers: [
        { title: "A", location: [40.737102, -73.990318] },
        { title: "B", location: [40.749825, -73.987963] },
        { title: "С", location: [40.755823, -73.986397] }
    ],
    routes: [{
        weight: 5,
        color: "blue",
        locations: [
            [40.737102, -73.990318],
            [40.749825, -73.987963],
            [40.755823, -73.986397]
        ]
    }]
});
//<!--/@jQuery-->