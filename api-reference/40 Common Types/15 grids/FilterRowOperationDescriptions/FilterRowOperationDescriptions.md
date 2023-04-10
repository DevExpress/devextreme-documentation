---
uid: common\grids:FilterRowOperationDescriptions
isType: 
---
---
##### shortDescription
Specifies descriptions for filter operations on the filter list.

---
<!--
The following code sample illustrates how to set this property:

---
##### jQuery

    &lt;!-- tab: index.js --&gt;
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

    &lt;!-- tab: app.component.html --&gt;
    &lt;dx-{widget-name} ... &gt;
        &lt;dxo-filter-row ... &gt;
            &lt;dxo-operation-descriptions
                startsWith="Begins with"&gt;
            &lt;/dxo-operation-descriptions&gt;
        &lt;/dxo-filter-row&gt;
    &lt;/dx-{widget-name}&gt;

    &lt;!-- tab: app.module.ts --&gt;
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

    &lt;!-- tab: App.vue --&gt;
    &lt;template&gt;
        &lt;Dx{WidgetName} ... &gt;
            &lt;DxFilterRow ... &gt;
                &lt;DxOperationDescriptions
                    starts-with="Begins with"
                /&gt;
            &lt;/DxFilterRow&gt;
        &lt;/Dx{WidgetName}&gt;
    &lt;/template&gt;

    &lt;script&gt;
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
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        FilterRow,
        OperationDescriptions
    } from 'devextreme-react/{widget-name}';

    export default function App() {
        return (
            &lt;{WidgetName} ... &gt;
                &lt;FilterRow ... &gt;
                    &lt;OperationDescriptions
                        startsWith="Begins with"
                    /&gt;
                &lt;/FilterRow&gt;
            &lt;/{WidgetName}&gt;
        );
    }

---

#####See Also#####
- **columns[]**.[filterOperations](/api-reference/_hidden/GridBaseColumn/filterOperations.md '{basewidgetpath}/Configuration/columns/#filterOperations')
-->