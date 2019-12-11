---
default: 'hide'
acceptValues: 'ellipsis' | 'hide'
type: String
---
---
##### shortDescription
Decides whether those labels that overflow their tile/group should be hidden or truncated with ellipsis.

---
#include common-ref-enum with {
    enum: "`TreeMapResolveLabelOverflow`",
    values: "`Hide` and `Ellipsis`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/charts-tree_map-hierarchical_data_structure"
}