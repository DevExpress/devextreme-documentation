---
uid: viz/chart:dxChartValueAxis.autoBreaksEnabled
type: Boolean
default: false
---
---
##### shortDescription
Enables auto-calculated scale breaks. Applies only if the axis' [type](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#type') is *"continuous"* or *"logarithmic"* and [valueType](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/valueType.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#valueType') is *"numeric"*.

---
<!--
If this property is **true**, the UI component detects large gaps between side-by-side points and cuts them out, putting scale breaks instead.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ScaleBreaks/"
}

#####See Also#####
- [maxAutoBreakCount](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/maxAutoBreakCount.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#maxAutoBreakCount')
- [breaks[]](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/breaks/)
-->