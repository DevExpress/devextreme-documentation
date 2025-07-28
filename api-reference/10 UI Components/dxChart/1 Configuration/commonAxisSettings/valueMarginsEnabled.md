---
id: dxChart.Options.commonAxisSettings.valueMarginsEnabled
type: Boolean
default: true
---
---
##### shortDescription
Adds an empty space between axis ends and minimum/maximum series points.

---
When **valueMarginsEnabled** is `true`, the component extends axes to prevent cutting off minimum/maximum series points if necessary. To specify constant margins, configure the [minValueMargin](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/#minValueMargin) and [maxValueMargin](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/#maxValueMargin) properties.

[note] The component ignores this property if [endOnTick](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/#endOnTick) is enabled and adds margins to end axes on [ticks](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/tick/).