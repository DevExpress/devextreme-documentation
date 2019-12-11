The toolbar can contain different DevExtreme widgets other than [buttons and select boxes](/concepts/05%20Widgets/HtmlEditor/10%20Toolbar/00%20Built-In%20Controls '/Documentation/Guide/Widgets/HtmlEditor/Toolbar/Built-In_Controls/'). Assign the widget's name to the [widget](/api-reference/10%20UI%20Widgets/dxHtmlEditor/1%20Configuration/toolbar/items/widget.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#widget') option and configure it in the [options](/api-reference/10%20UI%20Widgets/dxToolbar/5%20Default%20Item%20Template/options.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#options') object. In this case, you need to implement all the logic.

You can find an example in the [widget](/api-reference/10%20UI%20Widgets/dxHtmlEditor/1%20Configuration/toolbar/items/widget.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#widget') description or the following demo:

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/ToolbarCustomization/"
}