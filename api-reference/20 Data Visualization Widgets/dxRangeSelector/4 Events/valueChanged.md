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
The <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Methods/#instance">widget instance</a>.

##### field(e.element): object
The widget's container.

##### field(e.value): array
Two values that represent new start and end values.

##### field(e.previousValue): array
Two values that represent old start and end values.

---
When implementing a handling function, use the object passed to it as the parameter. Among fields of this object, you can find old and new start and end range values.

The **valueChanged** event can be fired when a user moves a slider or after he/she has stopped moving it. To specify the required mode, use the **behavior** | [callValueChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/behavior/callValueChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/behavior/#callValueChanged') option.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/charts-advanced_features-zooming_and_scrolling_api" class="button orange small fix-width-155" style="margin-right: 5px;" target="_blank">View Demo</a>

#####See Also#####
- [onValueChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#onValueChanged')
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')