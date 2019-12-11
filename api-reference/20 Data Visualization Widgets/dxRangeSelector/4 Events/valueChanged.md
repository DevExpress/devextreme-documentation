---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when the selected range is changed.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.value): Array<number,string,Date>
Two values that represent new start and end values.

##### field(e.previousValue): Array<number,string,Date>
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