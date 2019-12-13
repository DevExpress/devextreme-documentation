---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.valueErrorBar.value
type: Number
default: 1
---
---
##### shortDescription
Specifies the value to be used for generating error bars.

---
Depending on the value of the [type](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/valueErrorBar/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/valueErrorBar/#type') option, the **value** option is applied as follows.

- **type**: *'percent'*        
The **value** option specifies the percentage of the series point value to be taken.

- **type**: *'stdError'*        
The **value** option multiplies the calculated standard error.

- **type**: *'stdDeviation'*        
The **value** option multiplies the calculated standard deviation.

- **type**: *'variance'*        
The **value** option multiplies the calculated variance.

- **type**: *'fixed'*        
The **value** option specifies constant error bar values.