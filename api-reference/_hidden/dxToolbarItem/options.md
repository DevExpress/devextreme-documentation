---
id: dxToolbarItem.options
type: any
---
---
##### shortDescription
Configures the DevExtreme UI component used as a toolbar item.

---

---

##### jQuery

    $('#toolbar').dxToolbar({
        items: [{
            // ...
            widget: 'dxCheckBox',
            options: {
                text: 'Show IDs'
            },
        }]
    });

##### Angular

**options** should contain the properties of the DevExtreme UI component specified in the [widget](/api-reference/_hidden/dxToolbarItem/widget.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#widget') property. Because of this dependency, **options** cannot be typed and are not implemented as nested configuration components. Specify **options** with an object.

    <!-- tab: app.component.html -->
    <dx-toolbar ... >
        <dxi-item
            widget="dxCheckBox"
            [options]="{ text: 'Show IDs' }">
        </dxi-item>
    </dx-toolbar>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxToolbarModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxToolbarModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

**options** should contain the properties of the DevExtreme UI component specified in the [widget](/api-reference/_hidden/dxToolbarItem/widget.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#widget') property. Because of this dependency, **options** cannot be typed and are not implemented as nested configuration components. Specify **options** with an object. We recommend that you declare the object outside the configuration component to prevent possible issues caused by unnecessary re-rendering.

    <!-- tab: App.vue -->
    <template>
        <DxToolbar ... >
            <DxItem ...
                widget="dxCheckBox"
                :options="checkBoxOptions"
            />
        </DxToolbar>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxToolbar, {
        DxItem
    } from 'devextreme-vue/toolbar';

    export default {
        components: {
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

**options** should contain the properties of the DevExtreme UI component specified in the [widget](/api-reference/_hidden/dxToolbarItem/widget.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#widget') property. Because of this dependency, **options** cannot be typed and are not implemented as nested configuration components. Specify **options** with an object. We recommend that you declare the object outside the configuration component to prevent possible issues caused by unnecessary re-rendering.

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Toolbar, {
        Item
    } from 'devextreme-react/toolbar';

    class App extends React.Component {
        checkBoxOptions = { text: 'Show IDs' };

        render() {
            return (
                <Toolbar ... >
                    <Item
                        widget="dxCheckBox"
                        options={this.checkBoxOptions}
                    />
                </Toolbar>
            );
        }
    }
    export default App;

---

[note]If you use the Menu UI component as a toolbar item, the [adaptivityEnabled](/api-reference/10%20UI%20Components/dxMenu/1%20Configuration/adaptivityEnabled.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/#adaptivityEnabled') property does not apply.

#####See Also#####
- [Create a Toolbar and its Items](/concepts/05%20UI%20Components/Toolbar/00%20Getting%20Started%20with%20Toolbar/05%20Create%20a%20Toolbar%20and%20its%20Items.md '/Documentation/Guide/UI_Components/Toolbar/Getting_Started_with_Toolbar/#Create_a_Toolbar_and_its_Items')