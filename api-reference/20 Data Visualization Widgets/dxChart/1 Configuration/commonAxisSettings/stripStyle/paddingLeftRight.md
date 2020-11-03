---
id: dxChartCommonAxisSettingsStripStyle.paddingLeftRight
type: Number
default: 10
---
---
##### shortDescription
Generates a pixel-measured empty space between the left/right border of a strip and the strip label.

---
This option depends on the **label**.**horizontalAlignment** in the following way.

- **horizontalAlignment** is *"left"* &rarr; padding applies to the left border of a strip;       
- **horizontalAlignment** is *"right"* &rarr; padding applies to the right border of a strip;      
- **horizontalAlignment** is *"center"* &rarr; padding is calculated automatically.

![DevExtreme HTML5 Charts StripPadding](/images/ChartJS/StripPaddingLeftRight.png)

#####See Also#####
- **commonAxisSettings**.**stripStyle**.**label**.[horizontalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/stripStyle/label/horizontalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/stripStyle/label/#horizontalAlignment') - aligns strip labels in the horizontal direction. Applies to all strips.
- **argumentAxis**.**stripStyle**.**label**.[horizontalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/stripStyle/label/horizontalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/stripStyle/label/#horizontalAlignment') - aligns strip labels in the horizontal direction. Applies to the strips belonging to the argument axis.
- **valueAxis**.**stripStyle**.**label**.[horizontalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/stripStyle/label/horizontalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/stripStyle/label/#horizontalAlignment') - aligns strip labels in the horizontal direction. Applies to the strips belonging to the value axis.