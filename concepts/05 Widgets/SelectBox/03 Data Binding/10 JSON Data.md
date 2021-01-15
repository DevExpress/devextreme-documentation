Load JSON data by assigning its URL to the [dataSource](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#dataSource') option. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: "https://jsonplaceholder.typicode.com/users",
            valueExpr: 'username',
            displayExpr: 'name'
        });
    });

##### Angular

    <!--HTML-->
    <dx-select-box
        dataSource="https://jsonplaceholder.typicode.com/users"
        valueExpr="username"
        displayExpr="name">
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })

---

Note that you can also use a JSONP callback parameter supported by <a href="http://api.jquery.com/jQuery.ajax/" target="_blank">jQuery.ajax()</a>.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: "http://www.example.com/dataservices/jsonpdata?callback=?",
            // ...
        });
    });

##### Angular

    <!--HTML-->
    <dx-select-box ...
        dataSource="http://www.example.com/dataservices/jsonpdata?callback=?">
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })

---

Implement the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') if you need to process data after obtaining it. See the [Custom Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/') topic for more details.

#####See Also#####
- [Access the DataSource](/concepts/05%20Widgets/SelectBox/03%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/Widgets/SelectBox/Data_Binding/Access_the_DataSource/')
- [SelectBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/Overview)

[tags]selectBox, data binding, provide data, json, jsonp