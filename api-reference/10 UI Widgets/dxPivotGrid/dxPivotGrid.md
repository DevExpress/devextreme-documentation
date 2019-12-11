---
module: ui/pivot_grid
inherits: ..\Widget\Widget.md
---
---
##### widgettree
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
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **PivotGrid** is a widget that allows you to display and analyze multi-dimensional data from a local storage or an OLAP cube.

---
You can create the **PivotGrid** widget using one of the following approaches.

- **jQuery**  
 Use the `dxPivotGrid` jQuery plug-in.

        <!--HTML--><div id="pivotGridContainer"></div>

    <!---->

        <!--JavaScript-->$("#pivotGridContainer").dxPivotGrid({
            dataSource: {
                store: orders,
                fields: [
                    { area: 'column', dataField: 'OrderDate', dataType: 'date', groupInterval: 'year' },
                    { area: 'column', dataField: 'OrderDate', dataType: 'date', groupInterval: 'quarter' },
                    { area: 'column', dataField: 'OrderDate', dataType: 'date', groupInterval: 'month' },
                    { area: 'row', dataField: 'ShipCountry' },
                    { area: 'row', dataField: 'ShipCity' },
                    { area: 'row', dataField: 'ShipName' },
                    { area: 'data', summaryType: 'count' }
                ]
            }
        });
- **Knockout**  
 Add a div element and apply the `dxPivotGrid` binding to this element.

        <!--HTML-->
        <div data-bind="dxPivotGrid: {
			dataSource: {
                store: orders,
                fields: [
                    { area: 'column', dataField: 'OrderDate', dataType: 'date', groupInterval: 'year' },
                    { area: 'column', dataField: 'OrderDate', dataType: 'date', groupInterval: 'quarter' },
                    { area: 'column', dataField: 'OrderDate', dataType: 'date', groupInterval: 'month' },
                    { area: 'row', dataField: 'ShipCountry' },
                    { area: 'row', dataField: 'ShipCity' },
                    { area: 'row', dataField: 'ShipName' },
                    { area: 'data', summaryType: 'count' }
                ]
            }
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-pivot-grid` directive to this element.

        <!--HTML-->
        <div dx-pivot-grid="{
			dataSource: {
                store: orders,
                fields: [
                    { area: 'column', dataField: 'OrderDate', dataType: 'date', groupInterval: 'year' },
                    { area: 'column', dataField: 'OrderDate', dataType: 'date', groupInterval: 'quarter' },
                    { area: 'column', dataField: 'OrderDate', dataType: 'date', groupInterval: 'month' },
                    { area: 'row', dataField: 'ShipCountry' },
                    { area: 'row', dataField: 'ShipCity' },
                    { area: 'row', dataField: 'ShipName' },
                    { area: 'data', summaryType: 'count' }
                ]
            }
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

To provide data for the **PivotGrid** widget, specify a data source. **PivotGrid** accepts the [PivotGridDataSource](/api-reference/30%20Data%20Layer/PivotGridDataSource '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/') data source only. You can pass its configuration to the [dataSource](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#dataSource') field without creating the separate **PivotGridDataSource** object as shown above.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-pivot_grid_data_binding-local_data_source" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<a href="http://www.youtube.com/watch?v=a3B0XLSIEBM&index=49&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>