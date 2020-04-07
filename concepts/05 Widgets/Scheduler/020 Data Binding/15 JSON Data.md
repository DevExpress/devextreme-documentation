To bind the **Scheduler** to data in the JSON format, assign the data's URL to the [dataSource](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataSource') option.  

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: "http://url/to/json/data"
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler
        dataSource="http://url/to/json/data">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

---

Note that you can also use a JSONP callback parameter supported by <a href="http://api.jquery.com/jQuery.ajax/" target="_blank">jQuery.ajax()</a>.

---

##### jQuery

    <!--JavaScript-->$(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: "http://url/to/json/data/jsonpdata?callback=?"
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler
        dataSource="http://url/to/json/data/jsonpdata?callback=?">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

---

If you need to process data after obtaining it, implement the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/'). For details, see the [Custom Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/') topic.

#####See Also#####
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview)
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/')

[tags]scheduler, data binding, provide data, json, jsonp