To bind the Funnel to data in a JSON format, assign the data's URL to the [dataSource](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/#dataSource') property.  

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            dataSource: "http://www.example.com/dataservices/data.json",
            argumentField: 'arg',
            valueField: 'val'
        });
    });

##### Angular

    <!--HTML-->
    <dx-funnel
        dataSource="http://www.example.com/dataservices/data.json"
        argumentField="arg"
        valueField="val">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

Note that you can also use a JSONP callback parameter supported by <a href="http://api.jquery.com/jQuery.ajax/" target="_blank">jQuery.ajax()</a>.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            dataSource: "http://www.example.com/dataservices/jsonpdata?callback=?",
            argumentField: 'arg',
            valueField: 'val'
        });
    });

##### Angular

    <!--HTML-->
    <dx-funnel
        dataSource="http://www.example.com/dataservices/jsonpdata?callback=?"
        argumentField="arg"
        valueField="val">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

If you need to process data after obtaining it, implement the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/'). For details, see the [Custom Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/') topic.

#####See Also#####
- [Update Data in the Funnel](/concepts/70%20Data%20Binding/03%20Update%20Data '/Documentation/Guide/Data_Binding/Update_Data/')
