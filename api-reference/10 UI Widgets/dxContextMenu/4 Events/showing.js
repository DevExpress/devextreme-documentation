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
                "showing", function (e) {
                    if (canHideMenu) {
                        canHideMenu = false;
                        return;
                    }
                    var result = DevExpress.ui.dialog.confirm("Context menu is showing now. Continue?", "Confirm showing");
                    e.cancel = true;
                    result.done(function (dialogResult) {
                        if (!dialogResult)
                            return;
                        canHideMenu = true;
                        e.component.show();
                    })
                }
            );
            e.component.option("text", "Unsubscribe from Showing event");
            flag = true;
        } else {
            myViewModel.contextMenuInstance.off("showing");
            e.component.option("text", "Subscribe to Showing event");
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
                "showing", function (e) {
                    if (canHideMenu) {
                        canHideMenu = false;
                        return;
                    }
                    var result = DevExpress.ui.dialog.confirm("Context menu is showing now. Continue?", "Confirm showing");
                    e.cancel = true;
                    result.done(function (dialogResult) {
                        if (!dialogResult)
                            return;
                        canHideMenu = true;
                        e.component.show();
                    })
                }
            );
            e.component.option("text", "Unsubscribe from Showing event");
            flag = true;
        } else {
            $scope.contextMenuInstance.off("showing");
            e.component.option("text", "Subscribe to Showing event");
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
    text: 'Subscribe to showing event',
    onClick: function (e) {
        if (flag === false) {
            $("#myContextMenu").dxContextMenu("instance").on(
                "showing", function (e) {
                    if (canHideMenu) {
                        canHideMenu = false;
                        return;
                    }
                    var result = DevExpress.ui.dialog.confirm("Context menu is showing now. Continue?", "Confirm showing");
                    e.cancel = true;
                    result.done(function (dialogResult) {
                        if (!dialogResult)
                            return;
                        canHideMenu = true;
                        e.component.show();
                    })
                }
            );
            e.component.option("text", "Unsubscribe from Showing event");
            flag = true;
        } else {
            $("#myContextMenu").dxContextMenu("instance").off("showing");
            e.component.option("text", "Subscribe to Showing event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
