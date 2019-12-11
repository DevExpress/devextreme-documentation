$.ajax({
    type: "POST",
    url: "/LoremService.asmx/LoremIpsum",
    data: JSON.stringify({ count: 5 }),
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
    reachedBottom: function (e) {
        DevExpress.ui.notify("You reached the widget bottom", "success");
        e.component.release();
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.reachedBottom = function (e) {
        DevExpress.ui.notify("You reached the widget bottom", "success");
        e.component.release();
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myScrollView").dxScrollView({
    onReachBottom: function (e) {
        DevExpress.ui.notify("You reached the widget bottom", "success");
        e.component.release();
    }
});
//<!--/@jQuery-->
