---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when the **Series** and **Point** chart elements are ready to be accessed.

##### param(e): object
Information about the event.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): object
The widget's container.

---
To access the required series, use the **getAllSeries()**, **getSeriesByName(seriesName)** or **getSeriesByPos(seriesIndex()** method of the chart instance. The accessed series object allows you to access the required point and then access the point's label. The API of the Series, Point and Label objects is detailed in the **Chart Elements** Reference section.

To perform custom actions when the chart is drawn, handle the **drawn** event of the chart.

#####See Also#####
#include common-link-handleevents