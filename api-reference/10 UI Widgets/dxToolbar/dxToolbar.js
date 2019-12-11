//<!--@Knockout-->
var myViewModel = {
    toolbarItems: [
        {
            location: 'before',
            widget: 'dxButton',
            options: {
                type: 'back',
                text: 'Back',
                onClick: function () {
                    DevExpress.ui.notify("The 'Back' button is clicked", "info", 2000);
                }
            }
        },
        {
            locateInMenu: 'always',
            text: "Add",
            onClick: function () {
                DevExpress.ui.notify("The 'Add' item is clicked", "info", 2000);
            }
        },
        {
            locateInMenu: 'always',
            text: "Change",
            onClick: function () {
                DevExpress.ui.notify("The 'Change' item is clicked", "info", 2000);
            }
        },
        {
            locateInMenu: 'always',
            text: "Remove",
            onClick: function () {
                DevExpress.ui.notify("The 'Remove' item is clicked", "info", 2000);
            }
        },
        {
            location: 'center',
            text: 'Products'
        }
    ]
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.toolbarItems = [
        {
            location: 'before',
            widget: 'dxButton',
            options: {
                type: 'back',
                text: 'Back',
                onClick: function () {
                    DevExpress.ui.notify("The 'Back' button is clicked", "info", 2000);
                }
            }
        },
        {
            locateInMenu: 'always',
            text: "Add",
            onClick: function () {
                DevExpress.ui.notify("The 'Add' item is clicked", "info", 2000);
            }
        },
        {
            locateInMenu: 'always',
            text: "Change",
            onClick: function () {
                DevExpress.ui.notify("The 'Change' item is clicked", "info", 2000);
            }
        },
        {
            locateInMenu: 'always',
            text: "Remove",
            onClick: function () {
                DevExpress.ui.notify("The 'Remove' item is clicked", "info", 2000);
            }
        },
        {
            location: 'center',
            text: 'Products'
        }
    ];
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myToolbar").dxToolbar({
    dataSource: [
        {
            location: 'before',
            widget: 'dxButton',
            options: {
                type: 'back',
                text: 'Back',
                onClick: function () {
                    DevExpress.ui.notify("The 'Back' button is clicked", "info", 2000);
                }
            }
        },
        {
            locateInMenu: 'always',
            text: "Add",
            onClick: function () {
                DevExpress.ui.notify("The 'Add' item is clicked", "info", 2000);
            }
        },
        {
            locateInMenu: 'always',
            text: "Change",
            onClick: function () {
                DevExpress.ui.notify("The 'Change' item is clicked", "info", 2000);
            }
        },
        {
            locateInMenu: 'always',
            text: "Remove",
            onClick: function () {
                DevExpress.ui.notify("The 'Remove' item is clicked", "info", 2000);
            }
        },
        {
            location: 'center',
            text: 'Products'
        }
    ]
});
//<!--/@jQuery-->
