//<!--@Knockout-->
var myViewModel = {
    indicatorVisible: ko.observable(false),
    showIndicator: function () {
        this.indicatorVisible(true);
        setTimeout($.proxy(this.hideIndicator, this), 3000);
    },
    hideIndicator: function(){
        this.indicatorVisible(false);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.indicatorVisible = false,
    $scope.showIndicator = function () {
        $scope.indicatorVisible = true;
        setTimeout(hideIndicator, 3000);
    };
    hideIndicator = function () {
        $("#myLoadIndicator").dxLoadIndicator("instance").option("visible", false);
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myLoadIndicator").dxLoadIndicator({
    visible: false
});
$("#loadButton").dxButton({
    text: 'Load',
    onClick: function () {
        $("#myLoadIndicator").dxLoadIndicator("instance").option("visible", true);
        setTimeout($.proxy(hideIndicator, this), 3000);
    }
});
var hideIndicator = function () {
    $("#myLoadIndicator").dxLoadIndicator("instance").option("visible", false);
}
//<!--/@jQuery-->
