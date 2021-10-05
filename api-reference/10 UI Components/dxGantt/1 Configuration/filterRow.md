---
id: dxGantt.Options.filterRow
type: dxGanttFilterRow
inheritsType: dxGanttFilterRow
---
---
##### shortDescription
Configures filter row settings.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/FilterRow/"
}

Users can enter a value into the filter row to filter Gantt data. Set the [filterRow.visible](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/filterRow/#visible) property to **true** to display the filter row.

![DevExtreme Gantt - Filter Row](/images/Gantt/filter-row.png)

Each cell in the filter row contains a magnifier icon. Click a column's magnifier icon to select a filter operation available for the column. Use the [selectedFilterOperation](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#selectedFilterOperation) property to specify the default filter operation for a column's filter row. 

![DevExtreme Gantt - Filter Row](/images/Gantt/filter-row-icon.png)

To hide a filter row cell for an individual column, set the column’s [allowFiltering](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#allowFiltering) property to **false**.