---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.valueErrorBar.value
type: Number
default: 1
---
---
##### shortDescription
Specifies the value to be used for generating error bars.

---
Depending on the value of the [type](/api-reference/10%20UI%20Components/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/valueErrorBar/type.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonSeriesSettings/valueErrorBar/#type') property, the **value** property is applied as follows.

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