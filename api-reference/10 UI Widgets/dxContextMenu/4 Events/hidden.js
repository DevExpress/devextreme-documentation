var flag = false;
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
                "hidden", function (e) {
                            DevExpress.ui.notify("Context menu is hidden", "success", 1000);
                        }
            );
            e.component.option("text", "Unsubscribe from Hidden event");
            flag = true;
        } else {
            myViewModel.contextMenuInstance.off("hidden");
            e.component.option("text", "Subscribe to Hidden event");
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
                "hidden", function (e) {
                            DevExpress.ui.notify("Context menu is hidden", "success", 1000);
                        }
            );
            e.component.option("text", "Unsubscribe from Hidden event");
            flag = true;
        } else {
            $scope.contextMenuInstance.off("hidden");
            e.component.option("text", "Subscribe to Hidden event");
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
    text: 'Subscribe to Hidden event',
    onClick: function (e) {
        if (flag === false) {
            $("#myContextMenu").dxContextMenu("instance").on(
                "hidden", function (e) { DevExpress.ui.notify("Context menu is hidden", "success", 1000); }
            );
            e.component.option("text", "Unsubscribe from Hidden event");
            flag = true;
        } else {
            $("#myContextMenu").dxContextMenu("instance").off("hidden");
            e.component.option("text", "Subscribe to Hidden event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
