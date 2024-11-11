---
id: dxDiagram.Options.edges.styleExpr
type: String | function(data, value) | undefined
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns an edge style.

##### param(data): any
The current edge's data object.

##### return: any
An edge style.

##### param(value): any
An edge's new style or `undefined`.

---
A data source field assigned to this property should contain in-line style declarations in string format. For instance, `"stroke: #999999"`.

A function assigned to this property should do the following:

* Return an edge's new style as a set of CSS rules in JSON format when the **value** parameter is set to `undefined`. For instance, `{"stroke": "#999999"}`.
* Save a new style value to a data storage when the **value** parameter contains an edge's style. For instance, assign this value to the **obj** parameter's field to save an edge's style in your data source.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/AdvancedDataBinding/"
}
