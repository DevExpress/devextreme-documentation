---
id: dxLookup.Options.onValueChanged
type: function(e)
default: null
EventForAction: dxLookup.valueChanged
---
---
##### shortDescription
A function that is executed after the UI component's [value](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#value') is changed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam This field is **undefined** if the value is changed programmatically.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.previousValue): Object
The UI component's previous value.

##### field(e.value): Object
The UI component's new value.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/EventHandling/"
}

#####See Also#####
- [valueChangeEvent]({basewidgetpath}/Configuration/#valueChangeEvent)