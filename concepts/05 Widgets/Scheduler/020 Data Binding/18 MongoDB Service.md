Use the third-party <a href="https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md" target="_blank">devextreme-query-mongodb</a> extension to query data from MongoDB. This extension implements data processing on a server according to the protocol the **Scheduler** uses. To access the server from the client, configure the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') as described in the [Custom Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/') article or use the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference" target="_blank">createStore</a> method. This method is a part of the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md" target="_blank">DevExtreme.AspNet.Data</a> extension. The following code shows how to use this method.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var serviceUrl = "http://url/to/my/service";
        $("#schedulerContainer").dxScheduler({
            dataSource: DevExpress.data.AspNet.createStore({
                key: "ID",
                loadUrl: serviceUrl,
                insertUrl: serviceUrl,
                updateUrl: serviceUrl,
                deleteUrl: serviceUrl
            }),
            // ...
        })
    });

#####Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    import CustomStore from "devextreme/data/custom_store";
    import { createStore } from "devextreme-aspnet-data-nojquery";
    // ...
    export class AppComponent {
        store: CustomStore;
        constructor() {
            let serviceUrl = "http://url/to/my/service";
            this.store = createStore({
                key: "ID",
                loadUrl: serviceUrl,
                insertUrl: serviceUrl,
                updateUrl: serviceUrl,
                deleteUrl: serviceUrl
            })
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
    <dx-scheduler ...
        [dataSource]="store">
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
    import { createStore } from 'devextreme-aspnet-data-nojquery';
    const serviceUrl = "http://url/to/my/service";
    const dataSource = createStore({
        key: "ID",
        loadUrl: serviceUrl,
        insertUrl: serviceUrl,
        updateUrl: serviceUrl,
        deleteUrl: serviceUrl
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
    import { createStore } from 'devextreme-aspnet-data-nojquery';
    const serviceUrl = "http://url/to/my/service";
    const dataSource = createStore({
        key: "ID",
        loadUrl: serviceUrl,
        insertUrl: serviceUrl,
        updateUrl: serviceUrl,
        deleteUrl: serviceUrl
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

See <a href="https://community.devexpress.com/blogs/oliver/archive/2017/03/24/devextreme-real-world-patterns.aspx" target="_blank">this series of blog posts</a> for more information on using DevExtreme UI components in applications with MongoDB.
