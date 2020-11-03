---
id: dxChartCommonAxisSettingsConstantLineStyle.paddingLeftRight
type: Number
default: 10
---
---
##### shortDescription
Generates a pixel-measured empty space between the left/right side of a constant line and the constant line label.

---
This option depends on the **label**.**horizontalAlignment** in the following way.

- **horizontalAlignment** is *"left"* &rarr; padding applies to the left side of a constant line;       
- **horizontalAlignment** is *"right"* &rarr; padding applies to the right side of a constant line;      
- **horizontalAlignment** is *"center"* &rarr; padding is calculated automatically.

![DevExtreme HTML5 Charts ConstantLinePadding](/images/ChartJS/ConstantLinePaddingLeftRight.png)

#####See Also#####
- **argumentAxis**.**constantLineStyle**.**label**.[horizontalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/constantLineStyle/label/horizontalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/constantLineStyle/label/#horizontalAlignment') - aligns constant line labels in the horizontal direction. Applies to the constant lines belonging to the argument axis.
- **valueAxis**.**constantLineStyle**.**label**.[horizontalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/constantLineStyle/label/horizontalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/constantLineStyle/label/#horizontalAlignment') - aligns constant line labels in the horizontal direction. Applies to the constant lines belonging to the value axis.