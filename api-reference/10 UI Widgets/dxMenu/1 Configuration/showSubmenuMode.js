//<!--@Knockout-->
var myViewModel = {
    menuItems: [
        {
            text: "Guides",
            items: [
                { text: "Demos Inside" },
                {
                    text: "UI Widgets",
                    items: [
                        { text: "Knockout Approach" },
                        { text: "jQuery Approach" },
                        { text: "Angular Approach" }
                    ]
                },
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
    modeValues: ["onHover", "onHoverStay", "onClick"],
    currentMode: ko.observable("onHover")
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
                {
                    text: "UI Widgets",
                    items: [
                        { text: "Knockout Approach" },
                        { text: "jQuery Approach" },
                        { text: "Angular Approach" }
                    ]
                },
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
    $scope.modeValues = ["onHover", "onHoverStay", "onClick"];
    $scope.currentMode = "onHover";
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
                {
                    text: "UI Widgets",
                    items: [
                        { text: "Knockout Approach" },
                        { text: "jQuery Approach" },
                        { text: "Angular Approach" }
                    ]
                },
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
$("#modeSelector").dxSelectBox({
    items: ["onHover", "onHoverStay", "onClick"],
    value: "onHover",
    onValueChanged: function (e) {
        $("#myMenu").dxMenu("instance").option("showSubmenuMode", e.value);
    }
});
//<!--/@jQuery-->