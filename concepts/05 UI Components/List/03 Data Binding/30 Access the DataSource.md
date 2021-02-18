Regardless of the data source you use, the List always wraps it in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). To get the instance of the **DataSource**, call the [getDataSource()](/api-reference/10%20UI%20Widgets/DataHelperMixin/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Components/dxList/Methods/#getDataSource') method.

---
##### jQuery

    <!--JavaScript-->const listDataSource = $("#listContainer").dxList("getDataSource");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxListModule, DxListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxListComponent, { static: false }) list: DxListComponent;
        // Prior to Angular 8
        // @ViewChild(DxListComponent) list: DxListComponent;
        listDataSource: any = {};
        getDataSource () {
            this.listDataSource = this.dataGrid.instance.getDataSource();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })
    
---

Now, you can call [any method](/api-reference/30%20Data%20Layer/DataSource/3%20Methods '/Documentation/ApiReference/Data_Layer/DataSource/Methods/') exposed by the **DataSource**. For example, you can reload data using the [reload()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload') method.

    <!--JavaScript-->listDataSource.reload();

#####See Also#####
- [Data Layer - Overview](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/')
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI)
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Components/dxList/')

[tags]list, data binding, access data source, getDataSource, reload data