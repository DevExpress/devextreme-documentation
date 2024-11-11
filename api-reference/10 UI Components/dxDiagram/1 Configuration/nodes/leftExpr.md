---
id: dxDiagram.Options.nodes.leftExpr
type: String | function(data, value) | undefined
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns the x-coordinate of a node's left border.

##### param(data): any
The current node's data object.

##### return: any
The x-coordinate of a node's left border.

##### param(value): any
The x-coordinate of a node's left border or `undefined`.

---
A function assigned to this property should do the following:

* Return the x-coordinate of a node's left border when the **value** parameter is set to `undefined`.
* Save the x-coordinate value to a data storage when the **value** parameter contains the x-coordinate of a node's left border. For instance, assign this value to the **obj** parameter's field to save the x-coordinate of a node's left border in your data source.

A node's x-coordinate specifies the distance between the left border of a diagram work area and the left border of a shape, in [units](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/units.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#units').

[note] Predefined shape coordinates are ignored when the [autoLayout.type](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/autoLayout/type.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/autoLayout/#type') property is set to **layered** or **tree**.