---

##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            onRowUpdating: function(e) {
                const deferred = $.Deferred();
                const promptPromise = DevExpress.ui.dialog.confirm("Are you sure?", "Confirm changes");
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
        async updateRow(e) {
            const isCancel = async () => {
                const dialogResult = await confirm("Are you sure?", "Confirm changes");
                if (dialogResult) {
                    let params = new HttpParams();
                    for (let key in e.newData) {
                        params = params.set(key, e.newData[key]);
                    }
                    const validationResult = await this.httpClient
                        .get("https://url/to/your/validation/service", { params: params })
                        .toPromise();
                    if (validationResult.errorText) {
                        throw validationResult.errorText;
                    } else {
                        return false;
                    } 
                } else {
                    return true;
                }
            }
            e.cancel = await isCancel();
        }
    }

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... 
        (onRowUpdating)="updateRow($event)">
    </dx-{widget-name}>

    <!-- tab: app.module.ts -->
    // ... 
    import { Dx{WidgetName}Module } from 'devextreme-angular'; 
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
        <Dx{WidgetName} ...
            @row-updating="updateRow">
        </Dx{WidgetName}>
    </template>
    <script>
    import Dx{WidgetName}, { ... } from 'devextreme-vue/{widget-name}';
    import dialog from 'devextreme/ui/dialog';
    // ...

    export default {
        components: {
            Dx{WidgetName},
            // ...
        },
        // ...
        methods: {
            async updateRow(e) {
                const isCancel = async () => {
                    const dialogResult = await dialog.confirm("Are you sure?", "Confirm changes");
                    if (dialogResult) {
                        let params = "?";
                        for (let key in e.newData) {
                            params += `${key}=${e.newData[key]}&`;
                        }
                        params = params.slice(0, -1);
                        const validationResult = await fetch(`https://url/to/your/validation/service${params}`);
                        if (validationResult.errorText) {
                            throw validationResult.errorText;
                        } else {
                            return false;
                        } 
                    } else {
                        return true;
                    }
                }
                e.cancel = await isCancel();
            }
        },
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    
    import dialog from 'devextreme/ui/dialog';
    import {WidgetName}, { ... } from 'devextreme-react/{widget-name}';

    async function onRowUpdating(e) {
        const isCancel = async () => {
            const dialogResult = await dialog.confirm("Are you sure?", "Confirm changes");
            if (dialogResult) {
                let params = "?";
                for (let key in e.newData) {
                    params += `${key}=${e.newData[key]}&`;
                }
                params = params.slice(0, -1);
                const validationResult = await fetch(`https://url/to/your/validation/service${params}`);
                if (validationResult.errorText) {
                    throw validationResult.errorText;
                } else {
                    return false;
                } 
            } else {
                return true;
            }
        }
        e.cancel = await isCancel();
    }

    function App() {
        return (
            <{WidgetName} ...
                onRowUpdating={onRowUpdating}>
                // ...
            </{WidgetName}>
        );
    }

    export default App;

---
