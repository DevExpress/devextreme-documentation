---
id: dxPieChart.Options.onPointSelectionChanged
type: function(e)
---
---
##### shortDescription
A function that is executed when a series point is selected or selection is canceled.

##### param(e): viz/pie_chart:PointSelectionChangedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
The UI component's container.

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.target): basePointObject
The series point whose selection state has been changed; described in the [Point](/api-reference/10%20UI%20Components/dxPieChart/7%20Chart%20Elements/Point '{basewidgetpath}/Chart_Elements/Point/') section.

---
To identify whether the selection has been applied or canceled, call the point's [isSelected()](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Point/3%20Methods/isSelected().md '{basewidgetpath}/Chart_Elements/Point/Methods/#isSelected') method.