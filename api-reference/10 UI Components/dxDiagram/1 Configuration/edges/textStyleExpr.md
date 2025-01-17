---
id: dxDiagram.Options.edges.textStyleExpr
type: String | function(data, value) | undefined
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns an edge's text style.

##### param(data): any
The current edge's data object.

##### return: any
An edge's text style.

##### param(value): any
An edge's new text style or `undefined`.

---
A data source field assigned to this property should contain in-line style declarations in string format. For instance, `"font-weight: bold; text-decoration: underline"`.

A function assigned to this property should do the following:

* Return an edge's text style as a set of CSS rules in JSON format when the **value** parameter is set to `undefined`. For instance, `{ "font-weight": "bold", "text-decoration": "underline" }`.
* Save a new text style value to a data storage when the **value** parameter contains an edge's text style. For instance, assign this value to the **obj** parameter's field to save an edge's text style in your data source.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/AdvancedDataBinding/"
}
