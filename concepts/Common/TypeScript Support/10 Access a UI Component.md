---
tags: typescript support, access a UI component, change properties, call methods, handle events
---
To access a UI component, you need to obtain its instance first. Note that the variable that will contain the UI component instance should have a `DevExpress.viz.WidgetName` or `DevExpress.ui.WidgetName` type. For example, see how you can obtain the instance of a Chart UI component.

    var chartInstance: DevExpress.viz.dxChart;
    chartInstance = $('#chartContainer').dxChart('instance');

Now that you have the UI component instance, use jQuery to [get and set UI component options](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/05%20Get%20and%20Set%20Properties/00%20Get%20and%20Set%20Properties.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Get_and_Set_Properties'), [call methods](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/10%20Call%20Methods.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Call_Methods') or [handle events](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/15%20Handle%20Events/00%20Handle%20Events.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Handle_Events').

