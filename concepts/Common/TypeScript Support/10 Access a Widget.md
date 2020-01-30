To access a widget, you need to obtain its instance first. Note that the variable that will contain the widget instance should have a `DevExpress.viz.WidgetName` or `DevExpress.ui.WidgetName` type. For example, see how you can obtain the instance of a **Chart** widget.

    var chartInstance: DevExpress.viz.dxChart;
    chartInstance = $('#chartContainer').dxChart('instance');

Now that you have the widget instance, use jQuery to [get and set widget options](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_and_Set_Options), [call methods](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods) or [handle events](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events).

[tags]typescript support, access a widget, change options, call methods, handle events