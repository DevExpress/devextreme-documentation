The **DataGrid** caches data by default. This allows the widget to decrease the loading time when a user sorts and filters data or expands a row the second time. To update data in cache, call the [refresh()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/refresh().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#refresh') method of the widget or the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method of the **DataSource**.

---
##### jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("refresh");
    // ===== or =====
    var dataGridDataSource = $("#dataGridContainer").dxDataGrid("getDataSource");
    dataGridDataSource.load();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        refreshData () {
            this.dataGrid.instance.refresh();
            // ===== or =====
            let dataGridDataSource = this.dataGrid.instance.getDataSource();
            dataGridDataSource.load();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

[note]When data processing operations are [delegated to the server](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding/25%20Custom%20Sources '/Documentation/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/'), data is loaded every time these operations are performed even if caching is enabled. 

If your data source changes frequently, disable caching by assigning **false** to the **cacheEnabled** option. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({ 
            // ...
            cacheEnabled: false
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        [cacheEnabled]="false">
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

#####See Also#####
#include common-link-callmethods
- [DataGrid - Access the DataSource](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/Widgets/DataGrid/Data_Binding/Access_the_DataSource/')
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalDataSource)

[tags] dataGrid, data grid, caching, cache, enable caching, cacheEnabled