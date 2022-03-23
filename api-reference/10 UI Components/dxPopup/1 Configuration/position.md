---
id: dxPopup.Options.position
acceptValues: 'bottom' | 'center' | 'left' | 'left bottom' | 'left top' | 'right' | 'right bottom' | 'right top' | 'top'
type: String | positionConfig | function()
---
---
##### shortDescription
Positions the UI component.

---
#include uiwidgets-ref-position

If you do not specify the [container](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/container.md '{basewidgetpath}/Configuration/#container') property and set the **position**.[of](/api-reference/50%20Common/Object%20Structures/positionConfig/of.md '/Documentation/ApiReference/Common/Object_Structures/PositionConfig/#of') to a specific element, the [shading](/api-reference/10%20UI%20Components/dxOverlay/1%20Configuration/shading.md '{basewidgetpath}/Configuration/#shading') applies to this element. The {WidgetName} calculates its size relative to the element.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popup/Overview/",
    name: "Popup"
}