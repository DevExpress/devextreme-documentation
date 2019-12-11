To call a widget method, pass its name to the jQuery plugin.

    <!--JavaScript-->var allSeries = $("#chartContainer").dxChart("getAllSeries");

If a method accepts arguments, pass them right after the method's name.

    <!--JavaScript-->var fruitsSeries = $("#chartContainer").dxChart("getSeriesByName", "fruits");

As an alternative, you can obtain the widget instance first, and then call any method of this instance.

    <!--JavaScript-->var chartInstance =$("#chartContainer").dxChart("instance");
    var allSeries = chartInstance.getAllSeries();
    var fruitsSeries = chartInstance.getSeriesByName("fruits");

#####See Also#####
- **API Reference**.**WidgetName**.**Methods**, for example, **API Reference**.[Chart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/').[Methods](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/3%20Methods '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/')

[tags]basics, jquery, call methods, widget instance, method arguments
