---
id: dxPopup.Options.position
acceptValues: 'bottom' | 'center' | 'left' | 'left bottom' | 'left top' | 'right' | 'right bottom' | 'right top' | 'top'
<<<<<<< HEAD
type: String | positionConfig | function()
---
=======
type: String | PositionConfig | function()
default: { my: 'center', at: 'center', of: window }
---
---
##### shortDescription
Positions the UI component.

---
#include uiwidgets-ref-position

If you do not specify the [container]({basewidgetpath}/Configuration/#container) property and set the **position**.[of](/Documentation/ApiReference/Common/Object_Structures/PositionConfig/#of) to a specific element, the [shading]({basewidgetpath}/Configuration/#shading) applies to this element. The {WidgetName} calculates its size relative to the element.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popup/Overview/",
    name: "Popup"
}
#####See Also#####
- [restorePostion](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/restorePosition.md '{basewidgetpath}/Configuration/#restorePosition')
>>>>>>> 8fe262fac (Overlays: describe container and position options in more details (#3526))
