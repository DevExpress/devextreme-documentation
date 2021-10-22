---
id: dxDiagram.Options.edges.lockedExpr
type: String | function(data, value)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression whose values indicate whether an edge is locked.

##### param(data): any
The current edge's data object.

##### return: any
A Boolean value that indicates whether an edge is locked.

##### param(value): any
When the function is called as a setter, returns whether the edge is locked; when the function is called as a getter, returns `undefined`.

---
A locked item can not be moved, changed, or delete. Users can use the [context menu](/concepts/05%20UI%20Components/Diagram/30%20Diagram%20Tools.md '/Documentation/Guide/UI_Components/Diagram/Diagram_Tools/') to lock and unlock an item.

The specified field or expression should return `true` or `false`.
