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
Provides access to the widget instance.

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

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/EventHandling/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>