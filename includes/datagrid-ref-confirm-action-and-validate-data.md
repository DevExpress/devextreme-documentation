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
        async ${{functionName}}(e) {
            const isCanceled = async () => {
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
                        console.log(validationResult.errorText);
                        return true;
                    } else {
                        return false;
                    } 
                } else {
                    return true;
                }
            }
            e.cancel = await isCanceled();
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
    import dialog from 'devextreme/ui/dialog';
    // ...

    export default {
        components: {
            Dx{WidgetName},
            // ...
        },
        // ...
        methods: {
            async ${{functionName}}(e) {
                const isCanceled = async () => {
                    const dialogResult = await dialog.confirm("Are you sure?", "Confirm changes");
                    if (dialogResult) {
                        let params = "?";
                        for (let key in e.newData) {
                            params += `${key}=${e.newData[key]}&`;
                        }
                        params = params.slice(0, -1);
                        const validationResult = await fetch(`https://url/to/your/validation/service${params}`);
                        if (validationResult.errorText) {
                            console.log(validationResult.errorText);
                            return true;
                        } else {
                            return false;
                        } 
                    } else {
                        return true;
                    }
                }
                e.cancel = await isCanceled();
            }
        },
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    
    import dialog from 'devextreme/ui/dialog';
    import {WidgetName}, { ... } from 'devextreme-react/{widget-name}';

    async function ${{functionName}}(e) {
        const isCanceled = async () => {
            const dialogResult = await dialog.confirm("Are you sure?", "Confirm changes");
            if (dialogResult) {
                let params = "?";
                for (let key in e.newData) {
                    params += `${key}=${e.newData[key]}&`;
                }
                params = params.slice(0, -1);
                const validationResult = await fetch(`https://url/to/your/validation/service${params}`);
                if (validationResult.errorText) {
                    console.log(validationResult.errorText);
                    return true;
                } else {
                    return false;
                } 
            } else {
                return true;
            }
        }
        e.cancel = await isCanceled();
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
