To bind the **Scheduler** to an array, pass this array to the [dataSource](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/dataSource '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/dataSource/') option.

---

##### jQuery

    <!--JavaScript-->
    var appointments = [{ 
        text: 'Meet with a customer', 
        startDate: new Date(2016, 4, 25, 1, 30),
        endDate: new Date(2016, 4, 25, 3, 30)
    }, { 
        text: 'Discuss results', 
        startDate: new Date(2016, 4, 25, 9, 0),
        endDate: new Date(2016, 4, 25, 10, 0)
    }, // ...
    ];

    $(function(){
        $("#schedulerContainer").dxScheduler({
            dataSource: appointments
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent  {
        appointments = [{
            text: "Meet with a customer",
            startDate: new Date(2016, 4, 25, 1, 30),
            endDate: new Date(2016, 4, 25, 3, 30)
        }, {
            text: "Discuss results",
            startDate: new Date(2016, 4, 25, 9, 0),
            endDate: new Date(2016, 4, 25, 10, 0)
        }];
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
        [dataSource]="appointments">
    </dx-scheduler>
    
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/SimpleArray/"
}

If objects in the array need to be processed (for example, filtered), you can create a [Query](/concepts/30%20Data%20Layer/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept'). In the following code, a Query selects objects with `text` containing *'meet'*.

---
##### jQuery

    <!--JavaScript-->
    var appointments = [{ 
        text: 'Meet with a customer', 
        startDate: new Date(2016, 4, 10, 11, 0), 
        endDate: new Date(2016, 4, 10, 13, 0) 
    }, 
    // ...
    ];

    $(function(){
        $("#schedulerContainer").dxScheduler({
            dataSource: DevExpress.data.query(appointments)
                            .filter("text", "contains", "meet")
                            .toArray()
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    import query from "devextreme/data/query";
    // ...
    export class AppComponent {
        appointments = [{ 
            text: 'Meet with a customer', 
            startDate: new Date(2016, 4, 10, 11, 0), 
            endDate: new Date(2016, 4, 10, 13, 0) 
        }, 
        // ...
        ];
        getFilteredEmployees () {
            return query(this.appointments).filter("text", "contains", "meet").toArray();
        }
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
        [dataSource]="getFilteredEmployees()">
    </dx-scheduler>

---

#####See Also#####
- [Data Layer - Query Concept](/concepts/30%20Data%20Layer/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept')
- [Data Binding - ArrayStore](/concepts/05%20Widgets/Scheduler/020%20Data%20Binding/10%20Simple%20Array/15%20ArrayStore.md '/Documentation/Guide/Widgets/Scheduler/Data_Binding/Simple_Array/ArrayStore/')
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/')

[tags]scheduler, data binding, provide data, array, process data, query