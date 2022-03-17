---
id: dxLoadPanel.Options.container
type: String | UserDefinedElement
default: undefined
---
---
##### shortDescription
Specifies the UI component's container.

---
The UI component defines the default container on its initialization. It is the [color swatch container](https://js.devexpress.com/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Color_Swatches), the viewport if the color swatch container is not found or the body element if the previous two are absent.

If you set this property to the particular element, the area of this element can be shaded. The {WidgetName} calculates its relative size relatively to this element.
