---
id: dxChart.Options.valueAxis.autoBreaksEnabled
type: Boolean
default: false
---
---
##### shortDescription
Enables auto-calculated scale breaks. Applies only if the axis' [type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#type') is *"continuous"* or *"logarithmic"* and [valueType](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/valueType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType') is *"numeric"*.

---
If this option is **true**, the widget detects large gaps between side-by-side points and cuts them out, putting scale breaks instead.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ScaleBreaks/"
}

#####See Also#####
- [maxAutoBreakCount](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/maxAutoBreakCount.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#maxAutoBreakCount')
- [breaks[]](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/breaks/)