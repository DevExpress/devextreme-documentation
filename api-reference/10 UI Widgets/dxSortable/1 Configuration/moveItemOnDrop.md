---
id: dxSortable.Options.moveItemOnDrop
type: Boolean
default: false
---
---
##### shortDescription
Moves an element in the HTML markup when it is dropped.

---

We recommend that you set this option to **false** if you use Angular/Vue/React. In these frameworks, the HTML markup depends on the data model and is updated automatically when you make changes.

If you use jQuery/ASP.NET, we recommend that you set **moveItemsOnDrop** to **true** because changes to the data model do not automatically update the HTML markup. If you set this option to **false**, you should move DOM nodes in the [onReorder](/api-reference/10%20UI%20Widgets/dxSortable/1%20Configuration/onReorder.md '/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#onReorder') function.
