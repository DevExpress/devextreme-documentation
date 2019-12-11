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
    ]
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
    width: 200
});
//<!--/@jQuery-->
