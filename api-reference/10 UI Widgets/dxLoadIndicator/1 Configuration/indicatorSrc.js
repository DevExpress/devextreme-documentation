//<!--@Knockout-->
var myViewModel = {
    indicators: [
        { color: "Blue", path: "/Content/Images/Icons/loadindicator-blue.gif" },
        { color: "Green", path: "/Content/Images/Icons/loadindicator-green.gif" },
        { color: "Red", path: "/Content/Images/Icons/loadindicator-red.gif" },
        { color: "Yellow", path: "/Content/Images/Icons/loadindicator-yellow.gif" }
    ],
    indicatorPath: ko.observable(null)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.indicators = [
        { color: "Blue", path: "/Content/Images/Icons/loadindicator-blue.gif" },
        { color: "Green", path: "/Content/Images/Icons/loadindicator-green.gif" },
        { color: "Red", path: "/Content/Images/Icons/loadindicator-red.gif" },
        { color: "Yellow", path: "/Content/Images/Icons/loadindicator-yellow.gif" }
    ];
    $scope.indicatorPath = null;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myLoadIndicator").dxLoadIndicator({
    visible: true
});
$("#indicatorSelector").dxSelectBox({
    displayExpr: 'color',
    valueExpr: 'path',
    dataSource: [
        { color: "Blue", path: "/Content/Images/Icons/loadindicator-blue.gif" },
        { color: "Green", path: "/Content/Images/Icons/loadindicator-green.gif" },
        { color: "Red", path: "/Content/Images/Icons/loadindicator-red.gif" },
        { color: "Yellow", path: "/Content/Images/Icons/loadindicator-yellow.gif" }
    ],
    onValueChanged: function (e) {
        $("#myLoadIndicator").dxLoadIndicator("instance").option("indicatorSrc", e.value);
    }
});
//<!--/@jQuery-->
