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

##### field(e.updateUI): Boolean
Identifies the reason why the event is raised. `true` value indicates that the UI component is updating the UI. You can prohibit an operation to hide the corresponding UI element. 
`false` value indicates that a user attempts an edit operation. You can specify whether the operation is allowed, and, for instance, to display an error message if a user tries to perform a prohibited action.

##### field(e.reason): 'checkUIElementAvailability' | 'modelModification'
<!-- Description goes here -->


---
If you want to disable a specific operation type for the entire diagram, you can also set an [Allow{Operation}](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/editing/) property to `false`.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/OperationRestrictions/jQuery/Light/"
}

#####See Also#####
- [Restrict Edit Operations](/Documentation/Guide/Widgets/Diagram/Restrict_Edit_Operations)