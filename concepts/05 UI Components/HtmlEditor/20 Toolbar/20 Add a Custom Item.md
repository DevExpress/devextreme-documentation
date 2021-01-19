The toolbar can contain different DevExtreme UI components other than [buttons and select boxes](/concepts/05%20Widgets/HtmlEditor/20%20Toolbar/00%20Predefined%20Items '/Documentation/Guide/UI_Components/HtmlEditor/Toolbar/Predefined_Items/'). Assign the UI component's name to the [widget](/api-reference/_hidden/dxHtmlEditorToolbarItem/widget.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#widget') property and configure it in the [options](/api-reference/_hidden/dxHtmlEditorToolbar/items/options.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#options') object. In this case, you need to implement all the logic.

You can find an example in the [widget](/api-reference/_hidden/dxHtmlEditorToolbarItem/widget.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#widget') description or the following demo:

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/ToolbarCustomization/"
}