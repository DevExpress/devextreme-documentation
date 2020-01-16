---
id: dxDiagram.Options.customShapeTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for shapes.

##### param(container): dxElement
#include common-ref-elementparam with { element: "shape" }

##### param(data): Object
Information about the currently processed shape.

##### field(data.item): dxDiagramItem
The processed shape's object.

---
The template content must be presented as SVG elements.

Use the [template](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/customShapes/#template) option to define a template of an individual shape.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTemplates/jQuery/Light/"
}

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)