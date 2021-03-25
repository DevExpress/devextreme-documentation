Regardless of the data source you use, the SelectBox always wraps it in a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). Call the [getDataSource()](/api-reference/10%20UI%20Components/DataHelperMixin/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Components/dxSelectBox/Methods/#getDataSource') method to get the instance of the **DataSource**.

---
##### jQuery

    <!--JavaScript-->const selectBoxDataSource = $("#selectBoxContainer").dxSelectBox("getDataSource");

##### Angular

    <!--TypeScript-->
    import { DxSelectBoxModule, DxSelectBoxComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxSelectBoxComponent, { static: false }) selectBox: DxSelectBoxComponent;
        // Prior to Angular 8
        // @ViewChild(DxSelectBoxComponent) selectBox: DxSelectBoxComponent;
        ds: any = {};
        getDataSource () {
            this.ds = this.selectBox.instance.getDataSource();
        }
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })

---

Now, you can call [any method](/api-reference/30%20Data%20Layer/DataSource/3%20Methods '/Documentation/ApiReference/Data_Layer/DataSource/Methods/') the **DataSource** exposes. For example, you can reload data using the [reload()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/reload().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload') method.

    <!--JavaScript-->selectBoxDataSource.reload();

#####See Also#####
- [Data Layer - Overview](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/')
- [SelectBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/Overview)

[tags]selectBox, data binding, access data source, getDataSource, reload data
