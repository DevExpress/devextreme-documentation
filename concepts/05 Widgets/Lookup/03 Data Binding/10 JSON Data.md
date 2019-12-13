Load JSON data by assigning its URL to the [dataSource](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/dataSource '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/dataSource/') option. 

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            dataSource: "https://jsonplaceholder.typicode.com/users",
            valueExpr: 'username',
            displayExpr: 'name'
        });
    });

#####Angular

    <!--HTML-->
    <dx-lookup
        dataSource="https://jsonplaceholder.typicode.com/users"
        valueExpr="username"
        displayExpr="name">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

---

Note that you can also use a JSONP callback parameter supported by <a href="http://api.jquery.com/jQuery.ajax/" target="_blank">jQuery.ajax()</a>.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            dataSource: "http://www.example.com/dataservices/jsonpdata?callback=?",
            // ...
        });
    });

#####Angular

    <!--HTML-->
    <dx-lookup ...
        dataSource="http://www.example.com/dataservices/jsonpdata?callback=?">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

---

Implement the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') if you need to process data after obtaining it. See the [Custom Sources](/concepts/05%20Widgets/Lookup/03%20Data%20Binding/20%20Custom%20Sources.md '/Documentation/Guide/Widgets/Lookup/Data_Binding/Custom_Sources/') topic for more details.

#####See Also#####
- [Access the DataSource](/concepts/05%20Widgets/Lookup/03%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/Widgets/Lookup/Data_Binding/Access_the_DataSource/')
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics)

[tags]Lookup, data binding, provide data, json, jsonp
