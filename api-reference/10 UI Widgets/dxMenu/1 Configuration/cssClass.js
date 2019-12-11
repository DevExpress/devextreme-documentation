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
    ]
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
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var menuItems = [
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
$("#menuWithoutCssClass").dxMenu({
    items: menuItems
});
$("#menuWithCssClass").dxMenu({
    items: menuItems,
    cssClass: 'customClass'
});
//<!--/@jQuery-->