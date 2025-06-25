---
id: dxChart.Options.commonAxisSettings.minValueMargin
type: Number
default: undefined
---
---
##### shortDescription
Controls the empty space between the minimum series points and the axis. Applies only to the axes of the *"continuous"* and *"logarithmic"* type.

---
The Chart component generates empty space beyond the axis data range to avoid cutting off the smallest values. You can control this empty space with **minValueMargin**. The property is a ratio that is multiplied to the difference between the maximum and minimum values of the axis. The following formula demonstrates how the component uses **minValueMargin** to calculate axis start values:

    axisStartValue = minDataValue - (maxDataValue - minDataValue) * minValueMargin

The following expression calculates an axis start value assuming a minimum data value of 1960, maximum data value of 2010, and **minValueMargin** of 0.1.

    axisStartValue = 1960 - (2010 - 1960) * 0.1 = 1960 - 50 * 0.1 = 1960 - 5 = 1955

#####See Also#####
- **commonAxisSettings**.[valueMarginsEnabled](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/valueMarginsEnabled.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/#valueMarginsEnabled') - enables/disables margins for axes.
- **commonAxisSettings**.[maxValueMargin](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/#maxValueMargin)