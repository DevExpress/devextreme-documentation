The **RadioGroup** is a widget that contains a set of radio buttons and allows an end user to make a single selection from the set.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RadioGroup/Overview/"
}

The following code adds a simple **RadioGroup** to your page. Here, the [value](/api-reference/10%20UI%20Widgets/dxRadioGroup/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#value') option specifies the initially selected radio button.

    <!--HTML-->
    <div id="radioGroupContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#radioGroupContainer").dxRadioGroup({
            dataSource: ["Low", "Normal", "Urgent", "High"],
            value: "Low"
        });
    });

If your data is an array of objects, bind it to the **RadioGroup** using the [displayExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#displayExpr') and [valueExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#valueExpr') options. **displayExpr** specifies which data source field provides texts for buttons; **valueExpr** specifies which data source field provides values to be written to the [value](/api-reference/10%20UI%20Widgets/dxRadioGroup/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#value') option when a button is selected. Leave **valueExpr** unspecified if you need the entire data object to be written to the **value** option.

    <!--JavaScript-->
    var dataItems = [
        { text: "Low", color: "grey" },
        { text: "Normal", color: "green" },
        { text: "Urgent", color: "yellow" },
        { text: "High", color: "red" }
    ];

    $(function() {
        $("#radioGroupContainer").dxRadioGroup({
            dataSource: dataItems,
            displayExpr: "text",
            // valueExpr: "color",
            value: dataItems[1]
        });
    });

The **RadioGroup** widget supports horizontal (default for tablets) and vertical (default for other devices) layouts. To change the layout for all types of devices, specify the [layout](/api-reference/10%20UI%20Widgets/dxRadioGroup/1%20Configuration/layout.md '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#layout') option.

    <!--JavaScript-->
    $(function() {
        $("#radioGroupContainer").dxRadioGroup({
            dataSource: ["Low", "Normal", "Urgent", "High"],
            layout: "horizontal" // or "vertical"
        });
    });

#####See Also#####
#include common-link-configurewidget
- [RadioGroup - Handle the Value Change Event](/concepts/05%20Widgets/RadioGroup/05%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/RadioGroup/Handle_the_Value_Change_Event')
- [RadioGroup - Customize Item Appearance](/concepts/05%20Widgets/RadioGroup/10%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/RadioGroup/Customize_Item_Appearance')
- [RadioGroup - Keyboard Support](/concepts/05%20Widgets/RadioGroup/20%20Keyboard%20Support.md '/Documentation/Guide/Widgets/RadioGroup/Keyboard_Support')
- [RadioGroup API Reference](/api-reference/10%20UI%20Widgets/dxRadioGroup '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/')

[tags]radio group, radioGroup, layout, editor, overview