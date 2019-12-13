---
id: dxPolarChart.Options.commonAxisSettings.minorGrid
type: Object
---
---
##### shortDescription
Specifies the options of the minor grid.

---
In addition to the [major grid](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/grid '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/grid/') built on major ticks, the **PolarChart** widget provides the minor grid that is built on minor ticks. The lines of the minor grid extend from the minor ticks throughout the entire chart's plot.

[note]Neither minor ticks, nor the minor grid can be used if the axis is *discrete*.

To specify the appearance of grid lines, use the options of the **minorGrid** object. Declared within the **commonAxisSettings** object, the **minorGrid** object changes the appearance of value and argument axes simultaneously. To change the appearance of the value or argument axis individually, declare the **minorGrid** object in the **argumentAxis** or **valueAxis** object respectively. Settings specified individually override those that are set in the **commonAxisSettings** object.

To make the minor grid visible, set the **visible** option of the **minorGrid** object to **true**. Additionally, you can change the color, opacity and width of the grid lines using the corresponding options.

[note]We recommend you use the minor grid only in conjunction with the major grid.