---
type: event
---
---
##### notUsedInTheme

##### shortDescription
Fires when the hover state of a series has been changed.

##### param(e): object
Information about the event.

##### field(e.component): object
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxPolarChart/Methods/#instance">widget instance</a>.

##### field(e.element): object
The widget's container.

##### field(e.target): Series
The series whose hover state has been changed.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the series whose hover state has been changed. To identify whether this series was hovered over or hovered out, call its [isHovered()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/isHovered().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/Methods/#isHovered') method. To discover series' fields and methods you can use, refer to the [Series](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/') class description.

#####See Also#####
- [Handle Events - jQuery](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events')