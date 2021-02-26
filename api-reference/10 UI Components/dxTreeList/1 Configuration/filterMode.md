---
id: dxTreeList.Options.filterMode
acceptValues: 'fullBranch' | 'withAncestors' | 'matchOnly'
type: String
default: 'withAncestors'
---
---
##### shortDescription
Specifies whether filter and search results should include matching rows only, matching rows with ancestors, or matching rows with ancestors and descendants (full branch).

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/FilterModes/"
}

#include common-ref-enum with {
    enum: "`TreeListFilterMode`",
    values: "`FullBranch` and `WithAncestors`"
}