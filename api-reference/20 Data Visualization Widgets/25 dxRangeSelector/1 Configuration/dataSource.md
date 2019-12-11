---
type: array | DataSource | DataSource configuration | string
---
---
##### notUsedInTheme

##### shortDescription
Specifies a data source for the scale values and for the [chart](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/1%20Configuration/chart '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/chart/') at the background.

---
Use this property in the following cases:

* to initialize a scale with data from one of the data source fields. Set the **dataSourceField** property to specify which field to use as the source for scale values.
* to plot a chart using data from the data source fields. In this case, define the chart series by setting their **argumentField** and **valueField** properties. The range selector's scale will represent the chart's argument axis. It is created using data from the field specified by the chart's **argumentField** property.

The maximum and minimum values of the field specified by the **argumentField**/**dataSourceField** property are used as the scale's start and end values. The major tick interval is determined automatically. You can also set the interval using the scale's **tickInterval** and **minorTickInterval** properties.

For details on how to configure a data source, refer to the [Data Binding](/concepts/20%20Data%20Visualization/10%20Charts/40%20Data%20Binding '/Documentation/Guide/Data_Visualization/Charts/Data_Binding/') topic.