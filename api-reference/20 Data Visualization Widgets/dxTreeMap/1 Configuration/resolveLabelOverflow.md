---
default: 'hide'
acceptValues: 'ellipsis' | 'hide'
type: String
---
---
##### shortDescription
Decides whether those labels that overflow their tile/group should be hidden or truncated with ellipsis.

---
When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), you can specify this option using the `TreeMapResolveLabelOverflow` enum. This enum accepts the following values: `Hide` and `Ellipsis`.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/charts-tree_map-hierarchical_data_structure"
}