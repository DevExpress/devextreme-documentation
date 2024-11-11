---
id: dxDiagram.Options.edges.lockedExpr
type: String | function(data, value) | undefined
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression whose Boolean value indicates whether an edge is locked.

##### param(data): any
The current edge's data object.

##### return: any
A Boolean value that indicates whether an edge is locked.

##### param(value): any
A Boolean value that indicates whether an edge is locked or `undefined`.

---
A function assigned to this property should do the following:

* Return a Boolean value that indicates whether an edge is locked when the **value** parameter is set to `undefined`.
* Save a new value to a data storage when the **value** parameter contains a Boolean value. For instance, assign this value to the **obj** parameter's field to save a value that indicates whether an edge is locked in your data source.

A locked item can not be moved, changed, or deleted. The [context menu](/concepts/05%20UI%20Components/Diagram/30%20Diagram%20Tools.md '/Documentation/Guide/UI_Components/Diagram/Diagram_Tools/') allows users to lock and unlock an item.
