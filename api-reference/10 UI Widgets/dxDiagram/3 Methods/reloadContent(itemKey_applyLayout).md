---
id: dxDiagram.reloadContent(itemKey, applyLayout)
---
---
##### shortDescription
Reloads diagram data from a data source.

##### param(itemKey?): any
Specifies the data key of the item to reload. If the parameter is specified, the widget reloads the corresponding item, inserted items and deleted items. If the parameter is not specified, the widget reloads the entire diagram.

##### param(applyLayout?): Boolean
Specifies whether the widget applies the [auto layout](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/autoLayout/) after content is reloaded.
---
Changes applied by this method are reflected in the diagram history. You can use the UI to undo and redo these changes.

Use a data source's **reload** method to update the entire diagram, clear the history, and set the [hasChanges](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#hasChanges) option to `false`.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTemplatesWithEditing/jQuery/Light/"
}
