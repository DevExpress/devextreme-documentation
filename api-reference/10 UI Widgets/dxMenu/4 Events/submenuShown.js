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
            myViewModel.menuInstance
                .on("submenuHidden", function (e) {
                    DevExpress.ui.notify("Submenu is hidden", "error", 1000);
                }
                )
                .on("submenuShown", function (e) {
                    DevExpress.ui.notify("Submenu is shown", "success", 1000);
                }
                );
            e.component.option("text", "Unsubscribe from SubmenuHidden and SubmenuShown event");
            flag = true;
        } else {
            myViewModel.menuInstance
                .off("submenuHidden")
                .off("submenuShown");
            e.component.option("text", "Subscribe to SubmenuHidden and SubmenuShown event");
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
            $scope.menuInstance
                .on("submenuHidden", function (e) {
                    DevExpress.ui.notify("Submenu is hidden", "error", 1000);
                }
                )
                .on("submenuShown", function (e) {
                    DevExpress.ui.notify("Submenu is shown", "success", 1000);
                }
                );
            e.component.option("text", "Unsubscribe from SubmenuHidden and SubmenuShown events");
            flag = true;
        } else {
            $scope.menuInstance
                .off("submenuHidden")
                .off("submenuShown");
            e.component.option("text", "Subscribe to SubmenuHidden and SubmenuShown events");
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
    text: 'Subscribe to SubmenuHidden and SubmenuShown event',
    onClick: function (e) {
        if (flag === false) {
            $("#myMenu").dxMenu("instance")
                .on("submenuHidden", function (e) {
                    DevExpress.ui.notify("Submenu is hidden", "error", 1000);
                }
                )
                .on("submenuShown", function (e) {
                    DevExpress.ui.notify("Submenu is shown", "success", 1000);
                }
                );
            e.component.option("text", "Unsubscribe from SubmenuHidden and SubmenuShown event");
            flag = true;
        } else {
            $("#myMenu").dxMenu("instance")
                .off("submenuHidden")
                .off("subMenuShown")
            e.component.option("text", "Subscribe to SubmenuHidden and SubmenuShown event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->