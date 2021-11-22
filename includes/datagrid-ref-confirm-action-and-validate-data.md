---

##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            ${{apiMember}}: function(e) {
                const deferred = $.Deferred();
                const promptPromise = DevExpress.ui.dialog.confirm("Are you sure?", "Confirm changes");
                promptPromise.done((dialogResult) => {
                    if (dialogResult) {
                        $.ajax({
                            url: "https://url/to/your/validation/service",
                            dataType: "json",
                            data: e.newData,
                            success: function(validationResult) {
                                if (validationResult.errorText) {
                                    deferred.reject(validationResult.errorText);
                                } else {
                                    deferred.resolve(false);
                                }
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
        ${{functionName}}(e) {
            const isCanceled = new Promise((resolve, reject) => {
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
                                if (validationResult.errorText) {
                                    reject(validationResult.errorText);
                                } else {
                                    resolve(false);
                                } 
                            });
                    } else {
                        return resolve(true);
                    }
                });
            });
            e.cancel = isCanceled;
        }
    }

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... 
        (${{apiMember}})="${{functionName}}($event)">
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
            @${{vueAttribute}}="${{functionName}}">
        </Dx{WidgetName}>
    </template>
    <script>
    import Dx{WidgetName}, { ... } from 'devextreme-vue/{widget-name}';
    import { confirm } from 'devextreme/ui/dialog';
    // ...

    export default {
        components: {
            Dx{WidgetName},
            // ...
        },
        // ...
        methods: {
            ${{functionName}}(e) {
                const isCanceled = new Promise((resolve, reject) => {
                    const promptPromise = confirm("Are you sure?", "Confirm changes");
                    promptPromise.then((dialogResult) => {
                        if (dialogResult) {
                            let params = new HttpParams();
                            for (let key in e.newData) {
                                params = params.set(key, e.newData[key]);
                            }
                            fetch(`https://url/to/your/validation/service${params}`)
                                .then((validationResult) => {
                                    if (validationResult.errorText) {
                                        reject(validationResult.errorText);
                                    } else {
                                        resolve(false);
                                    } 
                                });
                        } else {
                            return resolve(true);
                        }
                    });
                });
                e.cancel = isCanceled;
            }
        },
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    
    import { confirm } from 'devextreme/ui/dialog';
    import {WidgetName}, { ... } from 'devextreme-react/{widget-name}';

    function ${{functionName}}(e) {
        const isCanceled = new Promise((resolve, reject) => {
            const promptPromise = confirm("Are you sure?", "Confirm changes");
            promptPromise.then((dialogResult) => {
                if (dialogResult) {
                    let params = new HttpParams();
                    for (let key in e.newData) {
                        params = params.set(key, e.newData[key]);
                    }
                    fetch(`https://url/to/your/validation/service${params}`)
                        .then((validationResult) => {
                            if (validationResult.errorText) {
                                reject(validationResult.errorText);
                            } else {
                                resolve(false);
                            } 
                        });
                } else {
                    return resolve(true);
                }
            });
        });
        e.cancel = isCanceled;
    }

    function App() {
        return (
            <{WidgetName} ...
                ${{apiMember}}={${{functionName}}}>
                // ...
            </{WidgetName}>
        );
    }

    export default App;

---
