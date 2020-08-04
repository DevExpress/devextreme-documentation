---
id: dxDiagram.Options.customShapes.toolboxTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for the shape in the toolbox.

##### param(container): dxSVGElement
#include common-ref-elementparam with { element: "shape" }

##### param(data): Object
Information about the shape.

##### field(data.item): dxDiagramShape
The shapes object.

---
The template content must be presented as SVG elements.

Use the [customShapeToolboxTemplate](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/customShapeToolboxTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#customShapeToolboxTemplate') option to define a common template for all diagram shapes in the toolbox.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTemplatesWithEditing/jQuery/Light/"
}

#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')