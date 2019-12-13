**options** should contain the options of the DevExtreme widget specified in the [widget]({basewidgetpath}/Configuration/toolbar/${{nestedOption}}/#widget) option. Because of this dependency, **options** cannot be typed and are not implemented as nested configuration components in Angular, Vue, and React. In these frameworks, specify **options** with an object. We recommend that you declare the object outside the configuration component in Vue and React to prevent possible issues caused by unnecessary re-rendering.

---
##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-toolbar>
            <dxi-${{nestedOptionKebabCase}}
                widget="dxCheckBox"
                [options]="{ text: 'Show IDs' }">
            </dxi-${{nestedOptionKebabCase}}>
        </dxo-toolbar>
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
        <dx-{widget-name} ... >
            <dx-toolbar>
                <dx-${{nestedOptionKebabCase}}
                    widget="dxCheckBox"
                    :options="checkBoxOptions"
                />
            </dx-toolbar>
        </dx-{widget-name}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxToolbar,
        Dx${{nestedOptionImport}}
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxToolbar,
            Dx${{nestedOptionImport}}
        },
        data() {
            return {
                checkBoxOptions: { text: 'Show IDs' }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Toolbar,
        ${{nestedOptionImport}}
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        checkBoxOptions = { text: 'Show IDs' };

        render() {
            return (
                <{WidgetName} ... >
                    <Toolbar>
                        <${{nestedOptionImport}}
                            widget="dxCheckBox"
                            options={this.checkBoxOptions}
                        />
                    </Toolbar>
                </{WidgetName}>
            );
        }
    }
    export default App;

---

[note]If you use the **Menu** widget as a toolbar item, the [adaptivityEnabled](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration/adaptivityEnabled.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#adaptivityEnabled') option does not apply.