---
module: ui/pivot_grid
export: default
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
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#pivotGrid").dxPivotGrid({
            dataSource: {
                store: {
                    type: "odata",
                    url: "http://url/to/the/service",
                    key: "OrderID",
                    keyType: "Int32"
                },
                fields: [
                    { area: "column", dataField: "OrderDate", dataType: "date" },
                    { area: "row", dataField: "ShipCountry" },
                    { area: "row", dataField: "ShipCity" },
                    { area: "row", dataField: "ShipName" },
                    { area: "data", summaryType: "count" }
                ]
            }
        });
    });

    <!--HTML--><div id="pivotGrid"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-pivot-grid
        [dataSource]="pivotGridDataSource">
    </dx-pivot-grid>

    <!--TypeScript-->
    import { DxPivotGridModule } from "devextreme-angular";
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                store: {
                    type: "odata",
                    url: "http://url/to/the/service",
                    key: "OrderID",
                    keyType: "Int32"
                },
                fields: [
                    { area: "column", dataField: "OrderDate", dataType: "date" },
                    { area: "row", dataField: "ShipCountry" },
                    { area: "row", dataField: "ShipCity" },
                    { area: "row", dataField: "ShipName" },
                    { area: "data", summaryType: "count" }
                ]
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxPivotGridModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div dx-pivot-grid="{
        dataSource: {
            store: {
                type: 'odata',
                url: 'http://url/to/the/service',
                key: 'OrderID',
                keyType: 'Int32'
            },
            fields: [
                { area: 'column', dataField: 'OrderDate', dataType: 'date'},
                { area: 'row', dataField: 'ShipCountry' },
                { area: 'row', dataField: 'ShipCity' },
                { area: 'row', dataField: 'ShipName' },
                { area: 'data', summaryType: 'count' }
            ]
        }
    }"></div>

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML--><div data-bind="dxPivotGrid: {
        dataSource: {
            store: {
                type: 'odata',
                url: 'http://url/to/the/service',
                key: 'OrderID',
                keyType: 'Int32'
            },
            fields: [
                { area: 'column', dataField: 'OrderDate', dataType: 'date' },
                { area: 'row', dataField: 'ShipCountry' },
                { area: 'row', dataField: 'ShipCity' },
                { area: 'row', dataField: 'ShipName' },
                { area: 'data', summaryType: 'count' }
            ]
        }
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().PivotGrid()
        .ID("pivotGrid")
        .DataSource(ds => ds
            .Store(store => store.OData()
                .Url("http://url/to/the/service")
                .Key("OrderID")
                .KeyType(EdmType.Int32)
            )
            .Fields(fields => {
                fields.Add().Area(PivotGridArea.Column)
                    .DataField("OrderDate")
                    .DataType(PivotGridDataType.Date);
                fields.Add().Area(PivotGridArea.Row).DataField("ShipCountry");
                fields.Add().Area(PivotGridArea.Row).DataField("ShipCity");
                fields.Add().Area(PivotGridArea.Row).DataField("ShipName");
                fields.Add().Area(PivotGridArea.Data).SummaryType(SummaryType.Count);
            })
        )
    )

    <!--Razor VB-->@(Html.DevExtreme().PivotGrid() _
        .ID("pivotGrid") _
        .DataSource(Sub(ds)
            ds.Store(Function(store)
                Return store.OData() _
                    .Url("http://url/to/the/service") _
                    .Key("OrderID") _
                    .KeyType(EdmType.Int32)
                End Function) _
            .Fields(Sub(fields)
                fields.Add().Area(PivotGridArea.Column) _
                    .DataField("OrderDate") _
                    .DataType(PivotGridDataType.Date)
                fields.Add().Area(PivotGridArea.Row).DataField("ShipCountry")
                fields.Add().Area(PivotGridArea.Row).DataField("ShipCity")
                fields.Add().Area(PivotGridArea.Row).DataField("ShipName")
                fields.Add().Area(PivotGridArea.Data).SummaryType(SummaryType.Count)
            End Sub)
        End Sub)
    )

---

 

To provide data for the **PivotGrid** widget, specify a data source. **PivotGrid** accepts the [PivotGridDataSource](/api-reference/30%20Data%20Layer/PivotGridDataSource '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/') data source only. You can pass its configuration to the [dataSource](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#dataSource') field without creating the separate **PivotGridDataSource** object as shown above.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-pivot_grid_data_binding-local_data_source"
}
<a href="http://www.youtube.com/watch?v=a3B0XLSIEBM&index=49&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>