---
id: dxChart.Options.commonAxisSettings.grid
type: Object
---
---
##### shortDescription
Configures the grid.

---
A grid is a set of mutually-crossing vertical and horizontal lines that stretch throughout the entire chart. Visually, grid lines can be considered extensions of [major ticks](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/tick/'). The grid improves the readability of chart data.

![DevExtreme HTML5 Charts GridLines](/images/ChartJS/visual_elements/grid_lines.png)

The **commonAxisSettings**.[grid](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/grid '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/grid/') object specifies common settings for all grid lines in the chart. To configure only those grid lines that descend from a particular axis, use the following objects.

- **argumentAxis**.[grid](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/grid '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/grid/')     
- **valueAxis**.[grid](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/grid '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/grid/')       

Axis-specific settings override common settings.

#####See Also#####
- **commonAxisSettings**.[minorGrid](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorGrid '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/minorGrid/') - configures the minor grid built on minor ticks.