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
    pulledDown: function (e) {
        DevExpress.ui.notify("The widget has been pulled down", "success");
        e.component.release();
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.pulledDown = function (e) {
        DevExpress.ui.notify("The widget has been pulled down", "success");
        e.component.release();
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myScrollView").dxScrollView({
    onPullDown: function (e) {
        DevExpress.ui.notify("The widget has been pulled down", "success");
        e.component.release();
    }
});
//<!--/@jQuery-->
