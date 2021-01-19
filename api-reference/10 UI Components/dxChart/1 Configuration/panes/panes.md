---
id: dxChart.Options.panes
type: Object | Array<Object>
inherits: dxChart.Options.commonPaneSettings
notUsedInTheme: 
---
---
##### shortDescription
Declares a collection of panes.

---
A pane is a chart area containing series. If there are many series an a chart, they can be distributed between multiple panes.

![DevExtreme HTML5 Charts Panes](/images/ChartJS/visual_elements/panes.png)

Each object in the **panes** array configures a single pane. If you have several panes, we recommend you to [name](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/panes/name.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/panes/#name') each pane in order to be able to refer to them afterwards.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/MultiplePanes/"
}

#####See Also#####
- [commonPaneSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonPaneSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonPaneSettings/') - specifies common settings for all panes in a chart.
- **series**.[pane](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/pane.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#pane') - binds a series to a pane.
- [defaultPane](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/defaultPane.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#defaultPane') - specifies which pane must be used by default.