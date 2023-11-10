---
##### Angular

**options** should contain the properties of the DevExtreme UI component specified in the [widget]({basewidgetpath}/Configuration/toolbar/items/#widget) property. Because of this dependency, **options** cannot be typed and are not implemented as nested configuration components. Specify **options** with an object.

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-toolbar>
            <dxi-item
                widget="dxCheckBox"
                [options]="{ text: 'Show IDs' }">
            </dxi-item>
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

**options** should contain the properties of the DevExtreme UI component specified in the [widget]({basewidgetpath}/Configuration/toolbar/items/#widget) property. Because of this dependency, **options** cannot be typed and are not implemented as nested configuration components. Specify **options** with an object. We recommend that you declare the object outside the configuration component to prevent possible issues caused by unnecessary re-rendering.

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxToolbar>
                <DxItem
                    widget="dxCheckBox"
                    :options="checkBoxOptions"
                />
            </DxToolbar>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxToolbar,
        DxItem
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxToolbar,
            DxItem
        },
        data() {
            return {
                checkBoxOptions: { text: 'Show IDs' }
            }
        }
    }
    </script>

##### React

**options** should contain the properties of the DevExtreme UI component specified in the [widget]({basewidgetpath}/Configuration/toolbar/items/#widget) property. Because of this dependency, **options** cannot be typed and are not implemented as nested configuration components. Specify **options** with an object. We recommend that you declare the object outside the configuration component to prevent possible issues caused by unnecessary re-rendering.

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Toolbar,
        Item
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        checkBoxOptions = { text: 'Show IDs' };

        render() {
            return (
                <{WidgetName} ... >
                    <Toolbar>
                        <Item
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

[note]If you use the Menu UI component as a toolbar item, the [adaptivityEnabled](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration/adaptivityEnabled.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/#adaptivityEnabled') property does not apply.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/ToolbarCustomization/"
}