---
##### merge

---
If data displayed by the widget is specified using a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') instance, the **contentReady** event fires each time the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method of the DataSource instance is called as well as when widget content is ready. In this case, when you create the widget, the **contentReady** event is raised twice: when the widget's content is ready (at this moment, the widget does not display items) and when the DataSource is loaded (the widget displays the loaded items).