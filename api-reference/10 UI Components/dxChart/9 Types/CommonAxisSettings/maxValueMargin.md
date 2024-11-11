---
uid: viz/chart:CommonAxisSettings.maxValueMargin
type: Number | undefined
default: undefined
---
---
##### shortDescription
Controls the empty space between the maximum series points and the axis. Applies only to the axes of the *"continuous"* and *"logarithmic"* type.

---
<!--
By default, the axes extend slightly beyond their extrema generating an empty space between the axes and the minimum/maximum series points. It prevents cutting off parts of those points. To control this empty space, use the **minValueMargin** and **maxValueMargin** properties. These properties are used in the following formulas for the actual start and end axis values.

    startAxisValue = minDataValue - (maxDataValue - minDataValue) * minValueMargin
    endAxisValue = maxDataValue + (maxDataValue - minDataValue) * maxValueMargin

For example, consider that `minDataValue` is 1960 and `maxDataValue` is 2010. If you set the **minValueMargin** and **maxValueMargin** properties to 0.1, the axis will start in 1955 and end in 2015.

    startAxisValue = 1960 - (2010 - 1960) * 0.1 = 1960 - 50 * 0.1 = 1960 - 5 = 1955
    endAxisValue = 2010 + (2010 - 1960) * 0.1 = 2010 + 50 * 0.1 = 2010 + 5 = 2015

#####See Also#####
- **commonAxisSettings**.[valueMarginsEnabled](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/valueMarginsEnabled.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/#valueMarginsEnabled')
-->