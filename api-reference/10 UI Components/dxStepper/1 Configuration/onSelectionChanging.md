---
id: dxStepper.Options.onSelectionChanging
type: function(e)
---
---
##### shortDescription
A function that is called before selection changes.

##### param(e): ui/stepper:SelectionChangingEvent
Information about the event.

##### field(e.addedItems): Array<any>
An array that holds items being added to selection. 

##### field(e.cancel): Boolean | Promise<Boolean>
Allows you to cancel selection change.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.removedItems): Array<any>
An array that holds items being removed from selection.

---
<!-- Description goes here -->