---
id: GridBaseColumn.lookup.allowClearing
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether to display the Clear button in lookup column cells while they are being edited.

---
Set this option to **true** only if your data source accepts null values.

To specify this option based on a condition, set the [showClearButton](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/showClearButton.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#showClearButton') option instead. This is an option of the [SelectBox](https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/Overview) UI component which is used as an editor for lookup column cells. **allowClearing** is an alias for this option in the **{WidgetName}**. The following code shows how to set **showClearButton** in the [onEditorPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onEditorPreparing.md '{basewidgetpath}/Configuration/#onEditorPreparing') event handler:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            onEditorPreparing: function (e) {
                if (/* a condition to set the option's value */) {
                    e.editorOptions.showClearButton = true;
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        onEditorPreparing(e) {
            if (/* a condition to set the option's value */) {
                e.editorOptions.showClearButton = true;
            }
        }
    }

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
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        (onEditorPreparing)="onEditorPreparing($event)">
        <!-- ... -->
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            :on-editor-preparing="onEditorPreparing">
            <!-- ... -->
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        // ...
        methods: {
            onEditorPreparing(e) {
                if (/* a condition to set the option's value */) {
                    e.editorOptions.showClearButton = true;
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        onEditorPreparing(e) {
            if (/* a condition to set the option's value */) {
                e.editorOptions.showClearButton = true;
            }
        }

        render() {
            return (
                <{WidgetName} ...
                    onEditorPreparing={this.onEditorPreparing}>
                    {/* ... */}
                </{WidgetName}>
            );
        }
    }
    export default App;

---
