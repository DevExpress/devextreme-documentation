---
uid: common\grids:StateStoring.customSave
---
---
##### shortDescription
Specifies a function that is executed on state change. Applies only if the [type](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/stateStoring/type.md '{basewidgetpath}/Configuration/stateStoring/#type') is *"custom"*.

---
<!--
Use the **customSave** and **customLoad** functions to manually implement state storing: in **customSave**, save the state to a storage; in **customLoad**, load it. You can also modify the state in both functions.

#include common-githubbutton with {
    url: "https://github.com/DevExpress-Examples/devextreme-datagrid-modify-persisted-state/"
}

If you need to save and load the state from a remote storage, use the following code:

---
##### jQuery

    &lt;!--JavaScript--&gt;
    function sendStorageRequest (storageKey, dataType, method, data) {
        var deferred = new $.Deferred;
        var storageRequestSettings = {
            url: "https://url/to/your/storage/" + JSON.stringify(storageKey),
            headers: {
                "Accept" : "text/html",
                "Content-Type" : "text/html"
            },
            method: method,
            data: data ? JSON.stringify(data) : null,
            dataType: dataType,
            success: function (data) {
                deferred.resolve(data);
            },
            fail: function (error) {
                deferred.reject();
            }
        };
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

##### Angular

    &lt;!--TypeScript--&gt;
    import { HttpClient, HttpClientModule, HttpHeaders, HttpRequest } from "@angular/common/http";
    import { Dx{WidgetName}Module } from "devextreme-angular";
    import { lastValueFrom } from 'rxjs';
    import "rxjs/add/operator/catch";
    // ...
    export class AppComponent {
        constructor(private httpClient: HttpClient) { }

        sendStorageRequest = (storageKey, dataType, method, data) =&gt; {
            let url  = "https://url/to/your/storage/" + JSON.stringify(storageKey);
            let req: HttpRequest&lt;any&gt; = new HttpRequest(method, url, {
                headers: new HttpHeaders({
                    "Accept": "text/html",
                    "Content-Type": "text/html"
                }),
                responseType: dataType,
                body: data ? JSON.stringify(data) : null
            });
            return lastValueFrom(httpClient.request(req));
        }

        loadState = () =&gt; {
            return this.sendStorageRequest("storageKey", "json", "Get");
        } 

        saveState = (state) =&gt; {
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

    &lt;!--HTML--&gt;
    &lt;dx-{widget-name} ...&gt;
        &lt;dxo-state-storing 
            [enabled]="true" 
            type="custom" 
            [customLoad]="loadState"
            [customSave]="saveState"&gt;
        &lt;/dxo-state-storing&gt;
    &lt;/dx-{widget-name}&gt;

##### Vue

    &lt;!-- tab: App.vue --&gt;
    &lt;template&gt;
        &lt;Dx{WidgetName} ... &gt;
            &lt;DxStateStoring 
                :enabled="true" 
                type="custom" 
                :custom-load="loadState"
                :custom-save="saveState"
            /&gt;
        &lt;/Dx{WidgetName}&gt;
    &lt;/template&gt;

    &lt;script&gt;
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
            },
            body: data ? JSON.stringify(data) : null
        };
        return fetch(url, requestOptions)
                .then(response =&gt; response.json())
                .catch(() =&gt; { throw 'Data Loading Error'; });
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
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
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
            },
            body: data ? JSON.stringify(data) : null
        };
        return fetch(url, requestOptions)
                .then(response =&gt; response.json())
                .catch(() =&gt; { throw 'Data Loading Error'; });
    }

    export default function App() {
        const loadState = useCallback(() =&gt; {
            return sendStorageRequest("storageKey", "GET");
        }, []);

        const saveState = useCallback((state) =&gt; {
            sendStorageRequest("storageKey", "PUT", state);
        }, []);

        return (
            &lt;{WidgetName} ... &gt;
                &lt;StateStoring 
                    enabled={true}
                    type="custom"
                    customLoad={loadState}
                    customSave={saveState}
                /&gt;
            &lt;/{WidgetName}&gt;
        );
    }

---

#####See Also#####
- [state(state)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/state(state).md '{basewidgetpath}/Methods/#statestate')
-->