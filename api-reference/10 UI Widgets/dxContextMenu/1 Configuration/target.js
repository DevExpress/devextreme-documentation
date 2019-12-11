//<!--@Knockout-->
var myViewModel = {
    menuItems: [
        { text: 'Increase' },
        {
            text: 'Share',
            items: [
                { text: 'Send to a friend' },
                { text: 'Send to a group' }]
        },
        { text: 'Download' },
        { text: 'Comment' },
        { text: 'Favorite' }
    ],
    menuTarget: ko.observable("#target1"),
    targets: [
        { name: "Left image", id: "#target1" },
        { name: "Right image", id: "#target2" }
    ]
};
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.menuItems = [
        { text: 'Increase' },
        {
            text: 'Share',
            items: [
                { text: 'Send to a friend' },
                { text: 'Send to a group' }]
        },
        { text: 'Download' },
        { text: 'Comment' },
        { text: 'Favorite' }
    ];
    $scope.menuTarget = "#target1";
    $scope.targets = [
        { name: "Left image", id: "#target1" },
        { name: "Right image", id: "#target2" }
    ];
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myContextMenu").dxContextMenu({
    dataSource: [
        { text: 'Increase' },
        {
            text: 'Share',
            items: [
                { text: 'Send to a friend' },
                { text: 'Send to a group' }]
        },
        { text: 'Download' },
        { text: 'Comment' },
        { text: 'Favorite' }
    ],
    target: '#target1'
});
$("#targetSelector").dxSelectBox({
    dataSource: [
        { name: "Left image", id: "#target1" },
        { name: "Right image", id: "#target2" }
    ],
    displayExpr: 'name',
    valueExpr: 'id',
    value: "#target1",
    onValueChanged: function (e) {
        $("#myContextMenu").dxContextMenu("instance").option("target", e.value);
    }
});
//<!--/@jQuery-->
