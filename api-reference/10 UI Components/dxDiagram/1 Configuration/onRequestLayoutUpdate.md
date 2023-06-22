---
id: dxDiagram.Options.onRequestLayoutUpdate
type: function(e)
default: null
---
---
##### shortDescription
A function that allows you to specify whether or not the UI component should reapply its auto layout after diagram data is reloaded.

##### param(e): ui/diagram:RequestLayoutUpdateEvent
Information about the event.

##### field(e.allowed): Boolean
Specifies whether or not the diagram layout should be updated.
**Default value:** false.

##### field(e.changes): Array<any>
The received changes.

##### field(e.component): {WidgetName}
The UI component instance's name.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

---
The [autoLayout](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/autoLayout '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/autoLayout/') option specifies an auto-layout algorithm that the UI component uses to build a diagram on data binding.

Write the **onRequestLayoutUpdate** function to specify whether the component should reapply its auto layout when a user changes diagram data in the UI or you modify the data source directly via [push services](/concepts/70%20Data%20Binding/5%20Data%20Layer/3%20Data%20Modification/30%20Integration%20with%20Push%20Services.md '/Documentation/Guide/Data_Binding/Data_Layer/#Data_Modification/Integration_with_Push_Services').

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTemplatesWithEditing/"
}
