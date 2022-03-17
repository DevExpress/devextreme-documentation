---
id: dxPopup.Options.container
type: String | UserDefinedElement
default: undefined
---
---
##### shortDescription
Specifies the container in which to render the UI component.

---
The UI component defines the default container on its initialization in the following sequence: [color swatch container](https://js.devexpress.com/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Color_Swatches) => **.dx-viewport** => **body**.

If you set this property to the particular element, the [shading]({basewidgetpath}/Configuration/#shading) applies to this element. The {WidgetName} calculates its size relatively to this element.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popup/Overview/",
    name: "Popup"
}
