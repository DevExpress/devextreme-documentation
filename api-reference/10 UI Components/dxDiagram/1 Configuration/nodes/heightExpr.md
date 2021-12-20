---
id: dxDiagram.Options.nodes.heightExpr
type: String | function(data, value)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns a node's height.

##### param(data): any
The current node's data object.

##### return: any
A node's height.

##### param(value): any
A node's new height or `undefined`.

---
A function assigned to this property should do the following:

* Return a node's new height when the **value** parameter is set to `undefined`.
* Save a new height value to a data storage when the **value** parameter contains a node's height. For instance, assign this value to the **obj** parameter's field to save a node's height in your data source.

The [units](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/units.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#units') property specifies the measurement unit.