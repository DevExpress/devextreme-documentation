---
tags: basics, angularjs, call methods, UI component instance
---
To call a UI component method, you can apply techniques described in the [Call Methods](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/10%20Call%20Methods.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Call_Methods') topic for jQuery.

As an alternative, you can save the UI component instance in a scope property once the UI component is initialized...

    <!--JavaScript-->function Controller ($scope) {
        $scope.menuInstance = {};
        $scope.menuOptions = {
            // ...
            onInitialized: function (e) {
                $scope.menuInstance = e.component;    
            }
        };
    }

    <!--HTML--><div ng-controller="Controller">
        <div dx-menu="menuOptions"></div>
    </div>

... and call any method of the saved instance afterwards.

    <!--JavaScript-->$scope.menuInstance.repaint();

#####See Also#####
- **API Reference**.**WidgetName**.**Methods**, for example, **API Reference**.[Menu](/api-reference/10%20UI%20Components/dxMenu '/Documentation/ApiReference/UI_Components/dxMenu/').[Methods](/api-reference/10%20UI%20Components/dxMenuBase/3%20Methods '/Documentation/ApiReference/UI_Components/dxMenu/Methods/')

