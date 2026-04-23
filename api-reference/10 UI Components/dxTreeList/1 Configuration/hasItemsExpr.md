---
id: dxTreeList.Options.hasItemsExpr
type: String | function(item, value)
---
---
##### shortDescription
Specifies which data field defines whether the node has children.

##### param(item): any
<!-- Description goes here -->

##### param(value): Boolean | undefined
<!-- Description goes here -->

##### return: Boolean | undefined
<!-- Description goes here -->

---
If you load data from the server, you need to set this property so that the UI component does not render the expand button for nodes without children.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/LoadDataOnDemand/"
}