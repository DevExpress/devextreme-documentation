---
##### merge

---
A header filter allows a user to filter values in an individual column by including or excluding them from the applied filter. A click on a header filter icon invokes a popup menu with all unique values in the column. By selecting or clearing the selection of values in this menu, the user includes or excludes them from the filter.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList HeaderFilter](/images/treelist/visual_elements/header_filter.png)

To make header filter icons visible, assign **true** to the **headerFilter**.[visible](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/headerFilter/visible.md '{basewidgetpath}/Configuration/headerFilter/#visible') option. Data in the popup menu can be customized using the [headerFilter](/api-reference/_hidden/GridBaseColumn/headerFilter '{basewidgetpath}/Configuration/columns/headerFilter/') option of a specific column.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/UsingHeaderFilter/"
}

#####See Also#####
- [Header Filter](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/2%20Header%20Filter.md '/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Header_Filter')
- **columns[]**.[allowHeaderFiltering](/api-reference/_hidden/GridBaseColumn/allowHeaderFiltering.md '{basewidgetpath}/Configuration/columns/#allowHeaderFiltering')
- [filter(filterExpr)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/filter(filterExpr).md '{basewidgetpath}/Methods/#filterfilterExpr')
- [clearFilter(filterName)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/clearFilter(filterName).md '{basewidgetpath}/Methods/#clearFilterfilterName')