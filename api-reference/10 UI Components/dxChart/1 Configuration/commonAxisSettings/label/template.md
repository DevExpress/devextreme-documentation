---
id: dxChart.Options.commonAxisSettings.label.template
type: template
default: undefined
---
---
##### shortDescription
Specifies a custom template for axis labels.

##### param(data): Object
The label's data object.

##### field(data.value): Date | Number | String
The raw value.

##### field(data.valueText): String
The [formatted](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/Format/') value converted to a string.

##### param(element): SVGGElement
A container for the template content.

##### return: String | SVGElement | jQuery
#include common-template-return-value

---
#include dataviz-template-note-svg

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/AxisLabelsTemplates/"
}