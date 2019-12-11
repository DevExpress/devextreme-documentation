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
    menuVisible: ko.observable(false),
    showMenu: function () {
        this.menuVisible(true);
    },
    myValue: ko.observable("left top"),
    atValue: ko.observable("center"),
    positionValues: [
        "left top",
        "top",
        "right top",
        "right",
        "right bottom",
        "bottom",
        "left bottom",
        "left",
        "center"
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
    $scope.menuVisible = false;
    $scope.showMenu = function () {
        $scope.menuVisible = true;
    };
    $scope.myValue = "left top";
    $scope.atValue = "center";
    $scope.positionValues = [
        "left top",
        "top",
        "right top",
        "right",
        "right bottom",
        "bottom",
        "left bottom",
        "left",
        "center"
    ];
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var positionValues = [
        "left top",
        "top",
        "right top",
        "right",
        "right bottom",
        "bottom",
        "left bottom",
        "left",
        "center"
];
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
    target: '#contextMenuTarget',
    position: {
        my: "left top",
        at: "center"
    }
});
$("#mySelector").dxSelectBox({
    dataSource: positionValues,
    value: "left top",
    onValueChanged: function (e) {
        $("#myContextMenu").dxContextMenu("instance").option("position.my", e.value);
    }
});
$("#atSelector").dxSelectBox({
    dataSource: positionValues,
    value: "center",
    onValueChanged: function (e) {
        $("#myContextMenu").dxContextMenu("instance").option("position.at", e.value);
    }
});
$("#showMenuButton").dxButton({
    text: "Show context menu",
    onClick: function () {
        $("#myContextMenu").dxContextMenu("instance").show();
    }
});
//<!--/@jQuery-->
