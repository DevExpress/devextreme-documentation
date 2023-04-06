---
id: dxChart.Options.commonAxisSettings.constantLineStyle
type: viz\chart:dxChartCommonAxisSettingsConstantLineStyle
inherits: viz\chart:dxChartCommonAxisSettingsConstantLineStyle
---
---
##### shortDescription
Configures the appearance of all constant lines in the UI component.

---
![DevExtreme HTML5 Charts ConstantLines](/images/ChartJS/visual_elements/constant_lines.png)

The **commonAxisSettings**.**constantLineStyle** object, which is described here, specifies common settings for all constant lines in the chart. To configure only those constant lines that belong to a particular axis, use the following objects.

- **argumentAxis**.[constantLineStyle](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/constantLineStyle '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/constantLineStyle/')     
- **valueAxis**.[constantLineStyle](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/constantLineStyle '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/constantLineStyle/')       

To configure individual constant lines, use the following arrays of objects.

- **argumentAxis**.[constantLines[]](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/constantLines)     
- **valueAxis**.[constantLines[]](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/constantLines) 

Individual settings override axis-specific settings which, in their turn, override common settings.