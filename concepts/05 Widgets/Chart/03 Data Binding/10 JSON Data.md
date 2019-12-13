To bind the **Chart** to data in a JSON format, assign the data's URL to the [dataSource](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#dataSource') option.  

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            dataSource: "http://www.example.com/dataservices/data.json",
            series: {
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart dataSource="http://www.example.com/dataservices/data.json">
        <dxi-series ... ></dxi-series>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
	@NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

Note that you can also use a JSONP callback parameter supported by <a href="http://api.jquery.com/jQuery.ajax/" target="_blank">jQuery.ajax()</a>.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            dataSource: "http://www.example.com/dataservices/jsonpdata?callback=?",
            series: {
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart dataSource="http://www.example.com/dataservices/jsonpdata?callback=?">
        <dxi-series ... ></dxi-series>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
	@NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

If you need to process data after obtaining it, implement the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/'). For details, see the [Custom Sources](/concepts/05%20Widgets/Chart/03%20Data%20Binding/20%20Custom%20Sources.md '/Documentation/Guide/Widgets/Chart/Data_Binding/Custom_Sources/') topic.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ClientSideDataProcessing/"
}

#####See Also#####
- [Bind Series to Data](/concepts/05%20Widgets/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data '/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/')
- [Update Data in the Chart](/concepts/05%20Widgets/Chart/03%20Data%20Binding/26%20Update%20Data '/Documentation/Guide/Widgets/Chart/Data_Binding/Update_Data/')
- [Data Aggregation](/concepts/05%20Widgets/Chart/88%20Data%20Aggregation '/Documentation/Guide/Widgets/Chart/Data_Aggregation/')
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')

[tags]chart, data binding, provide data, json, jsonp
