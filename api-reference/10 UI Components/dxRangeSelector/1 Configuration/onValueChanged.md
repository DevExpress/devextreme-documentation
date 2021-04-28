---
id: dxRangeSelector.Options.onValueChanged
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed after the UI component's [value](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/value '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/#value') is changed.

##### param(e): Object
Information about the event.

##### field(e.component): dxRangeSelector
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam This field is **undefined** if the value is changed programmatically.

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.previousValue): Array<Number, String, Date>
Two values that represent old start and end values.

##### field(e.value): Array<Number, String, Date>
Two values that represent new start and end values.

---
The **onValueChanged** function can be called when a user moves a slider or after he/she has stopped moving it. To specify the required mode, use the **behavior**.[callValueChanged](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/behavior/callValueChanged.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/behavior/#callValueChanged') property.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSelector/UseRangeSelectionForFiltering/"
}

#####See Also#####
#include common-link-handleevents
- [selectedRangeUpdateMode](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/selectedRangeUpdateMode.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/#selectedRangeUpdateMode')