To bind the **Sankey** to data in a JSON format, assign the data's URL to the [dataSource](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#dataSource') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            dataSource: "http://www.example.com/dataservices/data.json",
            sourceField: "from",
            targetField: "to",
            weightField: "amount"
        });
    });

##### Angular

    <!--HTML-->
    <dx-sankey
        dataSource="http://www.example.com/dataservices/data.json"
        sourceField="from"
        targetField="to"
        weightField="amount">
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

---

Note that you can also use a <a href="http://api.jquery.com/jQuery.ajax/" target="_blank">jQuery.ajax()</a>-supported JSONP callback parameter.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            dataSource: "http://www.example.com/dataservices/jsonpdata?callback=?",
            sourceField: "from",
            targetField: "to",
            weightField: "amount"
        });
    });

##### Angular

    <!--HTML-->
    <dx-sankey
        dataSource="http://www.example.com/dataservices/jsonpdata?callback=?"
        sourceField="from"
        targetField="to"
        weightField="amount">
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

---

You should implement the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') if you need to process data after obtaining it. Refer to the [Custom Sources](/concepts/05%20Widgets/Sankey/03%20Data%20Binding/20%20Custom%20Sources.md '/Documentation/Guide/Widgets/Sankey/Data_Binding/Custom_Sources/') topic for more information.

#####See Also#####
- [Update Data in the Sankey](/concepts/05%20Widgets/Sankey/03%20Data%20Binding/26%20Update%20Data '/Documentation/Guide/Widgets/Sankey/Data_Binding/Update_Data/')
