//<!--@Knockout-->
var canHideMenu = false;
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
    menuHiding: function (e) {
        if (canHideMenu) {
            canHideMenu = false;
            return;
        }
        var result = DevExpress.ui.dialog.confirm("Context menu is hiding now. Continue?", "Confirm hiding");
        e.cancel = true;
        result.done(function (dialogResult) {
            if (!dialogResult)
                return;
            canHideMenu = true;
            $("#myContextMenu").dxContextMenu("instance").hide();
        })
    }
};
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
var canHideMenu = false;
myApp.controller("demoController", function ($scope) {
    $scope.menuItems = [
        { text: 'Increase' },
        {
            text: 'Share',
            items: [
                { text: 'Send to a friend' },
                { text: 'Send to a group' }
            ]
        },
        { text: 'Download' },
        { text: 'Comment' },
        { text: 'Favorite' }
    ];
    $scope.menuHiding = function (e) {
        if (canHideMenu) {
            canHideMenu = false;
            return;
        }
        var result = DevExpress.ui.dialog.confirm("Context menu is hiding now. Continue?", "Confirm hiding");
        e.cancel = true;
        result.done(function (dialogResult) {
            if (!dialogResult)
                return;
            canHideMenu = true;
            $("#myContextMenu").dxContextMenu("instance").hide();
        })
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var canHideMenu = false;
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
    onHiding: function (e) {
        if (canHideMenu) {
            canHideMenu = false;
            return;
        }
        var result = DevExpress.ui.dialog.confirm("Context menu is hiding now. Continue?", "Confirm hiding");
        e.cancel = true;
        result.done(function (dialogResult) {
            if (!dialogResult)
                return;
            canHideMenu = true;
            $("#myContextMenu").dxContextMenu("instance").hide();
        })
    }
});
//<!--/@jQuery-->
