$.ajax({
    type: "POST",
    url: "/LoremService.asmx/LoremIpsum",
    data: JSON.stringify({ count: 15 }),
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
    updated: function (e) {
        DevExpress.ui.notify("The widget has been updated", "success");
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.updated = function (e) {
        DevExpress.ui.notify("The widget has been updated", "success");
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myScrollView").dxScrollView({
    onUpdated: function (e) {
        DevExpress.ui.notify("The widget has been updated", "success");
    }
});
//<!--/@jQuery-->
