//<!--@Knockout-->
var myViewModel = {
    placeholderText: ko.observable("Type your text here")
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.placeholderText = "Type your text here";
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
    height: 300,
    placeholder: "Type your text here"
});
$("#placeholderBox").dxTextBox({
    value: "Type your text here",
    onValueChanged: function (e) {
        $("#myTextArea").dxTextArea("instance").option("placeholder", e.value);
    }
});
//<!--/@jQuery-->