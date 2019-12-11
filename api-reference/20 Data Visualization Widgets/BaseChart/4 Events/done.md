---
type: event
---
---
##### notUsedInTheme

##### shortDescription
Fires when the **Series** and **Point** chart elements are ready to be accessed.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget instance.

##### field(e.element): object
The widget's container.

---
To access the required series, use the **getAllSeries()**, **getSeriesByName(seriesName)** or **getSeriesByPos(seriesIndex()** method of the chart instance. The accessed series object allows you to access the required point and then access the point's label. The API of the Series, Point and Label objects is detailed in the **Chart Elements** Reference section.

To perform custom actions when the chart is drawn, handle the **drawn** event of the chart.

#####See Also#####
- [Handle Events - jQuery](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events')