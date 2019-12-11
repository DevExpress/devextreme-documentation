var canHideMenu = false;
var flag = false;
//<!--@Knockout-->
var myViewModel = {
    menuItems: [
       {
           text: "Guides",
           items: [
               { text: "Demos Inside" },
               { text: "UI Widgets" },
               { text: "Data Visualization" },
               { text: "Themes" },
               { text: "Common" }
           ]
       },
       {
           text: "Reference",
           items: [
               { text: 'Data Library' },
               { text: 'UI Widgets' },
               { text: 'Data Visualization Widgets' },
               { text: 'CSS Classes' },
               { text: 'UI Events' }
           ]
       }
    ],
    menuInstance: {},
    onInitialized: function (e) {
        myViewModel.menuInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.menuInstance.on(
                "submenuHiding", function (e) {
                    if (canHideMenu) {
                        canHideMenu = false;
                        return;
                    }
                    var result = DevExpress.ui.dialog.confirm("Submenu is hiding now. Continue?", "Confirm submenuHiding");
                    e.cancel = true;
                    result.done(function (dialogResult) {
                        if (!dialogResult)
                            return;
                        canHideMenu = true;
                        e.component.repaint();
                    })
                }
            );
            e.component.option("text", "Unsubscribe from submenuHiding event");
            flag = true;
        } else {
            myViewModel.menuInstance.off("submenuHiding");
            e.component.option("text", "Subscribe to submenuHiding event");
            flag = false;
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.menuItems = [
       {
           text: "Guides",
           items: [
               { text: "Demos Inside" },
               { text: "UI Widgets" },
               { text: "Data Visualization" },
               { text: "Themes" },
               { text: "Common" }
           ]
       },
       {
           text: "Reference",
           items: [
               { text: 'Data Library' },
               { text: 'UI Widgets' },
               { text: 'Data Visualization Widgets' },
               { text: 'CSS Classes' },
               { text: 'UI Events' }
           ]
       }
    ];
    $scope.menuInstance = {};
    $scope.onInitialized = function (e) {
        $scope.menuInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.menuInstance.on(
                "submenuHiding", function (e) {
                    if (canHideMenu) {
                        canHideMenu = false;
                        return;
                    }
                    var result = DevExpress.ui.dialog.confirm("Submenu is hiding now. Continue?", "Confirm submenuHiding");
                    e.cancel = true;
                    result.done(function (dialogResult) {
                        if (!dialogResult)
                            return;
                        canHideMenu = true;
                        e.component.repaint();
                    })
                }
            );
            e.component.option("text", "Unsubscribe from SubmenuHiding event");
            flag = true;
        } else {
            $scope.menuInstance.off("submenuHiding");
            e.component.option("text", "Subscribe to SubmenuHiding event");
            flag = false;
        }
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myMenu").dxMenu({
    items: [
        {
            text: "Guides",
            items: [
                { text: "Demos Inside" },
                { text: "UI Widgets" },
                { text: "Data Visualization" },
                { text: "Themes" },
                { text: "Common" }
            ]
        },
        {
            text: "Reference",
            items: [
                { text: 'Data Library' },
                { text: 'UI Widgets' },
                { text: 'Data Visualization Widgets' },
                { text: 'CSS Classes' },
                { text: 'UI Events' }
            ]
        }
    ]
});
$("#button").dxButton({
    text: 'Subscribe to submenuHiding event',
    onClick: function (e) {
        if (flag === false) {
            $("#myMenu").dxMenu("instance").on(
                "submenuHiding", function (e) {
                    if (canHideMenu) {
                        canHideMenu = false;
                        return;
                    }
                    var result = DevExpress.ui.dialog.confirm("Submenu is hiding now. Continue?", "Confirm submenuHiding");
                    e.cancel = true;
                    result.done(function (dialogResult) {
                        if (!dialogResult)
                            return;
                        canHideMenu = true;
                        e.component.repaint();
                    })
                }
            );
            e.component.option("text", "Unsubscribe from submenuHiding event");
            flag = true;
        } else {
            $("#myMenu").dxMenu("instance").off("submenuHiding");
            e.component.option("text", "Subscribe to submenuHiding event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->