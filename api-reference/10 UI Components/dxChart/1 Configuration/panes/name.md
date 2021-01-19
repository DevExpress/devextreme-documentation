---
id: dxChart.Options.panes.name
type: String
default: undefined
---
---
##### shortDescription
Specifies the name of the pane.

---
When there are multiple panes in a chart, series need to know which pane they belong to. By default, all of them belong to the [defaultPane](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/defaultPane.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#defaultPane') or, if it is not specified, to the last pane in the **panes** array. To bind a series to another pane, **name** the pane and assign this name to the [pane](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/pane.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#pane') series property.