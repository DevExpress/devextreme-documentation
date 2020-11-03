---
id: dxPolarChartValueAxis.showZero
type: Boolean
default: undefined
---
---
##### shortDescription
Specifies whether or not to indicate a zero value on the value axis.

---
When this option is not defined, value axis behaves differently depending on the type of the series that it displays. When the value axis displays an area or bar series, it has the zero value indicated. Otherwise, it does not.

You can force the value axis to indicate the zero value no matter what type of series it displays by setting the **showZero** option to **true**.

When this option is set to **false**, the zero value is not indicated until it is included in the displayed series.