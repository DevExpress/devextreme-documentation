---
id: GridBase.Options.onRowRemoving
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a row is removed from the data source.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean | Promise<void>
**true**, a Promise resolved with **true**, or a rejected Promise stops row removal.       
**false** or a Promise resolved with **false** or **undefined** continues row removal.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.data): Object
The data of the row that should be removed.

##### field(e.element): TElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.key): any
The row's key.

##### field(e.model): any
Model data. Available only if you use Knockout.

---
[note] In batch [editing mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'), this function is executed for each row individually if several rows should be removed.

This function allows you to intercept row removal and perform additional actions. The following code shows how to use the function parameter's **cancel** field to prevent or continue removal. In this code, a Promise is assigned to this field. Removal continues if a user confirms it and row validation on the server succeeds (the Promise is resolved); otherwise, removal is prevented (the Promise is rejected):

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            onRowRemoving: function(e) {
                var deferred = $.Deferred();
                $.ajax({
                    url: `https://url/to/your/validation/service/${e.key}`,
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
                e.cancel = deferred.promise();
            },
        })
    })

#####Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
    // ...
    export class AppComponent {
        constructor(private httpClient: HttpClient) { /*...*/}
        async validateRemove(e) {
            const isCanceled = async () => {
                const validationResult = await this.httpClient
                    .get(`https://url/to/your/validation/service/${e.key}`)
                    .toPromise();
                if (validationResult.errorText) {
                    console.log(validationResult.errorText);
                    return true;
                } else {
                    return false;
                } 
            }
            e.cancel = await isCanceled();
        }
    }

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... 
        (onRowRemoving)="validateRemove($event)">
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
            @row-removing="validateRemove">
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
            async validateRemove(e) {
                const isCanceled = async () => {
                    const validationResult = await fetch(`https://url/to/your/validation/service/${e.key}`);
                    if (validationResult.errorText) {
                        console.log(validationResult.errorText);
                        return true;
                    } else {
                        return false;
                    }
                };
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

    async function validateRemove(e) {
        const isCanceled = async () => {
            const validationResult = await fetch(`https://url/to/your/validation/service/${e.key}`);
            if (validationResult.errorText) {
                console.log(validationResult.errorText);
                return true;
            } else {
                return false;
            }
        };
        e.cancel = await isCanceled();
    }

    function App() {
        return (
            <{WidgetName} ...
                onRowRemoving={validateRemove}>
                // ...
            </{WidgetName}>
        );
    }

    export default App;

---