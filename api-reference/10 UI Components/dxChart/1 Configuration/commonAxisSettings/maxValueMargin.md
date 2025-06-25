---
id: dxChart.Options.commonAxisSettings.maxValueMargin
type: Number
default: undefined
---
---
##### shortDescription
Controls the empty space between the maximum series points and the axis. Applies only to the axes of the *"continuous"* and *"logarithmic"* type.

---
The Chart component generates empty space beyond the axis data range to avoid cutting off the largest values. You can control this empty space with **maxValueMargin**. The property is a ratio that is multiplied to the difference between the maximum and minimum values of the axis. The following formula demonstrates how the component uses **maxValueMargin** to calculate axis end values:

    axisEndValue = maxDataValue + (maxDataValue - minDataValue) * maxValueMargin

The following expression calculates an axis end value assuming a minimum data value of 1960, maximum data value of 2010, and **maxValueMargin** of 0.1.

    axisEndValue = 2010 + (2010 - 1960) * 0.1 = 2010 + 50 * 0.1 = 2010 + 5 = 2015

#####See Also#####
- **commonAxisSettings**.[valueMarginsEnabled](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/valueMarginsEnabled.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/#valueMarginsEnabled') - enables/disables margins for axes.
- **commonAxisSettings**.[minValueMargin](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/#minValueMargin)