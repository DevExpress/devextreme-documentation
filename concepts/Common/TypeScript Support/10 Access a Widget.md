To access a widget, you need to obtain its instance first. Note that the variable that will contain the widget instance should have a `DevExpress.viz.WidgetName` or `DevExpress.ui.WidgetName` type. For example, see how you can obtain the instance of a **Chart** widget.

    var chartInstance: DevExpress.viz.dxChart;
    chartInstance = $('#chartContainer').dxChart('instance');

Now that you have the widget instance, use jQuery to [get and set widget options](/Documentation/20_1/Guide/jQuery_Components/Component_Configuration_Syntax/#Get_and_Set_Options), [call methods](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/10%20Call%20Methods.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Call_Methods') or [handle events](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/15%20Handle%20Events/00%20Handle%20Events.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Handle_Events').

[tags]typescript support, access a widget, change options, call methods, handle events