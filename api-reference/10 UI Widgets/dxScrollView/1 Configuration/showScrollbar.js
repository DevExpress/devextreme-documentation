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
    showScrollbarModes: ["onScroll", "onHover", "always", "never"],
    showScrollbarMode: ko.observable("onScroll")
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.showScrollbarModes = ["onScroll", "onHover", "always", "never"];
    $scope.showScrollbarMode = "onScroll";
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myScrollView").dxScrollView({
    showScrollbar: "onScroll",
    useNative: false
});
$("#showModeSelector").dxSelectBox({
    items: ["onScroll", "onHover", "always", "never"],
    value: "onScroll",
    onValueChanged: function (e) {
        $("#myScrollView").dxScrollView("instance").option("showScrollbar", e.value);
    }
});
//<!--/@jQuery-->
