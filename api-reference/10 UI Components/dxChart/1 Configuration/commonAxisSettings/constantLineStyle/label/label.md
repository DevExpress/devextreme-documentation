---
id: dxChart.Options.commonAxisSettings.constantLineStyle.label
type: Object
---
---
##### shortDescription
Configures constant line labels.

---
A constant line label displays the value of a constant line.

![DevExtreme HTML5 Charts ConstantLine ConstantLineLabel](/images/ChartJS/visual_elements/constant_line_labels.png)

The **commonAxisSettings**.**constantLineStyle**.**label** object, which is described here, specifies common settings for all constant line labels in the chart. To configure the labels of those constant lines that belong to a particular axis, use the following objects.

- **argumentAxis**.**constantLineStyle**.[label](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/constantLineStyle/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/constantLineStyle/label/')     
- **valueAxis**.**constantLineStyle**.[label](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/constantLineStyle/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/constantLineStyle/label/')       

To configure the labels of individual constant lines use the following objects.

- **argumentAxis**.**constantLines[]**.[label](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/constantLines/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/constantLines/label/')     
- **valueAxis**.**constantLines[]**.[label](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/constantLines/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/constantLines/label/') 

Individual settings override axis-specific settings which, in their turn, override common settings.