To call a method, you need to obtain the widget instance first. You can use jQuery to do this.

    <!--JavaScript-->var chartInstance = $("#menuContainer").dxMenu("instance");

As an alternative, you can save the widget instance in a scope property once the widget is initialized.

    <!--JavaScript-->function Controller ($scope) {
        $scope.menuInstance = {};
        $scope.menutOptions = {
            // ...
            onInitialized: function (e) {
                $scope.menuInstance = e.component;    
            }
        };
    }

After that, you can call any method of the saved instance.

    <!--JavaScript-->menuInstance.repaint();

#####See Also#####
- [Reference](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Widgets/') | **WidgetName** | **Methods** - describes all methods of a specific DevExtreme widget.