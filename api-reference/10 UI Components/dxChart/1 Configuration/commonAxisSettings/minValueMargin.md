---
id: dxChart.Options.commonAxisSettings.minValueMargin
type: Number
default: undefined
---
---
##### shortDescription
Controls the empty space between the minimum series points and the axis. Applies only to the axes of the *"continuous"* and *"logarithmic"* type.

---
The Chart component adds a space at the start of the axis data range to avoid cutting off the smallest values. You can specify the size of this space with **minValueMargin**, which is a ratio applied to the axis range. The following formula shows how it works:

    axisStartValue = minDataValue - (maxDataValue - minDataValue) * minValueMargin

The following expression calculates the axis start value with a minimum data value of 1960, a maximum data value of 2010, and **minValueMargin** of 0.1:

    axisStartValue = 1960 - (2010 - 1960) * 0.1 = 1960 - 50 * 0.1 = 1960 - 5 = 1955

#####See Also#####
- **commonAxisSettings**.[valueMarginsEnabled](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/valueMarginsEnabled.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/#valueMarginsEnabled') - enables/disables margins for axes.
- **commonAxisSettings**.[maxValueMargin](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/#maxValueMargin)