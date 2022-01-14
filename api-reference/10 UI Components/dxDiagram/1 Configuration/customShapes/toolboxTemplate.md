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
[important]

- Template content must be presented as SVG elements.

- We recommend that you do not use the [foreignObject](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) element to define template content (Safari [does not support](https://bugs.webkit.org/show_bug.cgi?id=23113) this element).

[/important]

Use the [customShapeToolboxTemplate](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapeToolboxTemplate.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#customShapeToolboxTemplate') property to define a common template for all diagram shapes in the toolbox.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTemplatesWithEditing/jQuery/Light/"
}

#####See Also#####
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')