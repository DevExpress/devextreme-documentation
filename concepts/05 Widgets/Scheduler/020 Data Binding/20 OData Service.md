Use the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') to bind the **Scheduler** to data an OData service provides. It presents an interface for loading and editing data and allows you to handle data-related events.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: new DevExpress.data.ODataStore({
                url: "http://url/to/odata/service"
                onLoaded: function () {
                    // Event handling commands go here
                }
            })
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    import ODataStore from "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        appointmentStore = new ODataStore({
            url: "http://url/to/odata/service",
            onLoaded: function () {
                // Event handling commands go here
            }
        });
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-scheduler
        [dataSource]="appointmentStore">
    </dx-scheduler>

---

Data kept in the **ODataStore** can be processed in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). For example, the **DataSource** can filter data as shown in the following code. Note that the [paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') option is set **false** to prevent data from being partitioned because the **Scheduler** does not support paging.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: "odata",
                    url: "http://url/to/odata/service"
                },
                filter: ["Not_Assigned", "=", true],
                paginate: false
            })
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    import "devextreme/data/odata/store";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        appointmentDataSource = new DataSource({
            store: {
                type: "odata",
                url: "http://url/to/odata/service",
            },
            filter: ["Not_Assigned", "=", true],
            paginate: false
        });
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-scheduler
        [dataSource]="appointmentDataSource">
    </dx-scheduler>

---

[note] Setting the **ODataStore**'s **deserializeDates** option to **false** may cause filtering issues in the **Scheduler**. See this option's [description](/api-reference/30%20Data%20Layer/ODataStore/1%20Configuration/deserializeDates.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#deserializeDates') for details.

#####See Also#####
- [Data Layer - What Are Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Creating_DataSource_What_Are_Stores)
- [Data Layer - Data Source Examples | OData](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData')
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview)
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/')

[tags]scheduler, data binding, provide data, odata, ODataStore, DataSource, process data
