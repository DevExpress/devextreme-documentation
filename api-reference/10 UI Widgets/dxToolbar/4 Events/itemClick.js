var flag = false;
//<!--@Knockout-->
var myViewModel = {
    toolbarItems: [
        {
            location: 'before',
            widget: 'dxButton',
            options: {
                type: 'back',
                text: 'Back'
            }
        },
        {
            locateInMenu: 'always',
            text: "Add"
        },
        {
            locateInMenu: 'always',
            text: "Change"
        },
        {
            locateInMenu: 'always',
            text: "Remove"
        },
        {
            location: 'center',
            text: 'Products'
        }
    ],
    toolbarInstance: {},
    initializedHandler: function (e) {
        myViewModel.toolbarInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.toolbarInstance.on(
                "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemElement.context.innerText + "\" item is clicked", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            myViewModel.toolbarInstance.off("itemClick");
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
    $scope.toolbarItems = [
        {
            location: 'before',
            widget: 'dxButton',
            options: {
                type: 'back',
                text: 'Back'
            }
        },
        {
            locateInMenu: 'always',
            text: "Add"
        },
        {
            locateInMenu: 'always',
            text: "Change"
        },
        {
            locateInMenu: 'always',
            text: "Remove"
        },
        {
            location: 'center',
            text: 'Products'
        }
    ];
    $scope.toolbarInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.toolbarInstance = e.component;
    }
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.toolbarInstance.on(
                "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemElement.context.innerText + "\" item is clicked", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            $scope.toolbarInstance.off("itemClick");
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
$("#myToolbar").dxToolbar({
    dataSource: [
       {
           location: 'before',
           widget: 'dxButton',
           options: {
               type: 'back',
               text: 'Back'
           }
       },
       {
           locateInMenu: 'always',
           text: "Add"
       },
       {
           locateInMenu: 'always',
           text: "Change"
       },
       {
           locateInMenu: 'always',
           text: "Remove"
       },
       {
           location: 'center',
           text: 'Products'
       }
    ]
});
$("#myButton").dxButton({
    text: 'Subscribe to ItemClick event',
    onClick: function (e) {
        if (flag === false) {
            $("#myToolbar").dxToolbar("instance").on(
                    "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemElement.context.innerText + "\" item is clicked", "success", 1500); }
                );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            $("#myToolbar").dxToolbar("instance").off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
