---
id: GridBase.filter(filterExpr)
---
---
##### shortDescription
Applies a filter to the [dataSource](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource').

##### param(filterExpr): any
A [filter expression](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter).

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/FilteringAPI/"
}

The filter passed to this method is not reflected in [any of the filtering UI elements](/concepts/05%20UI%20Components/DataGrid/30%20Filtering%20and%20Searching '/Documentation/Guide/UI_Components/{WidgetName}/Filtering_and_Searching/') and is applied before these elements' filters. To change UI filters in code, use the following properties instead:

<table class="dx-table">
    <tr>
        <th>Filtering UI Element</th>
        <th>Property</th>
    </tr>
    <tr>
        <td><a href="{basewidgetpath}/Configuration/filterRow/">Filter Row</a></td>
        <td><b>columns[]</b>.<a href="{basewidgetpath}/Configuration/columns/#filterValue">filterValue</a></td>
    </tr>
    <tr>
        <td><a href="{basewidgetpath}/Configuration/headerFilter/">Header Filter</a></td>
        <td><b>columns[]</b>.<a href="{basewidgetpath}/Configuration/columns/#filterValues">filterValues</a></td>
    </tr>
    <tr>
        <td><a href="{basewidgetpath}/Configuration/#filterBuilder">Intergrated Filter Builder</a></td>
        <td><a href="{basewidgetpath}/Configuration/#filterValue">filterValue</a></td>
    </tr>
    <tr>
        <td><a href="{basewidgetpath}/Configuration/searchPanel/">Search Panel</a></td>
        <td><b>searchPanel</b>.<a href="{basewidgetpath}/Configuration/searchPanel/#text">text</a></td>
    </tr>
</table>

To clear all filters applied in code and the UI, call the [clearFilter()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/clearFilter().md '{basewidgetpath}/Methods/#clearFilter') method.

#####See Also#####
#include common-link-callmethods
- [getCombinedFilter()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/getCombinedFilter().md '{basewidgetpath}/Methods/#getCombinedFilter')
