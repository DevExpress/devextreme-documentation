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
    alternateInvocation: ko.observable(false)
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
    $scope.alternateInvocation = false;
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
    target: '#contextMenuTarget',
    alternativeInvocationMode: {
        enabled: false,
        invokingElement: "#invokeButton"
    }
});
$("#invokeButton").dxButton({
    text: "Show context menu",
    visible: false
});
$("#invocationSelector").dxCheckBox({
    value: false,
    text: "alternateInvocation.enabled",
    onValueChanged: function (e) {
        $("#myContextMenu").dxContextMenu("instance").option("alternativeInvocationMode.enabled", e.value);
        $("#invokeButton").dxButton("instance").option("visible", e.value);
    }
});
//<!--/@jQuery-->
