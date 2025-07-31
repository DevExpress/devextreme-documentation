---
id: dxChart.Options.commonAxisSettings.valueMarginsEnabled
type: Boolean
default: true
---
---
##### shortDescription
Adds an empty space between axis ends and minimum/maximum series points.

---
When **valueMarginsEnabled** is `true`, the component extends axes to prevent cutting off minimum/maximum series points if necessary. To specify persistent margins, configure the [minValueMargin](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minValueMargin.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/#minValueMargin') and [maxValueMargin](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/maxValueMargin.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/#maxValueMargin') properties.

[note] The component ignores this property if [endOnTick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/endOnTick.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/#endOnTick') is enabled and adds margins to end axes on [ticks](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/tick/').