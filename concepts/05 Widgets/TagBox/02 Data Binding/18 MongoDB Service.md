Use the third-party <a href="https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md" target="_blank">devextreme-query-mongodb</a> extension to query data from MongoDB. This extension implements data processing on a server according to the protocol the **TagBox** uses. To access the server from the client, configure the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') as described in the [Custom Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/') article or use the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference" target="_blank">createStore</a> method. This method is a part of the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md" target="_blank">DevExtreme.AspNet.Data</a> extension. The following code shows how to use this method.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var serviceUrl = "http://url/to/my/service";
        $("#tagBoxContainer").dxTagBox({
            dataSource: DevExpress.data.AspNet.createStore({
                key: "ID",
                loadUrl: serviceUrl,
                insertUrl: serviceUrl
            }),
            // ...
        })
    });

##### Angular

    <!--HTML-->
    <dx-tag-box ...
        [dataSource]="store">
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    import CustomStore from "devextreme/data/custom_store";
    import { createStore } from "devextreme-aspnet-data-nojquery";
    // ...
    export class AppComponent {
        store: CustomStore;
        constructor() {
            const serviceUrl = "http://url/to/my/service";
            this.store = createStore({
                key: "ID",
                loadUrl: serviceUrl,
                insertUrl: serviceUrl
            })
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTagBoxModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxTagBox ...
            :data-source="dataSource"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTagBox } from 'devextreme-vue/tag-box';
    import { createStore } from "devextreme-aspnet-data-nojquery";

    const serviceUrl = 'http://url/to/my/service';

    export default {
        components: {
            DxTagBox
        },
        data() {
            return {
                dataSource: createStore({
                    key: 'ID',
                    loadUrl: serviceUrl,
                    insertUrl: serviceUrl
                })
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TagBox } from 'devextreme-react/tag-box';
    import { createStore } from "devextreme-aspnet-data-nojquery";

    const serviceUrl = 'http://url/to/my/service';

    const dataSource = createStore({
        key: 'ID',
        loadUrl: serviceUrl,
        insertUrl: serviceUrl
    });

    class App extends React.Component {
        render() {
            return (
                <TagBox ...
                    dataSource={dataSource}
                />
            );
        }
    }

    export default App;

---

See <a href="https://community.devexpress.com/blogs/oliver/archive/2017/03/24/devextreme-real-world-patterns.aspx" target="_blank">this series of blog posts</a> for more information on using DevExtreme widgets in applications with MongoDB.
