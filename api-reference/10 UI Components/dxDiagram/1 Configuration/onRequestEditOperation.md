---
id: dxDiagram.Options.onRequestEditOperation
type: function(e)
default: null
EventForAction: dxDiagram.requestEditOperation
---
---
##### shortDescription
A function that allows you to prohibit an edit operation at run time.

##### param(e): Object
Information about the event.

##### field(e.allowed): Boolean
Specifies whether the edit operation is allowed.
**Default value:** true.

##### field(e.args): dxDiagramAddShapeArgs | dxDiagramAddShapeFromToolboxArgs | dxDiagramDeleteShapeArgs | dxDiagramDeleteConnectorArgs | dxDiagramChangeConnectionArgs | dxDiagramChangeConnectorPointsArgs | dxDiagramBeforeChangeShapeTextArgs | dxDiagramChangeShapeTextArgs | dxDiagramBeforeChangeConnectorTextArgs | dxDiagramChangeConnectorTextArgs | dxDiagramResizeShapeArgs | dxDiagramMoveShapeArgs
An object that contains information about the processed shape or connector. The parameter's value type depends on the operation.

##### field(e.component): {WidgetName}
The UI component instance's name.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.operation): 'addShape' | 'addShapeFromToolbox' | 'deleteShape' | 'deleteConnector' | 'changeConnection' | 'changeConnectorPoints' | 'beforeChangeShapeText' | 'changeShapeText' | 'beforeChangeConnectorText' | 'changeConnectorText' | 'resizeShape' | 'moveShape'
The processed operation.

##### field(e.reason): 'checkUIElementAvailability' | 'modelModification'
Identifies the reason why the event is raised.

---
To disable a specific operation type for the entire diagram, set an [Allow{Operation}](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/editing/) property to `false`.


#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/OperationRestrictions/jQuery/Light/"
}

When a user pastes or clones several items in a diagram, the control adds the items to the model one by one. For each added item, the **RequestEditOperation** event fires. In the event handler, you can access the processed item. However, if you call the [getItemById(id)](/Documentation/ApiReference/UI_Components/dxDiagram/Methods/#getItemByIdid) method to access an attached connector (see the [attachedConnectorIds](/Documentation/ApiReference/Common/Object_Structures/dxDiagramShape/#attachedConnectorIds) property) or a container's child item (see the [containerChildItemIds](/Documentation/ApiReference/Common/Object_Structures/dxDiagramShape/#containerChildItemIds) property), you can get the `undefined`result if the item is not added to the model yet.

#####See Also#####
- [Restrict Edit Operations](/Documentation/Guide/UI_Components/Diagram/Restrict_Edit_Operations)