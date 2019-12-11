---
module: ui/toolbar
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### widgettree
dataSource: [{
        text: "Contacts",
        location: "before"
    }, {
        text: "Missed"
    }, {
        text: "Favorites",
        location: "after"
    }
]

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Toolbar** is a widget containing items that usually manage screen content. Those items can be plain text or widgets.

---
The main option you should specify when creating a widget is the [dataSource](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/#dataSource'). The following code snippet demonstrates an example of an array that can be passed to the **dataSource** option of the **Toolbar** widget.

    <!--JavaScript-->
    var toolbarItems = [{
        location: 'before',
        widget: 'dxButton',
        options: {
            type: 'back',
            text: 'Back',
            onClick: function (e) {
                DevExpress.ui.notify("Back button clicked", "success", 5000);
            }
        }
    }, {
        locateInMenu: 'always',
        text: "Add",
        onClick: function () {
            // Process item click
        }
    }, {
        locateInMenu: 'always',
        text: "Change",
        onClick: function () {
            // Process item click
        }
    }, {
        locateInMenu: 'always',
        text: "Remove",
        onClick: function () {
            // Process item click
        }
    }, {
        location: 'center',
        text: 'Products'
    }];

You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxToolbar` jQuery plug-in.

        <!--HTML-->
        <div id="myToolbar"></div>

    <!---->

        <!--JavaScript-->
        $("#myToolbar").dxToolbar({
            dataSource: toolbarItems
        });

- **Knockout**  
 Add a div element and apply `dxToolbar` binding to this element.

        <!--HTML-->
        <div data-bind="dxToolbar: {
            dataSource: toolbarDataSource
        }"></div>

    <!---->

        <!--JavaScript-->
        var viewModel = {
            toolbarDataSource: toolbarItems
        }
        ko.applyBindings(viewModel);

- **AngularJS**  
 Add a div element and apply the `dx-toolbar` directive to this element.

        <!--HTML-->
        <div dx-toolbar="{
            dataSource: toolbarDataSource
        }"></div>

    <!---->

        <!--JavaScript-->
        var myApp = angular.module('myApp', ['dx']);
        myApp.controller("demoController", function ($scope) {
            $scope.toolbarDataSource = toolbarItems;
        });

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

Since the **Toolbar** widget is used to display multiple items, it supports common Collection Container widget functionality. You can find detailed information on the principles of working with the widget in the [dxToolbar section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#UI_Widgets_UI_Widget_Categories_Collection_Container_Widgets_List_of_Collection_Container_Widgets_dxToolbar) of the [Collection Container Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/') article.