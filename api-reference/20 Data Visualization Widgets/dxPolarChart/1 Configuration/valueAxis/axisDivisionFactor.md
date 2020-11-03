---
id: dxPolarChartValueAxis.axisDivisionFactor
type: Number
default: 30
---
---
##### shortDescription
Specifies a coefficient for dividing the value axis.

---
The value axis is divided automatically by default. If you need to make the axis tick interval larger or smaller, use the **axisDivisionFactor** property. This property value is a coefficient used internally to calculate the distance between axis labels. This allows you to set axis division without knowledge of the actual axis values.

[note]This option is used for continuous and logarithmic argument axes only.