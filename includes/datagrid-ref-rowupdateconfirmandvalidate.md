---

##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            onRowUpdating: function(e) {
                var deferred = $.Deferred();
                var promptPromise = DevExpress.ui.dialog.confirm("Are you sure?", "Confirm");
                promptPromise.done((dialogResult) => {
                    if (dialogResult) {
                        let params = "";
                        for (let key in e.newData) {
                            params += `${key}=${e.newData[key]}&`;
                        }
                        params = params.slice(0, -1);
                        $.ajax({
                            url: "https://url/to/your/validation/service",
                            dataType: "json",
                            data: params,
                            success: function(validationResult) {
                            !validationResult.errorText ? deferred.resolve(false) : deferred.reject(validationResult.errorText);
                            },
                            error: function() {
                                deferred.reject("Data Loading Error");
                            },
                            timeout: 5000
                        });
                    } else {
                    deferred.resolve(true);              
                    }
                });
                e.cancel = deferred.promise();
            }
        })
    })

##### Angular

    <!--tab: app.component.ts-->
    import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
    import { confirm } from 'devextreme/ui/dialog';
    // ...
    export class AppComponent {
        constructor(private httpClient: HttpClient) { /*...*/}
        // ...
        updateRow(e) {
            e.cancel = new Promise((resolve, reject) => {
                const promptPromise = confirm("Are you sure?", "Confirm changes");
                promptPromise.then((dialogResult) => {
                    if (dialogResult) {
                        let params = new HttpParams();
                        for (let key in e.newData) {
                            params = params.set(key, e.newData[key]);
                        }
                        this.httpClient
                            .get("https://url/to/your/validation/service", { params: params })
                            .toPromise()
                            .then((validationResult) => {
                                !validationResult.errorText ? resolve(false) : reject(validationResult.errorText);
                            })
                            .catch(() => reject());
                    } else {
                        resolve(true);
                    }
                });
            });
        }
    }

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... 
        (onRowUpdating)="updateRow($event)">
    </dx-{widget-name}>

    <!-- tab: app.module.ts -->
    // ... 
    import { DxDataGridModule } from 'devextreme-angular'; 
    import { HttpClientModule } from "@angular/common/http";

    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module,
            HttpClientModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            @row-updating="updateRow">
        </DxDataGrid>
    </template>
    <script>
    import Dx{WidgetName}, { ... } from 'devextreme-vue/{widget-name}';
    import dialog from 'devextreme/ui/dialog';
    // ...

    export default {
        components: {
            DxDataGrid,
            // ...
        },
        // ...
        methods: {
            updateRow(e) {
                e.cancel = new Promise((resolve, reject) => {
                    const promptPromise = dialog.confirm("Are you sure?", "Confirm changes");
                    promptPromise.then((dialogResult) => {
                        if (dialogResult) {
                            let params = "?";
                            for (let key in e.newData) {
                                params += `${key}=${e.newData[key]}&`;
                            }
                            params = params.slice(0, -1);
                            fetch(`https://url/to/your/validation/service${params}`)
                                .then((validationResult) => {
                                    !validationResult.errorText ? resolve(false) : reject(validationResult.errorText);
                                })
                                .catch(() => reject());
                        } else {
                            resolve(true);
                        }
                    });
                });
            }
        },
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    
    import {WidgetName}, { ... } from 'devextreme-react/{widget-name}';

    function onRowUpdating(e) {
    e.cancel = new Promise((resolve, reject) => {
        const promptPromise = dialog.confirm("Are you sure?", "Confirm changes");
        promptPromise.then((dialogResult) => {
        if (dialogResult) {
            let params = "?";
            for (let key in e.newData) {
            params += `${key}=${e.newData[key]}&`;
            }
            params = params.slice(0, -1);
            fetch(`https://url/to/your/validation/service${params}`)
            .then((validationResult) => {
                !validationResult.errorText
                ? resolve(false)
                : reject(validationResult.errorText);
            })
            .catch(() => reject());
        } else {
            resolve(true);
        }
        });
    });
    }

    function App() {
    return (
        <DataGrid ...
            onRowUpdating={onRowUpdating}>
            // ...
        </DataGrid>
    );
    }

    export default App;

---
