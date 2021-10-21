---
id: dxDiagram.Options.nodes.parentKeyExpr
type: String | function(data, value)
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
When the function is called as a setter, returns a parent node key for the node; when the function is called as a getter, returns `undefined`.

---
Specify this property if your source data has a [linear structure](/concepts/05%20UI%20Components/Diagram/10%20Data%20Binding/20%20Linear%20Array.md '/Documentation/Guide/UI_Components/Diagram/Data_Binding/#Linear_Array').

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/NodesArrayPlainStructure/"
}