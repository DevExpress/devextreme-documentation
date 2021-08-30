---
id: dxDiagram.Options.customShapes.template
type: template
---
---
##### shortDescription
Specifies a custom template for the shape.

##### param(container): dxSVGElement
#include common-ref-elementparam with { element: "shape" }

##### param(data): Object
Information about the shape.

##### field(data.item): dxDiagramShape
The shapes object.

---
The template content must be presented as SVG elements.

Use the [customShapeTemplate](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapeTemplate.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#customShapeTemplate') property to define a common template for all shapes in the Diagram UI component.

Set a custom shape's [allowEditText](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/allowEditText.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#allowEditText') option to `false` to disable shape text editing. Otherwise, users can add shape text that may overlap with template content.

If the [textExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/textExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#textExpr') option is specified, template content may overlap with text from the data source. Since the [textExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/textExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#textExpr') option has the default value `'text'`, the widget will obtain node texts from the data source’s 'text' field. To prevent this behavior, set the option to an empty string: `nodes: { textExpr: "", ...`.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTemplates/jQuery/Light/"
}

#####See Also#####
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')