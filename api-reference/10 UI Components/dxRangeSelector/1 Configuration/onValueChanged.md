---
id: dxRangeSelector.Options.onValueChanged
type: function(e) | undefined
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed after the UI component's [value](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/value '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/#value') is changed.

##### param(e): viz/range_selector:ValueChangedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam This field is **undefined** if the value is changed programmatically.

##### field(e.previousValue): Array<Number, String, Date>
Two values that represent old start and end values.

##### field(e.value): Array<Number, String, Date>
Two values that represent new start and end values.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSelector/UseRangeSelectionForFiltering/"
}

#####See Also#####
#include common-link-handleevents
- [selectedRangeUpdateMode](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/selectedRangeUpdateMode.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/#selectedRangeUpdateMode')