---
id: GridBase.Options.headerFilter
type: Object
---
---
##### shortDescription
Configures the header filter feature.

---
A header filter allows a user to filter values in an individual column by including/excluding them in/from the applied filter. A click on a header filter icon invokes a popup menu with all unique values in the column. By selecting or clearing the selection of values in this menu, the user includes/excludes them in/from the filter.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget {WidgetName} HeaderFilter](/images/{WidgetName}/visual_elements/header_filter.png)

To make header filter icons visible, assign **true** to the **headerFilter**.[visible](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/headerFilter/visible.md '{basewidgetpath}/Configuration/headerFilter/#visible') option.

A header filter's popup menu lists all column values. If they are numbers or dates, you can group them using the [groupInterval](/api-reference/_hidden/GridBaseColumn/headerFilter/groupInterval.md '{basewidgetpath}/Configuration/columns/headerFilter/#groupInterval') option in the column's [headerFilter](/api-reference/_hidden/GridBaseColumn/headerFilter '{basewidgetpath}/Configuration/columns/headerFilter/'). You can also provide a custom data source for a header filter using the [dataSource](/api-reference/_hidden/GridBaseColumn/headerFilter/dataSource.md '{basewidgetpath}/Configuration/columns/headerFilter/#dataSource') option.
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/{WidgetName}/Filtering/"
}

#include datagrid-filtering-selectallmodifiesfiltertype with {
    filterValuesLink: "{basewidgetpath}/Configuration/columns/#filterValues",
    filterTypeLink: "{basewidgetpath}/Configuration/columns/#filterType"
}

#####See Also#####
- [Header Filter](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/2%20Header%20Filter.md '/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Header_Filter')
- **columns[]**.[allowHeaderFiltering](/api-reference/_hidden/GridBaseColumn/allowHeaderFiltering.md '{basewidgetpath}/Configuration/columns/#allowHeaderFiltering')
- [filter(filterExpr)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/filter(filterExpr).md '{basewidgetpath}/Methods/#filterfilterExpr')
- [clearFilter(filterName)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/clearFilter(filterName).md '{basewidgetpath}/Methods/#clearFilterfilterName')
