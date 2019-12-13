---
id: dxRangeSelector.Options.onValueChanged
type: function(e)
default: null
EventForAction: dxRangeSelector.valueChanged
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed after the widget's [value](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/value '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#value') is changed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.previousValue): Array<Number, String, Date>
Two values that represent old start and end values.

##### field(e.value): Array<Number, String, Date>
Two values that represent new start and end values.

---
The **onValueChanged** function can be called when a user moves a slider or after he/she has stopped moving it. To specify the required mode, use the **behavior**.[callValueChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/behavior/callValueChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/behavior/#callValueChanged') option.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSelector/UseRangeSelectionForFiltering/"
}

#####See Also#####
#include common-link-handleevents
- [selectedRangeUpdateMode](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/selectedRangeUpdateMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#selectedRangeUpdateMode')