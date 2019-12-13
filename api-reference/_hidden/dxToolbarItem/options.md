---
id: dxToolbarItem.options
type: Object
---
---
##### shortDescription
Configures the DevExtreme widget used as a toolbar item.

---
**options** should contain the options of the DevExtreme widget specified in the [widget](/api-reference/_hidden/dxToolbarItem/widget.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/items/#widget') option. Because of this dependency, **options** cannot be typed and are not implemented as nested configuration components in Angular, Vue, and React. In these frameworks, specify **options** with an object. We recommend that you declare the object outside the configuration component in Vue and React to prevent possible issues caused by unnecessary re-rendering.

---
##### Angular

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

    <!-- tab: App.vue -->
    <template>
        <dx-toolbar ... >
            <dx-item ...
                widget="dxCheckBox"
                :options="checkBoxOptions"
            />
        </dx-toolbar>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
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

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
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

[note]If you use the **Menu** widget as a toolbar item, the [adaptivityEnabled](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration/adaptivityEnabled.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#adaptivityEnabled') option does not apply.

#####See Also#####
- [Toolbar - Specify Item Type](/concepts/05%20Widgets/Toolbar/05%20Specify%20Item%20Type.md '/Documentation/Guide/Widgets/Toolbar/Specify_Item_Type/')