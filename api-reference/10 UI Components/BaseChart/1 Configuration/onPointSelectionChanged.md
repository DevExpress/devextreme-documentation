---
id: BaseChart.Options.onPointSelectionChanged
type: function(e)
EventForAction: BaseChart.pointSelectionChanged
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a series point is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The UI component's instance.

##### field(e.element): Object
The UI component's container.

##### field(e.target): basePointObject
The series point whose selection state has been changed; described in the [Point](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Point '{basewidgetpath}/Chart_Elements/Point/') section.

---
To identify whether the selection has been applied or canceled, call the point's [isSelected()](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Point/3%20Methods/isSelected().md '{basewidgetpath}/Chart_Elements/Point/Methods/#isSelected') method.