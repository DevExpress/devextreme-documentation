---
##### merge

---
The filter row allows a user to filter data by values of individual columns.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList FilterRow](/images/treelist/visual_elements/filter_row.png)

Each cell in the filter row contains a magnifying glass icon, pausing on which opens a drop-down list with filters [available for the column](/api-reference/_hidden/GridBaseColumn/filterOperations.md '{basewidgetpath}/Configuration/columns/#filterOperations').

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList FilterRow](/images/treelist/visual_elements/filter_row_operation_chooser.png)

To make the filter row visible, assign **true** to the **filterRow**.[visible](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterRow/visible.md '{basewidgetpath}/Configuration/filterRow/#visible') option.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/UsingFilterRow/"
}

#####See Also#####
- [Filter Row](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/1%20Filter%20Row.md '/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Filter_Row')
- [expandNodesOnFiltering](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/expandNodesOnFiltering.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#expandNodesOnFiltering')
- [filter(filterExpr)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/filter(filterExpr).md '{basewidgetpath}/Methods/#filterfilterExpr')
- [clearFilter(filterName)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/clearFilter(filterName).md '{basewidgetpath}/Methods/#clearFilterfilterName')