---
id: dxDiagram.Options.edges.textExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides edge texts.

##### param(data): Object
The current edge's data object.

---
The specified data source field or an expression should return a string or object value.

- A string specifies the text displayed in the middle of a connector. 
    Example: `"text"`.
- An object can contain multiple texts and their positions on the connector. The position is a number from 0 to 1, where 0 corresponds to the connector's start point and 1 to the connector's end point.
    Example: `{ 0.3: "text1", 0.8: "text2" }`.
