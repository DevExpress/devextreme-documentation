---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.stack
type: String
default: 'default'
---
---
##### shortDescription
Specifies the name of the stack where the values of the _stackedBar_ series must be located.

##### propertyOf
dxPolarChartSeriesTypes.stackedbarpolarseries

---
By default, this property is set to 'default' for all series of the _stackedBar_ types. So values of all series are located in one stack for each argument value. You can set the **stack** property to another value for one group of the series and leave the 'default' value for the other group of series. In this instance, series will be divided into two stacks for each argument. In this manner, you can divide series between the required number of logical stacks.

You can set this property for a series individually, for all _stackedBar_ series or for all series in the chart. For this purpose choose the appropriate configuration object for this property: **series**, **commonSeriesSettings**.**stackedBar** or **commonSeriesSettings**.