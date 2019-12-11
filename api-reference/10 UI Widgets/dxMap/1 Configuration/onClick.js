//<!--@Knockout-->
var myViewModel = {
    mapClicked: function (e) {
        DevExpress.ui.notify("Click location: " + e.location.lat + " " + e.location.lng, "success", 2000);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.mapClicked = function (e) {
        DevExpress.ui.notify("Click location: " + e.location.lat + " " + e.location.lng, "success", 2000);
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myMap").dxMap({
    width: '100%',
    height: '100%',
    onClick: function (e) {
        DevExpress.ui.notify("Click location: " + e.location.lat + " " + e.location.lng, "success", 2000);
    }
});
//<!--/@jQuery-->