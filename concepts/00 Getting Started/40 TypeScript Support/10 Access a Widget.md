To access a widget, you need to obtain its instance first. Note that the variable that will contain the widget instance should have a `DevExpress.viz.WidgetName` or `DevExpress.ui.WidgetName` type. For example, see how you can obtain the instance of a **Chart** widget.

    var chartInstance: DevExpress.viz.dxChart;
    chartInstance = $('#chartContainer').dxChart('instance');

Now that you have the widget instance, use jQuery to [get and set widget options](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/05%20Get%20and%20Set%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_and_Set_Options'), [call methods](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/10%20Call%20Methods.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods') or [handle events](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events').

[tags]typescript support, access a widget, change options, call methods, handle events