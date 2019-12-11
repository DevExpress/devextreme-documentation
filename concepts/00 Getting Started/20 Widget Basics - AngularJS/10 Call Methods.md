To call a widget method, you can apply techniques described in the [Call Methods](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/10%20Call%20Methods.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods') topic for jQuery.

As an alternative, you can save the widget instance in a scope property once the widget is initialized...

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
- **API Reference**.**WidgetName**.**Methods**, for example, **API Reference**.[Menu](/api-reference/10%20UI%20Widgets/dxMenu '/Documentation/ApiReference/UI_Widgets/dxMenu/').[Methods](/api-reference/10%20UI%20Widgets/dxMenuBase/3%20Methods '/Documentation/ApiReference/UI_Widgets/dxMenu/Methods/')

[tags]basics, angularjs, call methods, widget instance