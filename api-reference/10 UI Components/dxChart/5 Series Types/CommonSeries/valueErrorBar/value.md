---
id: dxChartSeriesTypes.CommonSeries.valueErrorBar.value
type: Number
default: 1
---
---
##### shortDescription
Specifies the value to be used for generating error bars.

---
Depending on the value of the **type** property, the **value** property applies as follows.

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