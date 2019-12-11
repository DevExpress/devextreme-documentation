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
    submenuHiding: function () {
        DevExpress.ui.notify("Submenu is being hidden now", "error", 1500);
    },
    submenuShowing: function () {
        DevExpress.ui.notify("Submenu is being shown now", "success", 1500);
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
    $scope.submenuHiding = function () {
        DevExpress.ui.notify("Submenu is being hidden now", "error", 1500);
    };
    $scope.submenuShowing = function () {
        DevExpress.ui.notify("Submenu is being shown now", "success", 1500);
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
    ],
    onSubmenuHiding: function () {
        DevExpress.ui.notify("Submenu is being hidden now", "error", 1500);
    },
    onSubmenuShowing: function () {
        DevExpress.ui.notify("Submenu is being shown now", "success", 1500);
    }
});
//<!--/@jQuery-->