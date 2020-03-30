Extend a JavaScript array's functionality by placing it into an [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'). It provides an interface for loading and editing data, and allows you to handle data-related events.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: new DevExpress.data.ArrayStore({
                data: products,
                onLoaded: function() {
                    // Event handling commands go here
                }
            }),
            valueExpr: 'price',
            displayExpr: 'name'
        });
    });

#####Angular

    <!--TypeScript-->
    import ArrayStore from "devextreme/data/array_store";
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        products = [ /* ... */ ];
        productsStore = new ArrayStore({
            data: this.products,
            onLoaded: function () {
                // Event handling commands go here
            }
        });
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-select-box
        [dataSource]="productsStore"
        valueExpr="price"
        displayExpr="name">
    </dx-select-box>

---

Data kept in the **ArrayStore** can be processed in a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). For example, the **DataSource** can sort data.

---
#####jQuery

    <!--JavaScript-->
    var products = [
        { name: "HD Video Player", price: 100 },
        { name: "SuperHD Video Player", price: 420 },
        { name: "SuperPlasma 50", price: 1500 },
        { name: "SuperLED 50", price: 200 }
    ];
    
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: new DevExpress.data.DataSource({
                store: products,
                sort: { getter: "name", asc: true }
            }),
            valueExpr: 'price',
            displayExpr: 'name'
        });
    });

#####Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        products = [
            { name: "HD Video Player", price: 100 },
            { name: "SuperHD Video Player", price: 420 },
            { name: "SuperPlasma 50", price: 1500 },
            { name: "SuperLED 50", price: 200 }
        ];
        productsDataSource = new DataSource({
            store: this.products,
            sort: { getter: "name", asc: true }
        });
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-select-box
        [dataSource]="productsDataSource"
        valueExpr="price"
        displayExpr="name">
    </dx-select-box>

---

[note]Even if you have [passed a JavaScript array](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/10%20Local%20Array.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/') to the **dataSource** option, the **SelectBox** automatically places it into an **ArrayStore** wrapped into the **DataSource** you can get with the [getDataSource()](/api-reference/10%20UI%20Widgets/DataHelperMixin/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Methods/#getDataSource') method.

#####See Also#####
- [Data Layer - What Are Stores](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores')
- [Data Layer - DataSource Examples | In-memory Data](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/0%20In-memory%20Data.md '/Documentation/Guide/Data_Binding/Data_Source_Examples/#In-memory_Data')
- [Access the DataSource](/concepts/05%20Widgets/SelectBox/03%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/Widgets/SelectBox/Data_Binding/Access_the_DataSource/')
- [SelectBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/Overview)

[tags]selectBox, data binding, provide data, ArrayStore, DataSource, process data
