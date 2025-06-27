---
id: dxChart.Options.commonAxisSettings.maxValueMargin
type: Number
default: undefined
---
---
##### shortDescription
Controls the empty space between the maximum series points and the axis. Applies only to the axes of the *"continuous"* and *"logarithmic"* type.

---
The Chart component adds a space at the end of the axis data range to avoid cutting off the largest values. You can specify the size of this space with **maxValueMargin**, which is a ratio applied to the axis range. The following formula shows how it works:

    axisEndValue = maxDataValue + (maxDataValue - minDataValue) * maxValueMargin

The following expression calculates the axis end value with a minimum data value of 1960, a maximum data value of 2010, and **maxValueMargin** of 0.1:

    axisEndValue = 2010 + (2010 - 1960) * 0.1 = 2010 + 50 * 0.1 = 2010 + 5 = 2015

#####See Also#####
- **commonAxisSettings**.[valueMarginsEnabled](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/valueMarginsEnabled.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/#valueMarginsEnabled') - enables/disables margins for axes.
- **commonAxisSettings**.[minValueMargin](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minValueMargin.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/#minValueMargin')