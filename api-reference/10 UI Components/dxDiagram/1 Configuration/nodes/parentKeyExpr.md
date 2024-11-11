---
id: dxDiagram.Options.nodes.parentKeyExpr
type: String | function(data, value) | undefined
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns a parent node key for a node.

##### param(data): any
The current node's data object.

##### return: any
A parent node key for a node.

##### param(value): any
A parent node key for a node or `undefined`.

---
A function assigned to this property should do the following:

* Return a parent node key for a node when the **value** parameter is set to `undefined`.
* Save a key value to a data storage when the **value** parameter contains a parent node key. For instance, assign this value to the **obj** parameter's field to save a parent node key for a node in your data source.

Specify this property if your source data has a [linear structure](/concepts/05%20UI%20Components/Diagram/10%20Data%20Binding/20%20Linear%20Array.md '/Documentation/Guide/UI_Components/Diagram/Data_Binding/#Linear_Array').

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/NodesArrayPlainStructure/"
}