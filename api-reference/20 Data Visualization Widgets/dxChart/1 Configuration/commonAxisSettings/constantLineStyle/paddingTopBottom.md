---
id: dxChart.Options.commonAxisSettings.constantLineStyle.paddingTopBottom
type: Number
default: 10
---
---
##### shortDescription
Generates a pixel-measured empty space between the top/bottom side of a constant line and the constant line label.

---
This option depends on the **label**.**verticalAlignment** in the following way.

- **verticalAlignment** is *"top"* &rarr; padding applies to the top side of a constant line;       
- **verticalAlignment** is *"bottom"* &rarr; padding applies to the bottom side of a constant line;      
- **verticalAlignment** is *"center"* &rarr; padding is calculated automatically.

![DevExtreme HTML5 Charts ConstantLinePadding](/images/ChartJS/ConstantLinePaddingTopBottom.png)

#####See Also#####
- **argumentAxis**.**constantLineStyle**.**label**.[verticalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/constantLineStyle/label/verticalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/constantLineStyle/label/#verticalAlignment') - aligns constant line labels in the vertical direction. Applies to the constant lines belonging to the argument axis.
- **valueAxis**.**constantLineStyle**.**label**.[verticalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/constantLineStyle/label/verticalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/constantLineStyle/label/#verticalAlignment') - aligns constant line labels in the vertical direction. Applies to the constant lines belonging to the value axis.