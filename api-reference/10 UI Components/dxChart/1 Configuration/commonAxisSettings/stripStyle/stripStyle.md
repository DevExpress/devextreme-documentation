---
id: dxChart.Options.commonAxisSettings.stripStyle
type: Object
---
---
##### shortDescription
Configures the appearance of strips.

---
![DevExtreme HTML5 Charts Strips](/images/ChartJS/visual_elements/strips.png)

The **commonAxisSettings**.[stripStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/stripStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/stripStyle/') object specifies common settings for all strips in the chart. To configure only those strips that belong to a particular axis, use the following objects.

- **argumentAxis**.[stripStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/stripStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/stripStyle/')     
- **valueAxis**.[stripStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/stripStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/stripStyle/')       

To configure individual strips, use the following arrays of objects.

- **argumentAxis**.[strips[]](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/strips)     
- **valueAxis**.[strips[]](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/strips) 

Individual settings override axis-specific settings which, in their turn, override common settings.