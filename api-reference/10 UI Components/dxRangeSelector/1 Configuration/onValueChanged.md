---
id: dxRangeSelector.Options.onValueChanged
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed after the UI component's [value](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/value '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/#value') is changed.

##### param(e): ValueChangedEvent
Information about the event.

---
The **onValueChanged** function can be called when a user moves a slider or after he/she has stopped moving it. To specify the required mode, use the **behavior**.[callValueChanged](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/behavior/callValueChanged.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/behavior/#callValueChanged') property.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSelector/UseRangeSelectionForFiltering/"
}

#####See Also#####
#include common-link-handleevents
- [selectedRangeUpdateMode](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/selectedRangeUpdateMode.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/#selectedRangeUpdateMode')