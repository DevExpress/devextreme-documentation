---
EventForAction: ..\4 Events\valueChanged.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **valueChanged** event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.value): Object
The widget's new value.

##### field(e.previousValue): Object
The widget's previous value.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/Types/#Event) when you use jQuery.

---
Assign a function to perform a custom action when the editor value changes.

Use the **selectedItem** field of the argument object passed to the [onSelectionChanged]({basewidgetpath}\configuration\#onSelectionChanged) event handler to access selected item.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/EventHandling/jQuery/Light/"
}