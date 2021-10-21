---
id: dxDiagram.Options.edges.textExpr
type: String | function(data, value)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns edge text.

##### param(data): any
The current edge's data object.

##### return: any
An edge's text.

##### param(value): any
When the function is called as a setter, returns the edge's new text value; when the function is called as a getter, returns `undefined`.

---
The specified data source field or expression should return a string or object value.

- The string specifies the text displayed in the middle of a connector. 
    Example: `"text"`.
- The object can contain multiple texts and their positions on the connector. The position is a number from 0 to 1, where 0 corresponds to the connector's start point and 1 to the connector's end point.
    Example: `{ 0.3: "text1", 0.8: "text2" }`.
