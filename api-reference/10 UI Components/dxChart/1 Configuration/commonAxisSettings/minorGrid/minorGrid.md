---
id: dxChart.Options.commonAxisSettings.minorGrid
type: Object
---
---
##### shortDescription
Configures the minor grid.

---
In addition to the [major grid](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/grid '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/grid/') built on major ticks, the **Chart** UI component provides the minor grid built on minor ticks.

![DevExtreme HTML5 Charts MinorGridLines](/images/ChartJS/visual_elements/minor_grid_lines.png)

[note]Neither minor ticks, nor the minor grid can be displayed if the axis is of the *"discrete"* type.

The **commonAxisSettings**.[minorGrid](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorGrid '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/minorGrid/') object specifies common settings for all minor grid lines in the chart. To configure only those grid lines that descend from a particular axis, use the following objects.

- **argumentAxis**.[minorGrid](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorGrid '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/minorGrid/')     
- **valueAxis**.[minorGrid](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorGrid '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/minorGrid/')       

Axis-specific settings override common settings.

[note]Displaying the minor grid without the major grid may impair the readability of a chart. To prevent this situation, we recommend you use the minor grid only in conjunction with the major grid.