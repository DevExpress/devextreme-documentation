---
id: dxPopup.Options.position
acceptValues: 'bottom' | 'center' | 'left' | 'left bottom' | 'left top' | 'right' | 'right bottom' | 'right top' | 'top'
type: String | PositionConfig | function()
efault: { my: 'center', at: 'center', of: window }
firedEvents: positioned
---
---
##### shortDescription
Positions the UI component.

---
#include uiwidgets-ref-position

If you do not specify the [container]({basewidgetpath}/Configuration/#container) property and set the **position.of** to the particular element, the area of this element can be shaded. The {WidgetName} calculates its relative size relatively to this element.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popup/Overview/",
    name: "Popup"
}
#####See Also#####
- [restorePostion](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/restorePosition.md '{basewidgetpath}/Configuration/#restorePosition')
