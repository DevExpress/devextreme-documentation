//<!--@Knockout-->
setLayout = function (layout) {
    currentLayout = layout;
    $(".box").dxResponsiveBox("instance").repaint();
};
currentLayout = "xs";
var myViewModel = {
    rowItems: [
            { ratio: 1 },
            { ratio: 2 },
            { ratio: 2, screen: 'sm md' },
            { ratio: 1 }
    ],
    colItems: [
            { ratio: 1 },
            { ratio: 2, screen: 'lg' },
            { ratio: 1 }
    ],
    getScreenFactor: function (width) {
        return currentLayout;
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
setLayout = function (layout) {
    currentLayout = layout;
    $(".box").dxResponsiveBox("instance").repaint();
};
currentLayout = "xs";
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.rowItems = [
            { ratio: 1 },
            { ratio: 2 },
            { ratio: 2, screen: 'sm md' },
            { ratio: 1 }
    ];
    $scope.colItems = [
            { ratio: 1 },
            { ratio: 2, screen: 'lg' },
            { ratio: 1 }
    ];
    $scope.getScreenFactor = function (width) {
        return currentLayout;
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
setLayout = function (layout) {
    currentLayout = layout;
    $("#myResponsiveBox").dxResponsiveBox("instance").repaint();
};
currentLayout = "xs";
$("#myResponsiveBox").dxResponsiveBox({
    singleColumnScreen: "xs",
    rows: [
            { ratio: 1 },
            { ratio: 2 },
            { ratio: 2, screen: 'sm md' },
            { ratio: 1 }
    ],
    cols: [
            { ratio: 1 },
            { ratio: 2, screen: 'lg' },
            { ratio: 1 }
    ],
    screenByWidth: function (width) {
        return currentLayout;
    }
});
//<!--/@jQuery-->