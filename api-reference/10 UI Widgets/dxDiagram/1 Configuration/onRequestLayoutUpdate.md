---
id: dxDiagram.Options.onRequestLayoutUpdate
type: function(e)
default: null
EventForAction: dxDiagram.requestLayoutUpdate
---
---
##### shortDescription
The Diagram UI component reloads the modified diagram data every time the data source changes. The **onRequestLayoutUpdate** function is executed after diagram data is reloaded and allows you to specify whether or not the UI component should update the diagram layout.

##### param(e): Object
Information about the event.

##### field(e.allowed): Boolean
Specifies whether or not the diagram layout should be updated.
**Default value:** false.

##### field(e.changes): Array<any>
The received changes.

##### field(e.component): {WidgetName}
The UI component instance's name.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTemplatesWithEditing/"
}