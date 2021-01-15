To call a UI component method, pass its name to the jQuery plugin.

    <!--JavaScript-->
    var allSeries = $("#chartContainer").dxChart("getAllSeries");

If a method accepts arguments, pass them right after the method's name.

    <!--JavaScript-->
    var fruitsSeries = $("#chartContainer").dxChart("getSeriesByName", "fruits");

As an alternative, you can [obtain the UI component instance](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/13%20Get%20a%20Widget%20Instance.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Get_a_Widget_Instance') first, and then call any method of this instance.

    <!--JavaScript-->
    var chartInstance = $("#chartContainer").dxChart("instance");
    var allSeries = chartInstance.getAllSeries();
    var fruitsSeries = chartInstance.getSeriesByName("fruits");

#####See Also#####
- **API Reference**.**WidgetName**.**Methods**, for example, **API Reference**.[Chart](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/').[Methods](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/'Methods/)

[tags]basics, jquery, call methods, UI component instance, method arguments
