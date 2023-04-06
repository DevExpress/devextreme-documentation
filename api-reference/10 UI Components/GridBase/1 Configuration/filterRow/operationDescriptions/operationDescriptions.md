---
id: GridBase.Options.filterRow.operationDescriptions
type: common\grids:FilterRowOperationDescriptions
inherits: common\grids:FilterRowOperationDescriptions
---
---
##### shortDescription
Specifies descriptions for filter operations on the filter list.

---
The following code sample illustrates how to set this property:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            filterRow: {
                // ...
                operationDescriptions: {
                    startsWith: "Begins with"
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-filter-row ... >
            <dxo-operation-descriptions
                startsWith="Begins with">
            </dxo-operation-descriptions>
        </dxo-filter-row>
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
            <DxFilterRow ... >
                <DxOperationDescriptions
                    starts-with="Begins with"
                />
            </DxFilterRow>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxFilterRow,
        DxOperationDescriptions
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxFilterRow,
            DxOperationDescriptions
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        FilterRow,
        OperationDescriptions
    } from 'devextreme-react/{widget-name}';

    export default function App() {
        return (
            <{WidgetName} ... >
                <FilterRow ... >
                    <OperationDescriptions
                        startsWith="Begins with"
                    />
                </FilterRow>
            </{WidgetName}>
        );
    }

---

#####See Also#####
- **columns[]**.[filterOperations](/api-reference/_hidden/GridBaseColumn/filterOperations.md '{basewidgetpath}/Configuration/columns/#filterOperations')