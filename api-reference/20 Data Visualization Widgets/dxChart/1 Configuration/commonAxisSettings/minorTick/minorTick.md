---
id: dxChart.Options.commonAxisSettings.minorTick
type: Object
---
---
##### shortDescription
Configures the appearance of minor axis ticks.

---
Along with [major ticks](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/tick/'), the **Chart** widget supports minor ticks. They divide an axis segment limited by two neighboring major ticks.

![DevExtreme HTML5 Charts MinorTicks](/images/ChartJS/visual_elements/minor_ticks.png)

The **commonAxisSettings**.[minorTick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/minorTick/') object specifies common settings for all minor ticks in the chart. To configure only those minor ticks that belong to a particular axis, use the following objects.

- **argumentAxis**.[minorTick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTick/')     
- **valueAxis**.[minorTick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/minorTick/')     

Axis-specific settings override common settings.

[note]Minor ticks cannot be displayed on an axis of the *"discrete"* type.

#####See Also#####
- **argumentAxis**.[minorTickInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/minorTickInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTickInterval/') - specifies the minor tick interval of the argument axis.
- **valueAxis**.[minorTickInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/minorTickInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/minorTickInterval/') - specifies the minor tick interval of the value axis.