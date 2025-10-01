---
id: dxTreeList.Options.rootValue
type: any
default: 0
---
---
##### shortDescription
Specifies the root key. Applies if [dataStructure](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/dataStructure.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#dataStructure') is *"plain"*.

---

Assign a node's **parentId** to the value of this property to specify a root node.

[note] TreeList does not display nodes that have an **id** value identical to **rootValue**. To ensure the component displays data correctly, specify a **rootValue** that does not match node **id** properties.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/SimpleArrayPlainStructure/"
}

#####See Also#####
- [parentIdExpr](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/parentIdExpr.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#parentIdExpr')
- [keyExpr](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#keyExpr')