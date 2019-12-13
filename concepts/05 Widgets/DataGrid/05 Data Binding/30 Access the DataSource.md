Regardless of the data source you use, the **DataGrid** always wraps it in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). To get a **DataSource** instance, call the [getDataSource()](/api-reference/10%20UI%20Widgets/DataHelperMixin/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getDataSource') method.

---
##### jQuery

    <!--JavaScript-->
    var ds = $("#dataGridContainer").dxDataGrid("getDataSource");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        ds: any = {};
        getDataSource () {
            this.ds = this.dataGrid.instance.getDataSource();
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

You can now call [any method](/api-reference/30%20Data%20Layer/DataSource/3%20Methods '/Documentation/ApiReference/Data_Layer/DataSource/Methods/') exposed by the **DataSource**. For example, you can reload data using the [reload()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/reload().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload') method.

    <!--JavaScript-->
    ds.reload();

#####See Also#####
- [Data Layer - Overview](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/')
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalDataSource)

[tags]dataGrid, data grid, data binding, access data source, getDataSource, reload data
