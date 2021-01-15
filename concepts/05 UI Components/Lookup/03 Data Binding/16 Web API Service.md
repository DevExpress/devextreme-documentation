DevExtreme provides the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md" target="_blank">DevExtreme.AspNet.Data</a> extension to access an ASP.NET Web API service. This extension consists of two parts: the server-side part implements data processing on the server according to the protocol the **Lookup** uses; the client-side part creates and configures a [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') to access the server from the client. The following code shows how to use the extension's client-side <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference" target="_blank">createStore</a> method.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        const serviceUrl = "http://url/to/my/service";
        $("#lookupContainer").dxLookup({
            dataSource: DevExpress.data.AspNet.createStore({
                key: "ID",
                loadUrl: serviceUrl + "/GetAction"
            }),
            // ...
        })
    });

##### Angular

    <!--HTML-->
    <dx-lookup ...
        [dataSource]="store">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    import CustomStore from "devextreme/data/custom_store";
    import { createStore } from "devextreme-aspnet-data-nojquery";
    // ...
    export class AppComponent {
        store: CustomStore;
        constructor() {
            const serviceUrl = "http://url/to/my/service";
            this.store = createStore({
                key: "ID",
                loadUrl: serviceUrl + "/GetAction"
            })
        }
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxLookup ...
            :data-source="store"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup } from 'devextreme-vue/lookup';
    import { createStore } from "devextreme-aspnet-data-nojquery";

    const serviceUrl = "http://url/to/my/service";

    export default {
        components: {
            DxLookup
        },
        data() {
            return {
                store: createStore({
                    key: "ID",
                    loadUrl: serviceUrl + "/GetAction"
                })
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Lookup } from 'devextreme-react/lookup';
    import { createStore } from "devextreme-aspnet-data-nojquery";

    const serviceUrl = "http://url/to/my/service";

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.store = createStore({
                key: "ID",
                loadUrl: serviceUrl + "/GetAction"
            });
        }

        render() {
            return (
                <Lookup ...
                    dataSource={this.store}
                />
            );
        }
    }

    export default App;

---