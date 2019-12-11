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
var flag = false;
//<!--@Knockout-->
var myViewModel = {
    scrollViewInstance: {},
    initializedHAndler: function (e) {
        myViewModel.scrollViewInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.scrollViewInstance
                .on("scroll", function (e) {
                    DevExpress.ui.notify("Scrolling is performed", "success");
                }
                );
            e.component.option("text", "Unsubscribe from Scroll events");
            flag = true;
        } else {
            myViewModel.scrollViewInstance
                .off("scroll");
            e.component.option("text", "Subscribe to Scroll events");
            flag = false;
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.scrollViewInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.scrollViewInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.scrollViewInstance
                .on("scroll", function (e) {
                    DevExpress.ui.notify("Scrolling is performed", "success");
                }
                );
            e.component.option("text", "Unsubscribe from Scroll event");
            flag = true;
        } else {
            $scope.scrollViewInstance.off("scroll");
            e.component.option("text", "Subscribe to Scroll event");
            flag = false;
        }
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myScrollView").dxScrollView();
$("#button").dxButton({
    text: 'Subscribe to scroll event',
    onClick: function (e) {
        if (flag === false) {
            $("#myScrollView").dxScrollView("instance")
                    .on("scroll", function (e) {
                        DevExpress.ui.notify("Scrolling is performed", "success");
                    }
                );
            e.component.option("text", "Unsubscribe from Scroll event");
            flag = true;
        } else {
            $("#myScrollView").dxScrollView("instance")
                .off("scroll")
            e.component.option("text", "Subscribe to Scroll event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
