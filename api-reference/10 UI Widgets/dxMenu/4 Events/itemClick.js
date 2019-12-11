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
                "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemData.text + "\" item is clicked", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            myViewModel.menuInstance.off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
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
                "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemData.text + "\" item is clicked", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            $scope.menuInstance.off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
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
    text: 'Subscribe to ItemClick event',
    onClick: function (e) {
        if (flag === false) {
            $("#myMenu").dxMenu("instance")
                .on(
                    "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemData.text + "\" item is clicked", "success", 1500); }
                );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            $("#myMenu").dxMenu("instance").off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->