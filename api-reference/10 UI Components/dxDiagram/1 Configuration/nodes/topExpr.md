---
id: dxDiagram.Options.nodes.topExpr
type: String | function(data, value) | undefined
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns the y-coordinate of a node's top border.

##### param(data): any
The current node's data object.

##### return: any
The y-coordinate of a node's top border.

##### param(value): any
The y-coordinate of a node's top border or `undefined`.

---
A function assigned to this property should do the following:

* Return the y-coordinate of a node's top border when the **value** parameter is set to `undefined`.
* Save the y-coordinate value to a data storage when the **value** parameter contains the y-coordinate of a node's top border. For instance, assign this value to the **obj** parameter's field to save the y-coordinate of a node's top in your data source.

A node's y-coordinate specifies the distance between the top border of a diagram work area and the top border of a shape, in [units](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/units.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#units').

[note] Predefined shape coordinates are ignored when the [autoLayout.type](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/autoLayout/type.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/autoLayout/#type') property is set to **layered** or **tree**.