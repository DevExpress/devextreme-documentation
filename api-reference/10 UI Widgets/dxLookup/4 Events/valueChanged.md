---
type: event
---
---
##### shortDescription
Fires when the editor value changes.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.value): object
Specifies the widget's new value.

##### field(e.previousValue): object
Specifies the widget's previous value.

##### field(e.jQueryEvent): jQueryEvent
A deprecated field. Use the itemData field instead.

---
Instead, you can use the [onValueChanged](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#onValueChanged') option to handle the event.

Use the **selectedItem** field of the argument object passed to the [selectionChanged]({basewidgetpath}\events\#selectionChanged) event handler to access the selected item.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')