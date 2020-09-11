---
id: GridBaseColumn.format
type: format
default: ''
---
---
##### shortDescription
Formats a value before it is displayed in a column cell.

---
See the [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/') section for details on accepted values.

In the following code, the *"fixedPoint"* [format type](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type') with a [precision](/api-reference/50%20Common/Object%20Structures/format/precision.md '/Documentation/ApiReference/Common/Object_Structures/format/#precision') of **2** decimal places is applied to column values:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                // ...
                format: {
                    type: "fixedPoint",
                    precision: 2
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-column ... >
            <dxo-format
                type="fixedPoint"
                [precision]="2">
            </dxo-format>
        </dxi-column>
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
            <DxColumn ... >
                <DxFormat
                    type="fixedPoint"
                    :precision="2"
                />
            </DxColumn>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxColumn,
        DxFormat
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn,
            DxFormat
        },
        data() {
            // ...
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Column,
        Format
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        // ...
        render() {
            return (
                <{WidgetName}>
                    <Column ... >
                        <Format
                            type="fixedPoint"
                            precision={2}
                        />
                    </Column>
                </{WidgetName}>
            );
        }
    }
    export default App;

---

The **format** option also limits user input in cells that use the [DateBox](/api-reference/10%20UI%20Widgets/dxDateBox '/Documentation/ApiReference/UI_Widgets/dxDateBox/') widget for editing. For cells that use the [NumberBox](/api-reference/10%20UI%20Widgets/dxNumberBox '/Documentation/ApiReference/UI_Widgets/dxNumberBox/') widget, you can specify the [editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '{basewidgetpath}/Configuration/columns/#editorOptions').**format** option, as shown in the following demo:

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RecalculateWhileEditing/"
}
