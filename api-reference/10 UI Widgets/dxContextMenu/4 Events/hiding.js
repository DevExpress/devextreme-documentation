var flag = false;
var canHideMenu = false;
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
    contextMenuInstance: {},
    onInitialized: function (e) {
        myViewModel.contextMenuInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.contextMenuInstance.on(
                "hiding", function (e) {
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
                        e.component.hide();
                    })
                }
            );
            e.component.option("text", "Unsubscribe from hiding event");
            flag = true;
        } else {
            myViewModel.contextMenuInstance.off("hiding");
            e.component.option("text", "Subscribe to hiding event");
            flag = false;
        }
    }
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
    $scope.contextMenuInstance = {};
    $scope.onInitialized = function (e) {
        $scope.contextMenuInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.contextMenuInstance.on(
                "hiding", function (e) {
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
                        e.component.hide();
                    })
                }
            );
            e.component.option("text", "Unsubscribe from hiding event");
            flag = true;
        } else {
            $scope.contextMenuInstance.off("hiding");
            e.component.option("text", "Subscribe to hiding event");
            flag = false;
        }
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myContextMenu").dxContextMenu({
    items: [
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
    target: '#contextMenuTarget'
});
$("#button").dxButton({
    text: 'Subscribe to Hiding event',
    onClick: function (e) {
        if (flag === false) {
            $("#myContextMenu").dxContextMenu("instance").on(
                "hiding", function (e) {
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
                        e.component.hide();
                    })
                }
            );
            e.component.option("text", "Unsubscribe from Hiding event");
            flag = true;
        } else {
            $("#myContextMenu").dxContextMenu("instance").off("hiding");
            e.component.option("text", "Subscribe to Hiding event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
