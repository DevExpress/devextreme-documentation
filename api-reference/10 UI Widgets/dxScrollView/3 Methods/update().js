//Loads scroll view content
$.ajax({
    type: "POST",
    url: "/LoremService.asmx/LoremIpsum",
    data: JSON.stringify({ count: 4 }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
        $.each(data.d, function (index, value) {
            $("#textContainer").append("<p>" + value + "</p>");
        });
        $("#textContainer").append("<div id='end'>");
        scrollToEnd();
    }
});
var scrollViewHeight = 30;
//Scrolls widget content to the bottom
var scrollToEnd = function () {
    $("#myScrollView").dxScrollView("instance").scrollToElement($("#end"));
    $("#myScrollView").dxScrollView("instance").update(true);
};
//<!--@Knockout-->
var myViewModel = {
    updateScrollView: ko.observable(false),
    resizeScrollView: function () {
        if (scrollViewHeight >= 70) {
            scrollViewHeight = 30;
            setTimeout(scrollToEnd, 500);
        }
        else
            scrollViewHeight += 10;
        $("#myScrollView").css({ height: scrollViewHeight + '%' });
        if (this.updateScrollView())
            $("#myScrollView").dxScrollView("instance").update(true);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.updateScrollView = false;
    $scope.resizeScrollView = function () {
        if (scrollViewHeight >= 70) {
            scrollViewHeight = 30;
            setTimeout(scrollToEnd, 500);
        }
        else
            scrollViewHeight += 10;
        $("#myScrollView").css({ height: scrollViewHeight + '%' });
        if ($scope.updateScrollView)
            $("#myScrollView").dxScrollView("instance").update(true);
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var updateScrollView = false;
$("#myScrollView").dxScrollView();
$("#resizeButton").dxButton({
    text: "Resize scroll view",
    onClick: function () {
        if (scrollViewHeight >= 70) {
            scrollViewHeight = 30;
            setTimeout(scrollToEnd, 500);
        }
        else
            scrollViewHeight += 10;
        $("#myScrollView").css({ height: scrollViewHeight + '%' });
        if (updateScrollView)
            $("#myScrollView").dxScrollView("instance").update(true);
    }
});
$("#updateSelector").dxCheckBox({
    text: "Update scroll view on resize",
    onValueChanged: function (e) {
        updateScrollView = e.value;
    }
});
//<!--/@jQuery-->
setTimeout(scrollToEnd, 500);
