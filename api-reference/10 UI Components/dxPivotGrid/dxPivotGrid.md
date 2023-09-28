---
id: dxPivotGrid
module: ui/pivot_grid
export: default
inherits: Widget
references: ExcelExportPivotGridProps.component
---
---
##### shortDescription
The PivotGrid is a UI component that allows you to display and analyze multi-dimensional data from a local storage or an OLAP cube.

##### widgettree
fieldChooser: { width: 400 },
showBorders: true,
dataSource: {
        fields: [
            { dataField: "[Product].[Category]", area: "row" },
            { dataField: "[Product].[Subcategory]", area: "row" },
            { dataField: "[Ship Date].[Calendar Year]", area: "column" },
            { dataField: "[Ship Date].[Month of Year]", area: "column" },
            { dataField: "[Measures].[Customer Count]", area: "data" }
        ],
        store: {
            type: "xmla",
            url: "https://demos.devexpress.com/Services/OLAP/msmdpump.dll",
            catalog: "Adventure Works DW Standard Edition",
            cube: "Adventure Works"
        }
    }

##### lib
dx.web.js, dx.all.js

---
#include common-tutorialbutton with {
    url: "/Documentation/Guide/UI_Components/PivotGrid/Getting_Started_with_PivotGrid/" 
}
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget