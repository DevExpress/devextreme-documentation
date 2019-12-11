If you want to extend the functionality of a JavaScript array, place it into the [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'). It provides an interface for loading and editing data and allows you to handle data-related events.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: new DevExpress.data.ArrayStore({
                data: appointments,
                onLoaded: function () {
                    // Event handling commands go here
                }
            })
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    import ArrayStore from "devextreme/data/array_store";
    // ...
    export class AppComponent {
        appointments = [ /* ... */ ];
        appointmentStore = new ArrayStore({
            data: this.appointments,
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

Data kept in the **ArrayStore** can be processed in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). Its purpose is similar to that of the [Query](/concepts/30%20Data%20Layer/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept'), but the **DataSource** provides wider capabilities. For example, the **DataSource** can map objects from the array that underlies the **ArrayStore** as shown in the following code.

---
##### jQuery

    <!--JavaScript-->
    var appointments = [{ 
        desc: 'Meet with a customer', 
        employee: "Mary Watson",
        from: new Date(2016, 4, 10, 11, 0), 
        to: new Date(2016, 4, 10, 13, 0) 
    }, // ...
    ];
    
    $(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: new DevExpress.data.DataSource({
                store: appointments,
                map: function (item) {
                    return {
                        text: item.employee + " : " + item.desc,
                        startDate: item.from,
                        endDate: item.to
                    }   
                },
                paginate: false
            })
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        appointments = [{ 
            desc: 'Meet with a customer', 
            employee: "Mary Watson",
            from: new Date(2016, 4, 10, 11, 0), 
            to: new Date(2016, 4, 10, 13, 0) 
        }, 
        // ...
        ];
        appointmentDataSource = new DataSource({
            store: this.appointments,
            map: function (item) {
                return {
                    text: item.employee + " : " + item.desc,
                    startDate: item.from,
                    endDate: item.to
                }   
            },
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

#####See Also#####
- [Data Layer - What Are Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Creating_DataSource_What_Are_Stores)
- [Data Layer - DataSource Examples | In-memory Data](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/0%20In-memory%20Data.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#In-memory_Data')
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview)
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/')

[tags]scheduler, data binding, provide data, ArrayStore, DataSource, process data
