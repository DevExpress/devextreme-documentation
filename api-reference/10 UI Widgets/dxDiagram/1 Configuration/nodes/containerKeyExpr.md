---
id: dxDiagram.Options.nodes.containerKeyExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides a key of a node's parent container node.

##### param(data): Object
The current node's data object.

---
The parent container node must be of the `"verticalContainer"` or `"horizontalContainer"` type.

To use the **containerKeyExpr** option set the [childrenExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/childrenExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#childrenExpr') option to 'null'.