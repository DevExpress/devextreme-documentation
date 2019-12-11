---
type: function(gridState)
---
---
##### shortDescription
Specifies a function that is executed on state saving. Applies only if the [type](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/stateStoring/type.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/#type') is *'custom'*.

##### param(gridState): Object
The current widget state.

---
Use the **customSave** and [customLoad](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/stateStoring/customLoad.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/#customLoad') functions to manually implement state storing: in **customSave**, save the state to a custom storage; in **customLoad**, load it. You can also adjust the state in both functions.
 
In the following code, the state is saved and loaded from a remote storage:

---
#####jQuery

    <!--JavaScript-->
    function sendStorageRequest (storageKey, dataType, method, data) {
        var deferred = new $.Deferred;
        var storageRequestSettings = {
            url: "https://url/to/your/storage/" + JSON.stringify(storageKey),
            headers: {
                'Accept' : 'text/html',
                'Content-Type' : 'text/html'
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
                    return sendStorageRequest('storageKey', 'json', 'GET');;
                },
                customSave: function (state) {
                    sendStorageRequest('storageKey', 'text', 'PUT', state);
                }
            },
        });
    })

#####Angular

    <!--TypeScript-->
    import { Http, HttpModule, Headers, RequestOptions, ResponseContentType, RequestMethod  } from '@angular/http';
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    import 'rxjs/add/operator/toPromise';
    import 'rxjs/add/operator/catch';
    // ...
    export class AppComponent {
        constructor(private http: Http) { }

        sendStorageRequest = (storageKey, dataType, method, data) => {
            let url  = "https://url/to/your/storage/" + JSON.stringify(storageKey);
            let options: RequestOptions = new RequestOptions({
                headers: new Headers({
                    "Accept": "text/html",
                    "Content-Type": "text/html"
                }),
                method: method,
                responseType: dataType
            });
            if (data) { 
                options.body = JSON.stringify(data);
            }
            return http.request(url, options)
                        .toPromise()
                        .then(response => {
                            return response.json();
                        })
                        .catch(error => {
                            return Promise.reject(error.message || error)
                        });
        }

        loadState = () => {
            return this.sendStorageRequest('storageKey', ResponseContentType.Json, RequestMethod.Get);
        } 

        saveState = (state) => {
            this.sendStorageRequest('storageKey', ResponseContentType.Text, RequestMethod.Put, state);
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module,
            HttpModule
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

---