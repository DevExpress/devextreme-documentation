---
id: dxDiagram.Options.edges.textExpr
type: String | function(data, value) | undefined
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
An edge's new text or `undefined`.

---
A function assigned to this property should do the following:

* Return an edge's new text when the **value** parameter is set to `undefined`.
* Save a new text value to a data storage when the **value** parameter contains an edge's text. For instance, assign this value to the **obj** parameter's field to save an edge's text in your data source.

Use a string or object value to specify an edge's text:

- **String**  
Specifies the text in the middle of a connector. For instance, `"text"`.

- **Object**  
Contains multiple texts and their positions on the connector. The position is a number between 0 and 1, where 0 corresponds to the connector's start point and 1 to the connector's end point. For instance, `{ 0.3: "text1", 0.8: "text2" }`.
