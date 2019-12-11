---
EventForAction: ..\4 Events\valueChanged.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **valueChanged** event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.value): object
Specifies the widget's new value.

##### field(e.previousValue): object
Specifies the widget's previous value.

##### field(e.jQueryEvent): jQueryEvent
A deprecated field. Use the itemData field instead.

---
Assign a function to perform a custom action when the editor value changes.

Use the **selectedItem** field of the argument object passed to the [onSelectionChanged]({basewidgetpath}\configuration\#onSelectionChanged) event handler to access selected item.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/EventHandling/jQuery/Light/"
}