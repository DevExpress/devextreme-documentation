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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler
            :data-source="dataSource"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxScheduler from 'devextreme-vue/scheduler';
    import ArrayStore from 'devextreme/data/array_store';
    
    const appointments = [ /* ... */ ];
    const dataSource = new ArrayStore({
        data: appointments,
        onLoaded: function () {
            // Event handling commands go here
        }
    });

    export default {
        components: {
            DxScheduler
        },
        data() {
            return {
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
    import ArrayStore from 'devextreme/data/array_store';

    const appointments = [ /* ... */ ];
    const dataSource = new ArrayStore({
        data: appointments,
        onLoaded: function () {
            // Event handling commands go here
        }
    });

    class App extends React.Component {
        render() {
            return (
                <Scheduler
                    dataSource={dataSource}
                />
            );
        }
    }
    export default App;

---

Data kept in the **ArrayStore** can be processed in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). Its purpose is similar to that of the [Query](/concepts/70%20Data%20Binding/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Binding/Data_Layer/#Query_Concept'), but the **DataSource** provides wider capabilities. For example, the **DataSource** can map objects from the array that underlies the **ArrayStore** as shown in the following code.

---

##### jQuery

    <!--JavaScript-->
    var appointments = [{ 
        desc: 'Meet with a customer', 
        employee: "Mary Watson",
        from: new Date("2016-04-10T11:00:00.000Z"), 
        to: new Date("2016-04-10T13:00:00.000Z") 
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
            from: new Date("2016-04-10T11:00:00.000Z"), 
            to: new Date("2016-04-10T13:00:00.000Z") 
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler
            :data-source="dataSource"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxScheduler from 'devextreme-vue/scheduler';
    import DataSource from "devextreme/data/data_source";

    const appointments = [{ 
        desc: 'Meet with a customer', 
        employee: "Mary Watson",
        from: new Date("2016-04-10T11:00:00.000Z"), 
        to: new Date("2016-04-10T13:00:00.000Z") 
    }, 
    // ...
    ];
    const dataSource = new DataSource({
        store: appointments,
        map: function (item) {
            return {
                text: item.employee + " : " + item.desc,
                startDate: item.from,
                endDate: item.to
            }   
        },
        paginate: false
    });

    export default {
        components: {
            DxScheduler
        },
        data() {
            return {
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
    import DataSource from "devextreme/data/data_source";

    const appointments = [{ 
        desc: 'Meet with a customer', 
        employee: "Mary Watson",
        from: new Date("2016-04-10T11:00:00.000Z"), 
        to: new Date("2016-04-10T13:00:00.000Z") 
    }, 
    // ...
    ];
    const dataSource = new DataSource({
        store: appointments,
        map: function (item) {
            return {
                text: item.employee + " : " + item.desc,
                startDate: item.from,
                endDate: item.to
            }   
        },
        paginate: false
    });

    class App extends React.Component {
        render() {
            return (
                <Scheduler
                    dataSource={dataSource}
                />
            );
        }
    }
    export default App;

---

#####See Also#####
- [Data Layer - What Are Stores](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores')
- [Data Layer - DataSource Examples | In-memory Data](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/0%20In-memory%20Data.md '/Documentation/Guide/Data_Binding/Data_Source_Examples/#In-memory_Data')
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview)
- [Scheduler API Reference](/api-reference/10%20UI%20Components/dxScheduler '/Documentation/ApiReference/UI_Components/dxScheduler/')

[tags]scheduler, data binding, provide data, ArrayStore, DataSource, process data
