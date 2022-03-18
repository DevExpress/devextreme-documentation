---
id: dxLoadPanel.Options.container
type: String | UserDefinedElement
default: undefined
---
---
##### shortDescription
Specifies the UI component's container.

---
The UI component defines the default container on its initialization. This default container can be one of the following (if the element is absent, the component selects the next one):
- [color swatch container](https://js.devexpress.com/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Color_Swatches) 
- **.dx-viewport** 
- **body**

If you set this property to the particular element, the [shading]({basewidgetpath}/Configuration/#shading) applies to this element. The {WidgetName} calculates its size relatively to this element.

