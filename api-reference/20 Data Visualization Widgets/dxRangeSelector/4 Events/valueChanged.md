---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when the selected range is changed.

##### param(e): object
Information about the event.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Methods/#instance').

##### field(e.element): object
The widget's container.

##### field(e.value): array
Two values that represent new start and end values.

##### field(e.previousValue): array
Two values that represent old start and end values.

---
When implementing a handling function, use the object passed to it as the parameter. Among fields of this object, you can find old and new start and end range values.

The **valueChanged** event can be fired when a user moves a slider or after he/she has stopped moving it. To specify the required mode, use the **behavior**.[callValueChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/behavior/callValueChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/behavior/#callValueChanged') option.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/charts-advanced_features-zooming_and_scrolling_api"
}

#####See Also#####
- [onValueChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#onValueChanged')
#include common-link-handleevents