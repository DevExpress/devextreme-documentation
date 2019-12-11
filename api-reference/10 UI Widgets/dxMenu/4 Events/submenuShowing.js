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
                "submenuShowing", function (e) { DevExpress.ui.notify("Submenu is being shown now", "success", 1000); }
            );
            e.component.option("text", "Unsubscribe from submenuShowing event");
            flag = true;
        } else {
            myViewModel.menuInstance.off("submenuShowing");
            e.component.option("text", "Subscribe to submenuShowing event");
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
                "submenuShowing", function (e) { DevExpress.ui.notify("Submenu is being shown now", "success", 1000); }
            );
            e.component.option("text", "Unsubscribe from SubmenuShowing event");
            flag = true;
        } else {
            $scope.menuInstance.off("submenuShowing");
            e.component.option("text", "Subscribe to SubmenuShowing event");
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
    text: 'Subscribe to SubmenuShowing event',
    onClick: function (e) {
        if (flag === false) {
            $("#myMenu").dxMenu("instance").on(
                "submenuShowing", function (e) { DevExpress.ui.notify("Submenu is being shown now", "success", 1000); }
            );
            e.component.option("text", "Unsubscribe from SubmenuShowing event");
            flag = true;
        } else {
            $("#myMenu").dxMenu("instance").off("submenuShowing");
            e.component.option("text", "Subscribe to SubmenuShowing event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->