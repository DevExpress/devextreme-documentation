---
id: dxChartCommonAnnotationConfig.template
type: template
default: undefined
---
---
##### shortDescription
Specifies a custom template for the annotation. Applies only if the [type](/api-reference/_hidden/BaseWidgetAnnotationConfig/type.md '{basewidgetpath}/Configuration/annotations/#type') is *"custom"*.

##### param(annotation): dxChartAnnotationConfig | any
The annotation's [configuration object](/api-reference/_hidden/dxChartCommonAnnotationConfig '{basewidgetpath}/Configuration/annotations/').

##### param(element): SVGGElement
A container for the template content.

##### return: String | SVGElement | jQuery
#include common-template-return-value

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/CustomAnnotations/"
}