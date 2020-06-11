DevExtreme provides the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md" target="_blank">DevExtreme.AspNet.Data</a> extension to access an ASP.NET Web API service. This extension consists of two parts: the server-side part implements data processing on the server according to the protocol the **TagBox** uses; the client-side part creates and configures a [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') to access the server from the client. The following code shows how to use the extension's client-side <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference" target="_blank">createStore</a> method.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        const serviceUrl = "http://url/to/my/service";
        $("#tagBoxContainer").dxTagBox({
            dataSource: DevExpress.data.AspNet.createStore({
                key: "ID",
                loadUrl: serviceUrl + "/GetAction",
                insertUrl: serviceUrl + "/InsertAction"
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
                loadUrl: serviceUrl + "/GetAction",
                insertUrl: serviceUrl + "/InsertAction"
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

    const serviceUrl = "http://url/to/my/service";

    export default {
        components: {
            DxTagBox
        },
        data() {
            return {
                dataSource: createStore({
                    key: "ID",
                    loadUrl: serviceUrl + "/GetAction",
                    insertUrl: serviceUrl + "/InsertAction"
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

    const serviceUrl = "http://url/to/my/service";

    const dataSource = createStore({
        key: "ID",
        loadUrl: serviceUrl + "/GetAction",
        insertUrl: serviceUrl + "/InsertAction"
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