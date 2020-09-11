---
id: dxDataGrid
module: ui/data_grid
export: default
inherits: GridBase
---
---
##### shortDescription
The **DataGrid** is a widget that represents data from a local or remote source in the form of a grid. This widget offers such basic features as [sorting](/concepts/05%20Widgets/DataGrid/25%20Sorting '/Documentation/Guide/Widgets/DataGrid/Sorting/'), [grouping](/concepts/05%20Widgets/DataGrid/45%20Grouping '/Documentation/Guide/Widgets/DataGrid/Grouping/'), [filtering](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/'), as well as more advanced capabilities, like [state storing](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/stateStoring '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/'), [client-side exporting](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/'), [master-detail interface](/concepts/05%20Widgets/DataGrid/60%20Master-Detail%20Interface '/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/'), and many others.

##### widgettree
dataSource: [{
    "ID": 1,
    "CompanyName": "Super Mart of the West",
    "City": "Bentonville",
    "State": "Arkansas"
}, {
    "ID": 2,
    "CompanyName": "Electronics Depot",
    "City": "Atlanta",
    "State": "Georgia"
}, {
    "ID": 3,
    "CompanyName": "K&S Music",
    "City": "Minneapolis",
    "State": "Minnesota"
}, {
    "ID": 4,
    "CompanyName": "Tom's Club",
    "City": "Issaquah",
    "State": "Washington"
}, {
    "ID": 5,
    "CompanyName": "E-Mart",
    "City": "Hoffman Estates",
    "State": "Illinois"
}]

##### lib
dx.web.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/DataGridGallery/#chart/datagridspagingandscrollingpager"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/DataGrid/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget
