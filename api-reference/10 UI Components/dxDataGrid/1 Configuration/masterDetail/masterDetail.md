---
id: dxDataGrid.Options.masterDetail
type: ui\data_grid:MasterDetail
inheritsType: ui\data_grid:MasterDetail
---
---
##### shortDescription
Allows you to build a [master-detail interface](/concepts/05%20UI%20Components/DataGrid/60%20Master-Detail%20Interface '/Documentation/Guide/UI_Components/DataGrid/Master-Detail_Interface/') in the grid.

---
In DataGrid, a master-detail interface supplies a usual data row with an expandable section that contains the details on this data row. In that case, the data row is called "master row", while the section is called "detail section".

To enable the master-detail interface, assign **true** to the **masterDetail**.[enabled](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/masterDetail/enabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/masterDetail/#enabled') property. After that, specify the template for detail sections using the **masterDetail**.**template** property. Templates allow you to place virtually anything into the detail sections. For example, you can display another DataGrid or any other [UI component](/api-reference/10%20UI%20Components '/Documentation/ApiReference/UI_Components/') there. For more information on specifying the template for the detail sections, see the [template](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/masterDetail/template.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/masterDetail/#template') property description.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MasterDetailView/",
    name: "Master-Detail View"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/AdvancedMasterDetailView/",
    name: "Advanced Master-Detail View"
}

#####See Also#####
- [Master-Detail Interface](/concepts/05%20UI%20Components/DataGrid/60%20Master-Detail%20Interface '/Documentation/Guide/UI_Components/DataGrid/Master-Detail_Interface/')