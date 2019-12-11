//<!--@Knockout-->
var myViewModel = {
    text: ko.observable(""),
    textAreaDisabled: ko.observable(false)
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
    $scope.textAreaDisabled = false;
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
$("#disabledSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#myTextArea").dxTextArea("instance").option("disabled", e.value);
    }
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