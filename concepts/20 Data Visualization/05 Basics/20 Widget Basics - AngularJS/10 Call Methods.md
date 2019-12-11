To call a method, you need to obtain the widget instance first. You can use jQuery to do this.

    <!--JavaScript-->var chartInstance = $("#chartContainer").dxChart("instance");

As an alternative, you can save the widget instance in a scope property once the widget is initialized.

    <!--JavaScript-->function Controller ($scope) {
        $scope.chartInstance = {};
        $scope.chartOptions = {
            // ...
            onInitialized: function (e) {
                $scope.chartInstance = e.component;    
            }
        };
    }

After that, you can call any method of the saved instance.

    <!--JavaScript-->var series = chartInstance.getAllSeries();

#####See Also#####
- [Reference](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/') | **WidgetName** | **Methods** - describes all methods of a specific DevExtreme widget.