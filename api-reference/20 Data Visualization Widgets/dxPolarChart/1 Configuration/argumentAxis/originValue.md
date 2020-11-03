---
id: dxPolarChartArgumentAxis.originValue
type: Number
default: undefined
---
---
##### shortDescription
Specifies the value to be used as the origin for the argument axis.

---
Normally, **PolarChart** calculates the origin value of the argument axis automatically depending on the smallest argument of series points. In case you need to specify it explicitly, use the **argumentAxis**.**originValue** option.

[note] If the series contains points whose argument is less than the specified origin value, these points will reside to the left from the argument axis' origin. This may lead the start and end of the resulting diagram to overlap.