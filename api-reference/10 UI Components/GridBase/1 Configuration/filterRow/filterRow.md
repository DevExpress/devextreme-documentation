---
id: GridBase.Options.filterRow
type: common\grids:FilterRow
inheritsType: common\grids:FilterRow
---
---
##### shortDescription
Configures the filter row.

---
The filter row allows a user to filter data by values of individual columns.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout {WidgetName} FilterRow](/images/{WidgetName}/visual_elements/filter_row.png)

Each cell in the filter row contains a magnifying glass icon, pausing on which opens a drop-down list with filters [available for the column](/api-reference/_hidden/GridBaseColumn/filterOperations.md '{basewidgetpath}/Configuration/columns/#filterOperations').

![DevExtreme HTML5 JavaScript jQuery Angular Knockout {WidgetName} FilterRow](/images/{WidgetName}/visual_elements/filter_row_operation_chooser.png)

To make the filter row visible, assign **true** to the **filterRow**.[visible](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterRow/visible.md '{basewidgetpath}/Configuration/filterRow/#visible') property.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Filtering/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/UsingFilterRow/",
    name: "TreeList"
}

#####See Also#####
- [Filter Row](/concepts/05%20UI%20Components/DataGrid/30%20Filtering%20and%20Searching/1%20Filter%20Row.md '/Documentation/Guide/UI_Components/{WidgetName}/Filtering_and_Searching/#Filter_Row')
- [filter(filterExpr)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/filter(filterExpr).md '{basewidgetpath}/Methods/#filterfilterExpr')
- [clearFilter(filterName)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/clearFilter(filterName).md '{basewidgetpath}/Methods/#clearFilterfilterName')