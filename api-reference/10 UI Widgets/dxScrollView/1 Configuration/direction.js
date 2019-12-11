$.ajax({
    type: "POST",
    url: "/LoremService.asmx/LoremIpsum",
    data: JSON.stringify({ count: Math.ceil(Math.random() * 30) }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
        $.each(data.d, function (index, value) {
            $("#textContainer").append("<p>" + value + "</p>");
        });
    }
});
//<!--@Knockout-->
var myViewModel = {
    directions: [ "vertical", "horizontal", "both" ],
    scrollingDirection: ko.observable("vertical")
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.directions = ["vertical", "horizontal", "both"];
    $scope.scrollingDirection = "vertical";
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myScrollView").dxScrollView({
    direction: "vertical"
});
$("#directionSelector").dxSelectBox({
    items: ["vertical", "horizontal", "both"],
    value: "vertical",
    onValueChanged: function (e) {
        $("#myScrollView").dxScrollView("instance").option("direction", e.value);
    }
});
//<!--/@jQuery-->
