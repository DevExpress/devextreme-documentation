//<!--@Knockout-->
var myViewModel = {
    text: ko.observable("")
}
ko.applyBindings(myViewModel);
$.ajax({
    type: "POST",
    url: "/LoremService.asmx/LoremIpsum",
    data: JSON.stringify({ count: 1 }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
        myViewModel.text(data.d[0]);
    }
});
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.text = "";
    $.ajax({
        type: "POST",
        url: "/LoremService.asmx/LoremIpsum",
        data: JSON.stringify({ count: 1 }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $scope.text = data.d[0];
        }
    });
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myTextArea").dxTextArea({
    height: 300
});
$.ajax({
    type: "POST",
    url: "/LoremService.asmx/LoremIpsum",
    data: JSON.stringify({ count: 1 }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
        $("#myTextArea").dxTextArea("instance").option("text", data.d[0]);
        $("#myTextArea").dxTextArea("instance").repaint();
    }
});
//<!--/@jQuery-->