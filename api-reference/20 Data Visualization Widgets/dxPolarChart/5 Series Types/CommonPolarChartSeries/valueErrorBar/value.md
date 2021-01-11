---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.valueErrorBar.value
type: Number
default: 1
---
---
##### shortDescription
Specifies the value to be used for generating error bars.

---
Depending on the value of the [type](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/valueErrorBar/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/valueErrorBar/#type') property, the **value** property is applied as follows.

- **type**: *'percent'*        
The **value** property specifies the percentage of the series point value to be taken.

- **type**: *'stdError'*        
The **value** property multiplies the calculated standard error.

- **type**: *'stdDeviation'*        
The **value** property multiplies the calculated standard deviation.

- **type**: *'variance'*        
The **value** property multiplies the calculated variance.

- **type**: *'fixed'*        
The **value** property specifies constant error bar values.