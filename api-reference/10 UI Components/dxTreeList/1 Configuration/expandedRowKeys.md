---
id: dxTreeList.Options.expandedRowKeys
type: Array<any>
default: []
firedEvents: optionChanged
---
---
##### shortDescription
Specifies expanded rows with keys.

---
This property expands only specified rows, not their parent rows. To expand a row that has parent rows, specify all parent row keys in addition to the child row key.

To collapse all rows, set **expandedRowKeys** to an empty array (`[]`).

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview/"
}

#####See Also#####
- [autoExpandAll](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/autoExpandAll.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#autoExpandAll')
- [Expand and Collapse Rows](/concepts/05%20UI%20Components/TreeList/60%20Expand%20and%20Collapse%20Rows/20%20API.md '/Documentation/Guide/UI_Components/TreeList/Expand_and_Collapse_Rows/#API')
