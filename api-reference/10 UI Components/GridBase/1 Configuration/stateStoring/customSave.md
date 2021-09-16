---
id: GridBase.Options.stateStoring.customSave
type: function(gridState)
---
---
##### shortDescription
Specifies a function that is executed on state saving. Applies only if the [type](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/stateStoring/type.md '{basewidgetpath}/Configuration/stateStoring/#type') is *"custom"*.

##### param(gridState): Object
The current UI component state.

---

The {WidgetName} automatically calls the **customSave** function on data source initialization and each time a user applies changes. If you need to specify state on demand, use the [state(state)]({basewidgetpath}/Methods/#statestate) method.  

Use the **customSave** and [customLoad](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/stateStoring/customLoad.md '{basewidgetpath}/Configuration/stateStoring/#customLoad') functions to manually implement state storing: in **customSave**, save the state to a custom storage; in **customLoad**, load it. You can also adjust the state in both functions.
 
In the following code, the state is saved and loaded from a remote storage:

---
#####jQuery

    <!--JavaScript-->
    function sendStorageRequest (storageKey, dataType, method, data) {
        var deferred = new $.Deferred;
        var storageRequestSettings = {
            url: "https://url/to/your/storage/" + JSON.stringify(storageKey),
            headers: {
                "Accept" : "text/html",
                "Content-Type" : "text/html"
            },
            method: method,
            dataType: dataType,
            success: function (data) {
                deferred.resolve(data);
            },
            fail: function (error) {
                deferred.reject();
            }
        };
        if (data) {
            storageRequestSettings.data = JSON.stringify(data);
        }
        $.ajax(storageRequestSettings);
        return deferred.promise();
    }
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            stateStoring: {
                enabled: true,
                type: "custom",
                customLoad: function () {
                    return sendStorageRequest("storageKey", "json", "GET");
                },
                customSave: function (state) {
                    sendStorageRequest("storageKey", "text", "PUT", state);
                }
            },
        });
    })

#####Angular

    <!--TypeScript-->
    import { HttpClient, HttpClientModule, HttpHeaders, HttpRequest } from "@angular/common/http";
    import { Dx{WidgetName}Module } from "devextreme-angular";
    import "rxjs/add/operator/toPromise";
    import "rxjs/add/operator/catch";
    // ...
    export class AppComponent {
        constructor(private httpClient: HttpClient) { }

        sendStorageRequest = (storageKey, dataType, method, data) => {
            let url  = "https://url/to/your/storage/" + JSON.stringify(storageKey);
            let req: HttpRequest = new HttpRequest(method, url, {
                headers: new HttpHeaders({
                    "Accept": "text/html",
                    "Content-Type": "text/html"
                }),
                responseType: dataType
            });
            if (data) {
                req.body = JSON.stringify(data);
            }
            return httpClient.request(req)
                .toPromise();
        }

        loadState = () => {
            return this.sendStorageRequest("storageKey", "json", "Get");
        } 

        saveState = (state) => {
            this.sendStorageRequest("storageKey", "text", "Put", state);
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-{widget-name} ...>
        <dxo-state-storing 
            [enabled]="true" 
            type="custom" 
            [customLoad]="loadState"
            [customSave]="saveState">
        </dxo-state-storing>
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxStateStoring 
                :enabled="true" 
                type="custom" 
                :custom-load="loadState"
                :custom-save="saveState"
            />
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxStateStoring
    } from 'devextreme-vue/{widget-name}';
    import 'whatwg-fetch';

    function sendStorageRequest (storageKey, method, data) {
        const url = "https://url/to/your/storage/" + JSON.stringify(storageKey);
        const requestOptions = {
            method: method,
            headers: {
                "Accept": "text/html",
                "Content-Type": "text/html"
            }
        };
        if (data) {
            requestOptions.body = JSON.stringify(data);
        }
        return fetch(url, requestOptions)
                .then(response => response.json())
                .catch(() => { throw 'Data Loading Error'; });
    }

    export default {
        components: {
            Dx{WidgetName},
            DxStateStoring
        },
        // ...
        methods: {
            loadState () {
                return sendStorageRequest("storageKey", "GET");
            },
            saveState (state) {
                sendStorageRequest("storageKey", "PUT", state);
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        StateStoring
    } from 'devextreme-react/{widget-name}';
    import 'whatwg-fetch';

    function sendStorageRequest (storageKey, method, data) {
        const url = "https://url/to/your/storage/" + JSON.stringify(storageKey);
        const requestOptions = {
            method: method,
            headers: {
                "Accept": "text/html",
                "Content-Type": "text/html"
            }
        };
        if (data) {
            requestOptions.body = JSON.stringify(data);
        }
        return fetch(url, requestOptions)
                .then(response => response.json())
                .catch(() => { throw 'Data Loading Error'; });
    }

    export default function App() {
        const loadState = useCallback(() => {
            return sendStorageRequest("storageKey", "GET");
        }, []);

        const saveState = useCallback((state) => {
            sendStorageRequest("storageKey", "PUT", state);
        }, []);

        return (
            <{WidgetName} ... >
                <StateStoring 
                    enabled={true}
                    type="custom"
                    customLoad={loadState}
                    customSave={saveState}
                />
            </{WidgetName}>
        );
    }

---