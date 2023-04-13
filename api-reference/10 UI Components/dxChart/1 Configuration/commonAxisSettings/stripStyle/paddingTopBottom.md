---
id: dxChart.Options.commonAxisSettings.stripStyle.paddingTopBottom
type: Number
default: 5
---
---
##### shortDescription
Generates a pixel-measured empty space between the top/bottom border of a strip and the strip label.

---
This property depends on the **label**.**verticalAlignment** in the following way.

- **verticalAlignment** is *"top"* &rarr; padding applies to the top border of a strip;       
- **verticalAlignment** is *"bottom"* &rarr; padding applies to the bottom border of a strip;      
- **verticalAlignment** is *"center"* &rarr; padding is calculated automatically.

![DevExtreme HTML5 Charts StripPadding](/images/ChartJS/StripPaddingTopBottom.png)

#####See Also#####
- **commonAxisSettings**.**stripStyle**.**label**.[verticalAlignment](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/stripStyle/label/verticalAlignment.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/stripStyle/label/#verticalAlignment') - aligns strip labels in the vertical direction. Applies to all strips.
- **argumentAxis**.**stripStyle**.**label**.[verticalAlignment](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/stripStyle/label/verticalAlignment.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/stripStyle/label/#verticalAlignment') - aligns strip labels in the vertical direction. Applies to the strips belonging to the argument axis.
- **valueAxis**.**stripStyle**.**label**.[verticalAlignment](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/stripStyle/label/verticalAlignment.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/stripStyle/label/#verticalAlignment') - aligns strip labels in the vertical direction. Applies to the strips belonging to the value axis.