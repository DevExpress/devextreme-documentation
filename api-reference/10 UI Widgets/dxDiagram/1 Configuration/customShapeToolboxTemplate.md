---
id: dxDiagram.Options.customShapeToolboxTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for shapes in the toolbox.

##### param(container): dxSVGElement
#include common-ref-elementparam with { element: "shape" }

##### param(data): Object
Information about the currently processed shape.

##### field(data.item): dxDiagramShape
Information about the currently processed shape.

---
The template content must be presented as SVG elements.

Use the [toolboxTemplate](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/customShapes/toolboxTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/customShapes/#toolboxTemplate') option to define a template for each shape in the toolbox.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTemplates/jQuery/Light/"
}

#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')
