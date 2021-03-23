To bind the Scheduler to an array, pass this array to the [dataSource](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#dataSource') property.

---

##### jQuery

    <!--JavaScript-->
    var appointments = [{ 
        text: 'Meet with a customer', 
        startDate: new Date("2016-4-25T1:30:00.000Z"),
        endDate: new Date("2016-4-25T3:30:00.000Z")
    }, { 
        text: 'Discuss results', 
        startDate: new Date("2016-4-25T9:0:00.000Z"),
        endDate: new Date("2016-4-25T10:0:00.000Z")
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
            startDate: new Date("2016-4-25T1:30:00.000Z"),
            endDate: new Date("2016-4-25T3:30:00.000Z")
        }, {
            text: "Discuss results",
            startDate: new Date("2016-4-25T9:0:00.000Z"),
            endDate: new Date("2016-4-25T10:0:00.000Z")
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
   
##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler
            :data-source="appointments"
            :current-date="currentDate"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxScheduler from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler
        },
        data() {
            return {
                currentDate: new Date(2016, 4, 25),
                appointments: [{ 
                    text: 'Meet with a customer', 
                    startDate: new Date("2016-4-25T1:30:00.000Z"),
                    endDate: new Date("2016-4-25T3:30:00.000Z")
                }, { 
                    text: 'Discuss results', 
                    startDate: new Date("2016-4-25T9:0:00.000Z"),
                    endDate: new Date("2016-4-25T10:0:00.000Z")
                }, // ...
                ];
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Scheduler from 'devextreme-react/scheduler';

    const appointments = [{ 
        text: 'Meet with a customer', 
        startDate: new Date("2016-4-25T1:30:00.000Z"),
        endDate: new Date("2016-4-25T3:30:00.000Z")
    }, { 
        text: 'Discuss results', 
        startDate: new Date("2016-4-25T9:0:00.000Z"),
        endDate: new Date("2016-4-25T10:0:00.000Z")
    }, // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <Scheduler
                    dataSource={appointments}
                    defaultCurrentDate={new Date(2016, 4, 25)} 
                />
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/SimpleArray/"
}

If objects in the array need to be processed (for example, filtered), you can create a [Query](/concepts/70%20Data%20Binding/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Binding/Data_Layer/#Query_Concept'). In the following code, a Query selects objects with `text` containing *'meet'*.

---

##### jQuery

    <!--JavaScript-->
    var appointments = [{ 
        text: 'Meet with a customer', 
        startDate: new Date("2016-4-10T11:0:00.000Z"), 
        endDate: new Date("2016-4-10T13:0:00.000Z") 
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
            startDate: new Date("2016-4-10T11:0:00.000Z"), 
            endDate: new Date("2016-4-10T13:0:00.000Z") 
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler
            :data-source="dataSource"
            :current-date="currentDate"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxScheduler from 'devextreme-vue/scheduler';
    import Query from 'devextreme/data/query';

    const appointments = [{ 
        text: 'Meet with a customer', 
        startDate: new Date("2016-4-10T11:0:00.000Z"), 
        endDate: new Date("2016-4-10T13:0:00.000Z") 
    }, 
    // ...
    ];
    const dataSource = Query(appointments).filter("text", "contains", "meet").toArray();

    export default {
        components: {
            DxScheduler
        },
        data() {
            return {
                currentDate: new Date(2016, 4, 10),
                dataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Scheduler from 'devextreme-react/scheduler';
    import Query from 'devextreme/data/query';

    const appointments = [{ 
        text: 'Meet with a customer', 
        startDate: new Date("2016-4-10T11:0:00.000Z"), 
        endDate: new Date("2016-4-10T13:0:00.000Z") 
    }, 
    // ...
    ];
    const dataSource = Query(appointments).filter("text", "contains", "meet").toArray();

    class App extends React.Component {
        render() {
            return (
                <Scheduler
                    dataSource={dataSource}
                    defaultCurrentDate={new Date(2016, 4, 10)} 
                />
            );
        }
    }
    export default App;

---

#####See Also#####
- [Data Layer - Query Concept](/concepts/70%20Data%20Binding/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Binding/Data_Layer/#Query_Concept')
- [Data Binding - ArrayStore](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/10%20Local%20Array.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/')
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Components/dxScheduler/')

[tags]scheduler, data binding, provide data, array, process data, query