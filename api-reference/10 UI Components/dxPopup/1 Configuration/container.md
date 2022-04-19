---
id: dxPopup.Options.container
type: String | UserDefinedElement
default: undefined
---
---
##### shortDescription
Specifies the container in which to render the UI component.

---
The UI component defines the default container on its initialization. This default container can be one of the following (if the element is absent, the component selects the next one):
- [color swatch container](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Color_Swatches) 
- **.dx-viewport** 
- **body**

If you set this property to a specific element, the [shading](/api-reference/10%20UI%20Components/dxOverlay/1%20Configuration/shading.md '{basewidgetpath}/Configuration/#shading') applies to this element. The {WidgetName} calculates its size relative to the element.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popup/Overview/",
    name: "Popup"
}
