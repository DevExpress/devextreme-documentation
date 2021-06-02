---
id: dxFilterBuilder.Options.filterOperationDescriptions
type: Object
---
---
##### shortDescription
Specifies filter operation descriptions.

---
The following code sample illustrates how to set this property:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            filterOperationDescriptions: {
                startsWith: "Begins with"
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-filter-operation-descriptions
            startsWith="Begins with">
        </dxo-filter-operation-descriptions>
    </dx-{widget-name}>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxFilterOperationDescriptions
                starts-with="Begins with"
            />
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxFilterOperationDescriptions
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxFilterOperationDescriptions
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        FilterOperationDescriptions
    } from 'devextreme-react/{widget-name}';

    export default function App() {
        return (
            <{WidgetName} ... >
                <FilterOperationDescriptions
                    startsWith="Begins with"
                />
            </{WidgetName}>
        );
    }

---

#####See Also#####
- **fields[]**.[filterOperations](/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/#filterOperations)