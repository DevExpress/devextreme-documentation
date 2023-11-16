---
tags: basics, angularjs, handle events, subscribe
---
You can subscribe to an event using a configuration property. All event handling properties are given names that begin with *on*.

    <!--HTML--><div dx-menu="{
        ...
        onItemClick: itemClickHandler,
        onInitializedHandler: initializedHandler
     }"></div>

    <!--JavaScript-->
    function Controller ($scope) {
        $scope.itemClickHandler = function (info) {
            // Handles the "itemClick" event
        };
        $scope.menuInstance = {};
        $scope.initializedHandler = function (info) {
            // Saves the UI component instance
            $scope.menuInstance = info.component;   
            // Handles the "initialized" event
        }
    }

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Menu/Overview/AngularJS/Light/"
}

#####See Also#####
- **API Reference**.**WidgetName**.**Events**, for example, **API Reference**.[Menu](/api-reference/10%20UI%20Components/dxMenu '/Documentation/ApiReference/UI_Components/dxMenu/').[Events](/api-reference/10%20UI%20Components/dxMenu/4%20Events '/Documentation/ApiReference/UI_Components/dxMenu/Events/')

