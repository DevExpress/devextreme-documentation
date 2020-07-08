---
id: dxDiagram.Options.customShapeTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for shapes.

##### param(container): dxSVGElement
#include common-ref-elementparam with { element: "shape" }

##### param(data): Object
Information about the currently processed shape.

##### field(data.item): dxDiagramShape
The processed shape's object.

---
The template content must be presented as SVG elements.

Use the [template](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/customShapes/template.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/customShapes/#template') option to define a template of an individual shape.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTemplates/jQuery/Light/"
}

#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')