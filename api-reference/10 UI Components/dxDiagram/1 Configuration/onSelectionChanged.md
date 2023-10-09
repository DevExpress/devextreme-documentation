---
id: dxDiagram.Options.onSelectionChanged
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after the selection is changed in the Diagram.

##### param(e): Object
Information about the event.

##### field(e.component): dxDiagram
The UI component instance's name.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.items): Array<dxDiagramItem>
An array of selected items ([DiagramShapes](/api-reference/10%20UI%20Components/dxDiagram/7%20Interfaces/dxDiagramShape '/Documentation/ApiReference/UI_Components/dxDiagram/Interfaces/dxDiagramShape/') or [DiagramConnectors](/api-reference/10%20UI%20Components/dxDiagram/7%20Interfaces/dxDiagramConnector '/Documentation/ApiReference/UI_Components/dxDiagram/Interfaces/dxDiagramConnector/')).

##### field(e.model): any
Model data. Available only if you use Knockout.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/ItemSelection/jQuery/Light/"
}