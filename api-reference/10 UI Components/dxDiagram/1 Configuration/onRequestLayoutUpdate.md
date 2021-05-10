---
id: dxDiagram.Options.onRequestLayoutUpdate
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after diagram data is reloaded and allows you to specify whether or not the UI component should update the diagram layout.

##### param(e): Object
Information about the event.

##### field(e.allowed): Boolean
Specifies whether or not the diagram layout should be updated.
**Default value:** false.

##### field(e.changes): Array<any>
The received changes.

##### field(e.component): dxDiagram
The UI component instance's name.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

---
The Diagram component updates the bound data source and reloads the diagram content each time a user changes diagram data by the UI. If you modify the data source directly (beyond the Diagram), use [push services](/concepts/70%20Data%20Binding/5%20Data%20Layer/3%20Data%20Modification/30%20Integration%20with%20Push%20Services.md '/Documentation/Guide/Data_Binding/Data_Layer/#Data_Modification/Integration_with_Push_Services') to notify the component about data modifications. In this case Diagram gets notifications about data source changes and reloads diagram content.

Write the **onRequestLayoutUpdate** function to specify whether the UI component should recalculate and update the diagram layout after the data is reloaded.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTemplatesWithEditing/"
}