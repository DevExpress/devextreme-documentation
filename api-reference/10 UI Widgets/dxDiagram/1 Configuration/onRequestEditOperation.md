---
id: dxDiagram.Options.onRequestEditOperation
type: function(e)
default: null
EventForAction: dxDiagram.requestEditOperation
---
---
##### shortDescription
<!-- Description goes here -->

##### param(e): Object
<!-- Description goes here -->

##### field(e.allowed): Boolean
<!-- Description goes here -->

##### field(e.args): dxDiagramAddShapeArgs | dxDiagramAddShapeFromToolboxArgs | dxDiagramDeleteShapeArgs | dxDiagramDeleteConnectorArgs | dxDiagramChangeConnectionArgs | dxDiagramChangeConnectorPointsArgs | dxDiagramBeforeChangeShapeTextArgs | dxDiagramChangeShapeTextArgs | dxDiagramBeforeChangeConnectorTextArgs | dxDiagramChangeConnectorTextArgs | dxDiagramResizeShapeArgs
<!-- Description goes here -->

##### field(e.component): {WidgetName}
<!-- Description goes here -->

##### field(e.element): dxElement
<!-- Description goes here -->

##### field(e.model): Object
<!-- Description goes here -->

##### field(e.operation): 'addShape' | 'addShapeFromToolbox' | 'deleteShape' | 'deleteConnector' | 'changeConnection' | 'changeConnectorPoints' | 'beforeChangeShapeText' | 'changeShapeText' | 'beforeChangeConnectorText' | 'changeConnectorText' | 'resizeShape'
<!-- Description goes here -->

##### field(e.updateUI): Boolean
<!-- Description goes here -->

---
<!-- Description goes here -->