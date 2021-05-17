---
id: dxDiagram.Options.nodes.parentKeyExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides a parent node key for a node.

##### param(data): Object
The current node's data object.

##### return: any
A parent node key for a node.

---
Specify this property if your source data has a [linear structure](/concepts/05%20UI%20Components/Diagram/10%20Data%20Binding/20%20Linear%20Array.md '/Documentation/Guide/UI_Components/Diagram/Data_Binding/#Linear_Array').

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/NodesArrayPlainStructure/"
}