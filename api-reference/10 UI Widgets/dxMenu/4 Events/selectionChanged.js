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
    initializedHandler: function (e) {
        myViewModel.menuInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.menuInstance.on(
                "selectionChanged", function (e) { DevExpress.ui.notify("The \"" + e.addedItems[0].text + "\" item is selected", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from SelectionChanged event");
            flag = true;
        } else {
            myViewModel.menuInstance.off("selectionChanged");
            e.component.option("text", "Subscribe to SelectionChanged event");
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
    $scope.initializedHandler = function (e) {
        $scope.menuInstance = e.component;
    }
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.menuInstance.on(
                "selectionChanged", function (e) { DevExpress.ui.notify("The \"" + e.addedItems[0].text + "\" item is selected", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from SelectionChanged event");
            flag = true;
        } else {
            $scope.menuInstance.off("selectionChanged");
            e.component.option("text", "Subscribe to SelectionChanged event");
            flag = false;
        }
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myMenu").dxMenu({
    selectionMode: 'single',
    selectByClick: true,
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
$("#myButton").dxButton({
    text: 'Subscribe to selectionChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#myMenu").dxMenu("instance")
                .on(
                    "selectionChanged", function (e) { DevExpress.ui.notify("The \"" + e.addedItems[0].text + "\" item is selected", "success", 1500); }
                );
            e.component.option("text", "Unsubscribe from selectionChanged event");
            flag = true;
        } else {
            $("#myMenu").dxMenu("instance").off("selectionChanged");
            e.component.option("text", "Subscribe to selectionChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->